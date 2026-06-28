import type { Plugin, PluginInput } from './elecxzy-plugin'

// +==================================================================+
// |  comment-banner — wrap the selected line(s) in a decorative box   |
// |  Run it with  M-x comment-banner                                  |
// +==================================================================+
//
// Turns this:
//
//     Section Title
//
// into this (in a .ts buffer):
//
//     // +===================+
//     // |   Section Title   |
//     // +===================+
//
// The comment marker is picked from the buffer language, the box width is
// computed with full-width (CJK) awareness so Japanese headers line up too,
// and each selected line becomes one centred row inside the box.
//
// NOTE: the frame uses ASCII '+', '=', '|' on purpose. Unicode box-drawing
// glyphs (═ ║ …) get measured as full-width by some fonts in elecxzy's
// canvas metrics, which breaks alignment; ASCII shares the half-width
// advance of spaces and Latin text, so the box always lines up.

/** Visual column width of a string: full-width (CJK etc.) glyphs count as 2. */
function displayWidth(s: string): number {
  let w = 0
  for (const ch of s) {
    const cp = ch.codePointAt(0)!
    w += isWide(cp) ? 2 : 1
  }
  return w
}

/** Rough East-Asian-Wide / Full-width test — enough for headers. */
function isWide(cp: number): boolean {
  return (
    cp >= 0x1100 &&
    (cp <= 0x115f || // Hangul Jamo
      cp === 0x2329 ||
      cp === 0x232a ||
      (cp >= 0x2e80 && cp <= 0x303e) || // CJK Radicals .. Kangxi
      (cp >= 0x3041 && cp <= 0x33ff) || // Hiragana, Katakana, CJK symbols
      (cp >= 0x3400 && cp <= 0x4dbf) || // CJK Ext A
      (cp >= 0x4e00 && cp <= 0x9fff) || // CJK Unified
      (cp >= 0xa000 && cp <= 0xa4cf) || // Yi
      (cp >= 0xac00 && cp <= 0xd7a3) || // Hangul Syllables
      (cp >= 0xf900 && cp <= 0xfaff) || // CJK Compatibility
      (cp >= 0xfe30 && cp <= 0xfe4f) || // CJK Compatibility Forms
      (cp >= 0xff00 && cp <= 0xff60) || // Fullwidth Forms
      (cp >= 0xffe0 && cp <= 0xffe6) ||
      (cp >= 0x1f300 && cp <= 0x1faff) || // Emoji & pictographs
      (cp >= 0x20000 && cp <= 0x3fffd)) // CJK Ext B+
  )
}

/** Comment marker for a language: prefix for line comments, or a block pair. */
function commentStyle(language: string | null): { prefix: string } {
  switch ((language ?? '').toLowerCase()) {
    case 'python':
    case 'ruby':
    case 'shell':
    case 'bash':
    case 'sh':
    case 'yaml':
    case 'toml':
    case 'perl':
    case 'r':
      return { prefix: '#' }
    case 'lisp':
    case 'elisp':
    case 'emacs-lisp':
    case 'clojure':
    case 'scheme':
      return { prefix: ';;' }
    case 'sql':
    case 'haskell':
    case 'lua':
    case 'ada':
      return { prefix: '--' }
    case 'vim':
      return { prefix: '"' }
    default:
      // c, cpp, java, js, ts, tsx, go, rust, css, php, kotlin, swift, …
      return { prefix: '//' }
  }
}

const plugin: Plugin = {
  command: 'comment-banner',
  description: 'Wrap the line/selection in a decorative comment box (CJK-aware)',
  apiVersion: 1,
  execute(input: PluginInput) {
    // Resolve the range we operate on: the active region, or the whole line
    // under the caret when nothing is selected.
    let start: number
    let length: number
    if (input.selection && input.selection.length > 0) {
      start = input.selection.start
      length = input.selection.length
    } else {
      const text = input.text
      let ls = input.cursor
      while (ls > 0 && text[ls - 1] !== '\n') ls--
      let le = input.cursor
      while (le < text.length && text[le] !== '\n') le++
      start = ls
      length = le - ls
    }

    const raw = input.text.slice(start, start + length)
    const lines = raw.replace(/\r\n/g, '\n').split('\n').map((l) => l.trim())

    // Drop trailing empties so a one-line selection with a newline stays tidy.
    while (lines.length > 1 && lines[lines.length - 1] === '') lines.pop()
    if (lines.length === 0 || lines.every((l) => l === '')) {
      return { message: 'comment-banner: nothing to box (empty line/selection)' }
    }

    // Detect indentation of the first selected line to keep the box aligned.
    const indentMatch = /^[ \t]*/.exec(input.text.slice(start).split('\n')[0])
    const indent = indentMatch ? indentMatch[0] : ''
    const trimmed = lines.map((l) => l.replace(/^[ \t]+/, ''))

    const { prefix } = commentStyle(input.language)
    const pad = 3 // spaces of breathing room on each side of the text
    const inner = Math.max(...trimmed.map(displayWidth)) + pad * 2

    const top = `${indent}${prefix} +${'='.repeat(inner)}+`
    const bottom = top
    const body = trimmed.map((l) => {
      const free = inner - displayWidth(l)
      const left = pad + Math.floor((free - pad * 2) / 2)
      const right = inner - displayWidth(l) - left
      return `${indent}${prefix} |${' '.repeat(left)}${l}${' '.repeat(right)}|`
    })

    const banner = [top, ...body, bottom].join('\n')
    return {
      text: banner,
      start,
      length,
      cursor: start + banner.length,
      message: `comment-banner: boxed ${trimmed.length} line(s)`,
    }
  },
}

export default plugin
