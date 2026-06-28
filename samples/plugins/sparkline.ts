import type { Plugin, PluginInput } from './elecxzy-plugin'

// +==================================================================+
// |  sparkline — turn selected numbers into a tiny inline chart      |
// |  Run it with  M-x sparkline                                      |
// +==================================================================+
//
// Select some numbers (separated by spaces, commas, tabs or newlines):
//
//     3 5 8 13 21 34 21 13 8 5 3
//
// Run M-x sparkline and it appends a little graph + stats:
//
//     3 5 8 13 21 34 21 13 8 5 3   ▁▁▂▃▅█▃▂▂▁▁   min 3 · max 34 · avg 12.2 · n 11
//
// The bars use the eight Unicode block-element glyphs (▁▂▃▄▅▆▇█), so a whole
// data series collapses into one glanceable row — no chart library, no canvas,
// just string math running in the plugin worker.

const BARS = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█']

/** Pull every number (int, float, signed, with optional thousands separators). */
function extractNumbers(s: string): number[] {
  const out: number[] = []
  // Match things like  -12  3.14  1,234.5  +7  while ignoring stray dots/commas.
  const re = /[-+]?(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?/g
  let m: RegExpExecArray | null
  while ((m = re.exec(s)) !== null) {
    const n = Number(m[0].replace(/,/g, ''))
    if (Number.isFinite(n)) out.push(n)
  }
  return out
}

function sparkline(nums: number[]): string {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  const span = max - min
  return nums
    .map((n) => {
      if (span === 0) return BARS[3] // flat line in the middle
      const idx = Math.round(((n - min) / span) * (BARS.length - 1))
      return BARS[Math.max(0, Math.min(BARS.length - 1, idx))]
    })
    .join('')
}

/** Trim trailing zeros from a fixed-precision number for a tidy average. */
function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1)
}

const plugin: Plugin = {
  command: 'sparkline',
  description: 'Append an inline sparkline + stats for the selected numbers',
  apiVersion: 1,
  execute(input: PluginInput) {
    const text = input.text

    // Use the selection, or the current line when there is no region.
    let start: number
    let length: number
    if (input.selection && input.selection.length > 0) {
      start = input.selection.start
      length = input.selection.length
    } else {
      let ls = input.cursor
      while (ls > 0 && text[ls - 1] !== '\n') ls--
      let le = input.cursor
      while (le < text.length && text[le] !== '\n') le++
      start = ls
      length = le - ls
    }

    const slice = text.slice(start, start + length)
    const nums = extractNumbers(slice)
    if (nums.length < 2) {
      return { message: 'sparkline: select at least two numbers' }
    }

    const chart = sparkline(nums)
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length
    const stats = `min ${fmt(min)} · max ${fmt(max)} · avg ${fmt(avg)} · n ${nums.length}`

    // Append after the selection without disturbing the original numbers.
    const insertAt = start + length
    const needsSpace = length > 0 && !/\s$/.test(slice)
    const addition = `${needsSpace ? '   ' : ''}${chart}   ${stats}`

    return {
      text: addition,
      start: insertAt,
      length: 0,
      cursor: insertAt + addition.length,
      message: `sparkline: ${chart}  (${stats})`,
    }
  },
}

export default plugin
