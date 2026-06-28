# elecxzy Sample Plugins / サンプルプラグイン

Four sample plugins for **elecxzy**'s Phase 1 plugin system. Each is a single
`*.ts` file that registers one `M-x` text-transform command.

**elecxzy** の Phase 1 プラグイン機構向けのサンプル4本です。各ファイルは
`*.ts` 1ファイルで、`M-x` から呼べるテキスト変換コマンドを1つ登録します。

## Install / インストール

Drop the `*.ts` files into your plugins folder (next to `config.json`) and
make sure `enablePlugins` is on. Then run the command via `M-x`.

`config.json` と同じ plugins フォルダに `*.ts` を置き、`enablePlugins` を
有効にしてください。あとは `M-x` から各コマンドを実行できます。

```
Windows: %APPDATA%\elecxzy\plugins\
```

Tip: run `M-x open-plugins-folder` to open the plugins folder directly.
ヒント: `M-x open-plugins-folder` で plugins フォルダをそのまま開けます。

| File / ファイル | Command / コマンド |
|:---|:---|
| `comment-banner.ts` | `M-x comment-banner` |
| `align-table.ts` | `M-x align-table` |
| `sparkline.ts` | `M-x sparkline` |
| `spell-fix.ts` | `M-x spell-fix` |

All four run in a sandboxed Web Worker (no Node, no DOM, no network) and do
pure string transforms. Every edit is a single undo step — press `C-_` to
revert. 4本ともサンドボックスの Web Worker 上で動作し（Node・DOM・ネットワー
クなし）、純粋な文字列変換のみを行います。各変換は undo 1回（`C-_`）で戻せます。

---

## comment-banner

Wrap the current line (or the selection) in a decorative comment box. The
comment marker is chosen from the buffer language, and the width is computed
with full-width (CJK) awareness so Japanese headers line up.

カーソル行（または選択範囲）を装飾コメントボックスで囲みます。コメント記号は
バッファの言語から自動選択し、全角文字を考慮して幅を計算するため、日本語見出し
でも枠が揃います。

**Usage / 使い方**: put the caret on a line (or select lines) → `M-x comment-banner`.
行にカーソルを置く（または複数行を選択）→ `M-x comment-banner`。

**Example / 例** (in a `.ts` buffer):

```
Section Title
```
↓
```
// +===================+
// |   Section Title   |
// +===================+
```

- Comment markers: `//` (C/JS/TS/Go/Rust…), `#` (Python/Shell/YAML…),
  `;;` (Lisp), `--` (SQL/Haskell/Lua), `"` (Vim).
  コメント記号は言語に応じて自動切替。
- The frame uses ASCII `+ = |` on purpose — Unicode box glyphs get measured
  as full-width by some fonts and break alignment.
  枠は意図的に ASCII（`+ = |`）。Unicode 罫線は一部フォントで全角扱いになり崩れ
  るためです。

---

## align-table

Format a Markdown pipe table so the columns line up. Operates on the selection,
or auto-detects the contiguous table block around the caret.

Markdown のパイプ表の桁を揃えて整形します。選択範囲、または選択がなければカーソ
ル周辺の連続した表ブロックを自動検出します。

**Usage / 使い方**: put the caret anywhere in a table → `M-x align-table`.
表のどこかにカーソルを置く → `M-x align-table`。

**Example / 例**:

```
| Name | 言語 | Lines |
|:--|:--:|--:|
| PieceTable | TypeScript | 1200 |
| 設定 | JSON | 30 |
```
↓
```
| Name       |    言語    | Lines |
| ---------- | :--------: | ----: |
| PieceTable | TypeScript |  1200 |
| 設定       |    JSON    |    30 |
```

- Column widths are CJK-aware; per-column alignment (`:--` left, `:-:` center,
  `--:` right) is preserved. 全角幅対応・列ごとの寄せ（左/中央/右）を保持。
- `\|` inside a cell is treated as a literal, not a column break.
  セル内の `\|` はリテラル扱い。

> **Note / 注意**: Perfect on-screen alignment requires a font where a
> full-width glyph is exactly twice the width of an ASCII glyph. With other
> fonts a slight drift is unavoidable from the plugin side.
> 画面上で完全に揃えるには「全角＝半角ちょうど2倍」のフォントが必要です。それ以
> 外のフォントでは、プラグイン側では避けられない微妙なズレが出ます。

---

## sparkline

Turn the selected numbers into an inline block-character chart plus stats. The
original numbers are kept; the chart is appended.

選択した数値をブロック文字のインライングラフ＋統計に変換します。元の数値は残し、
末尾にグラフを追記します。

**Usage / 使い方**: select numbers (space/comma/tab/newline separated) →
`M-x sparkline`. 数値を選択（スペース・カンマ・タブ・改行区切り）→ `M-x sparkline`。

**Example / 例**:

```
3 5 8 13 21 34 21 13 8 5 3
```
↓
```
3 5 8 13 21 34 21 13 8 5 3   ▁▁▂▃▅█▅▃▂▁▁   min 3 · max 34 · avg 12.2 · n 11
```

- Uses the eight block glyphs `▁▂▃▄▅▆▇█` (all half-width, so no alignment
  issues). Handles signed/decimal/thousands-separated numbers (e.g. `1,234`).
  8段階のブロック文字を使用（すべて半角）。符号・小数・桁区切り `1,234` に対応。
- Needs at least two numbers. 数値が2つ以上必要です。

---

## spell-fix

Fix common English misspellings in the selection, or the whole buffer when
nothing is selected. The echo line reports what changed.

選択範囲（選択がなければバッファ全体）の頻出英語スペルミスを修正します。修正内容
はエコー行に表示されます。

**Usage / 使い方**: optionally select text → `M-x spell-fix`.
必要なら範囲選択 → `M-x spell-fix`。

**Example / 例**:

```
Teh report is definately good. I dont think we should seperate them.
```
↓
```
The report is definitely good. I don't think we should separate them.
```

- Corrects a curated list of ~200 frequent misspellings (e.g. `teh→the`,
  `recieve→receive`, `occured→occurred`). Capitalization is preserved
  (`Teh→The`, `RECIEVE→RECEIVE`, `dont→don't`).
  約200語の頻出ミスを修正。大文字小文字も保持します。
- **Not** a full dictionary checker: a sandboxed worker can't ship a 100k-word
  dictionary, and checking against a small one would flag many valid rare
  words. This list-based approach is offline and has very few false positives.
  全単語を検証する辞書ではありません。サンドボックス上では大容量辞書を持てず、小
  さな辞書では誤検出が増えるため、誤検出の少ない「頻出ミス方式」にしています。
- Add your own entries to the `CORRECTIONS` map to extend it.
  `CORRECTIONS` に追記すれば語彙を拡張できます。

---

## License / ライセンス

These sample plugins are provided as-is for use with **elecxzy**.
本サンプルは **elecxzy** 用に現状有姿で提供されます。