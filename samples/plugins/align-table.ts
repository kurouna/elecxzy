import type { Plugin, PluginInput } from './elecxzy-plugin'

// +==================================================================+
// |  align-table — tidy up a Markdown pipe table                     |
// |  Run it with  M-x align-table                                    |
// +==================================================================+
//
// Turns this:
//
//     | Name | 言語 | Lines |
//     |--|--|--|
//     | PieceTable | TypeScript | 1200 |
//     | 設定 | JSON | 30 |
//
// into this:
//
//     | Name       | 言語       | Lines |
//     | ---------- | ---------- | ----- |
//     | PieceTable | TypeScript | 1200  |
//     | 設定       | JSON       | 30    |
//
// Columns are padded with full-width (CJK) awareness so Japanese cells line
// up, and per-column alignment is preserved from the separator row
// (:--- left, :--: centre, ---: right).
//
// ASCII frame characters are used everywhere on purpose — Unicode box glyphs
// get measured as full-width by some fonts in elecxzy's canvas metrics.

/** Visual column width of a string: full-width (CJK etc.) glyphs count as 2. */
function displayWidth(s: string): number {
  let w = 0
  for (const ch of s) {
    const cp = ch.codePointAt(0)!
    w += isWide(cp) ? 2 : 1
  }
  return w
}

/** Rough East-Asian-Wide / Full-width test — enough for table cells. */
function isWide(cp: number): boolean {
  return (
    cp >= 0x1100 &&
    (cp <= 0x115f || // Hangul Jamo
      (cp >= 0x2e80 && cp <= 0x303e) || // CJK Radicals .. Kangxi
      (cp >= 0x3041 && cp <= 0x33ff) || // Hiragana, Katakana, CJK symbols
      (cp >= 0x3400 && cp <= 0x4dbf) || // CJK Ext A
      (cp >= 0x4e00 && cp <= 0x9fff) || // CJK Unified
      (cp >= 0xac00 && cp <= 0xd7a3) || // Hangul Syllables
      (cp >= 0xf900 && cp <= 0xfaff) || // CJK Compatibility
      (cp >= 0xff00 && cp <= 0xff60) || // Fullwidth Forms
      (cp >= 0xffe0 && cp <= 0xffe6) ||
      (cp >= 0x1f300 && cp <= 0x1faff) || // Emoji & pictographs
      (cp >= 0x20000 && cp <= 0x3fffd)) // CJK Ext B+
  )
}

type Align = 'left' | 'right' | 'center'

/** Pad `s` to `width` display columns according to alignment. */
function padCell(s: string, width: number, align: Align): string {
  const extra = width - displayWidth(s)
  if (extra <= 0) return s
  if (align === 'right') return ' '.repeat(extra) + s
  if (align === 'center') {
    const left = Math.floor(extra / 2)
    return ' '.repeat(left) + s + ' '.repeat(extra - left)
  }
  return s + ' '.repeat(extra)
}

/** Split one table row into trimmed cells, ignoring the outer pipes. */
function splitRow(line: string): string[] {
  let s = line.trim()
  if (s.startsWith('|')) s = s.slice(1)
  if (s.endsWith('|')) s = s.slice(0, -1)
  // Split on pipes that are not escaped with a backslash.
  return s.split(/(?<!\\)\|/).map((c) => c.trim())
}

/** Is this row the |---|:--:|---| style separator? */
function isSeparator(cells: string[]): boolean {
  return cells.length > 0 && cells.every((c) => /^:?-+:?$/.test(c))
}

function alignOf(sep: string): Align {
  const left = sep.startsWith(':')
  const right = sep.endsWith(':')
  if (left && right) return 'center'
  if (right) return 'right'
  return 'left'
}

const plugin: Plugin = {
  command: 'align-table',
  description: 'Align the selected Markdown pipe table (CJK-aware)',
  apiVersion: 1,
  execute(input: PluginInput) {
    // Operate on the selection, or on the contiguous block of table lines
    // surrounding the caret when nothing is selected.
    const text = input.text
    let start: number
    let length: number
    if (input.selection && input.selection.length > 0) {
      start = input.selection.start
      length = input.selection.length
    } else {
      const looksLikeRow = (off: number) => {
        let ls = off
        while (ls > 0 && text[ls - 1] !== '\n') ls--
        let le = off
        while (le < text.length && text[le] !== '\n') le++
        return { ls, le, isRow: text.slice(ls, le).includes('|') }
      }
      const here = looksLikeRow(input.cursor)
      if (!here.isRow) {
        return { message: 'align-table: cursor is not on a table row' }
      }
      let blockStart = here.ls
      while (blockStart > 0) {
        const prev = looksLikeRow(blockStart - 1)
        if (!prev.isRow) break
        blockStart = prev.ls
      }
      let blockEnd = here.le
      while (blockEnd < text.length) {
        const next = looksLikeRow(blockEnd + 1)
        if (!next.isRow) break
        blockEnd = next.le
      }
      start = blockStart
      length = blockEnd - blockStart
    }

    const raw = text.slice(start, start + length).replace(/\r\n/g, '\n')
    // Keep leading indentation of the first line; align everything to it.
    const indent = /^[ \t]*/.exec(raw)?.[0] ?? ''
    const lines = raw.split('\n')
    const rows = lines.map((l) => (l.trim() === '' ? null : splitRow(l)))

    const dataRows = rows.filter((r): r is string[] => r !== null)
    if (dataRows.length === 0) {
      return { message: 'align-table: no table rows found' }
    }

    const cols = Math.max(...dataRows.map((r) => r.length))
    const sepIndex = rows.findIndex((r) => r !== null && isSeparator(r))

    // Per-column alignment from the separator row (default left).
    const aligns: Align[] = new Array(cols).fill('left')
    if (sepIndex >= 0) {
      const sep = rows[sepIndex] as string[]
      for (let c = 0; c < cols; c++) {
        if (c < sep.length) aligns[c] = alignOf(sep[c])
      }
    }

    // Column widths from content rows (skip the separator).
    const widths = new Array(cols).fill(3) // min 3 so '---' fits
    rows.forEach((r, i) => {
      if (!r || i === sepIndex) return
      for (let c = 0; c < cols; c++) {
        const w = displayWidth(r[c] ?? '')
        if (w > widths[c]) widths[c] = w
      }
    })

    const out = rows.map((r, i) => {
      if (r === null) return indent.trimEnd() // preserve blank separators in selection
      if (i === sepIndex) {
        const cells = widths.map((w, c) => {
          const a = aligns[c]
          const dash = '-'.repeat(Math.max(1, w - (a === 'center' ? 2 : a === 'left' ? 0 : 1)))
          if (a === 'center') return `:${dash}:`
          if (a === 'right') return `${dash}:`
          return dash
        })
        return `${indent}| ${cells.join(' | ')} |`
      }
      const cells = widths.map((w, c) => padCell(r[c] ?? '', w, aligns[c]))
      return `${indent}| ${cells.join(' | ')} |`
    })

    const result = out.join('\n')
    return {
      text: result,
      start,
      length,
      cursor: start + result.length,
      message: `align-table: formatted ${dataRows.length} row(s) × ${cols} column(s)`,
    }
  },
}

export default plugin
