<p align="center">
  <img src="./public/elecxzy_repo_card.svg" width="800" alt="elecxzy - Next-generation Emacs-like modern editor">
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Zenn](https://img.shields.io/badge/Zenn-kurouna-blue)](https://zenn.dev/kurouna)
[![X](https://img.shields.io/badge/X-elecxzy-black)](https://x.com/elecxzy)

**A Lisp-free text editor with Emacs keybindings, featuring a built-in MCP server for AI-driven editing.**

https://github.com/user-attachments/assets/ea817cb4-85c9-4225-9425-5c61915823ab

[English](#english) | [日本語](#japanese)

---

<a name="english"></a>
## English

`elecxzy` is a text editor developed to provide an Emacs-like editing experience within a web technology stack (Electron). While it does not include an embedded Lisp engine, it features a built-in MCP (Model Context Protocol) server, enabling AI assistants to directly interact with and control the editor. By providing well-considered default settings out of the box, it reduces the need for extensive initial configuration, allowing you to start editing immediately.

### Download

**Windows only**

[![Microsoft Store](https://img.shields.io/badge/Download-Microsoft_Store-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)](https://apps.microsoft.com/detail/9P32F2WFL69M)

Automatic updates are provided via the Microsoft Store. For the latest development builds, you can also download binaries from:
👉 **[GitHub Releases](https://github.com/kurouna/elecxzy/releases)**

*Note: The source repository is currently private.*

### Architecture & Design

- **Technology Base**: Built on the Electron framework, utilizing HTML and CSS for the user interface, and TypeScript for application logic. It employs IPC communication between the Main and Renderer processes to handle system-level operations.
- **Buffer Management**: Uses an RB-Tree (Red-Black Tree) based Piece Table. This allows efficient operations and incremental, delta-based undo histories for large files.
- **Rendering Engine**: Implements a custom virtual rendering system. It utilizes the Canvas API for accurate text metrics (handling mixed full-width and half-width characters without fixed-width assumptions) and minimizes DOM reflows.
- **IME Input Control**: Implements explicit handling of DOM composition events to manage uncommitted text state and focus. Additionally, it ignores IME input after prefix keys (e.g., `C-x`) to prevent conflicts between Japanese text input and Emacs command execution.
- **Settings System**: Relies on static JSON configurations (`config.json`, `color-config.json`) instead of a dynamic scripting engine.

### Key Features

* **Emacs Keybindings:** Core operations including cursor movement (`C-f`, `C-b`, `C-n`, `C-p`), recursive window splitting (`C-x 2`, `C-x 3`), window resizing (`C-x ^`, `C-x }`), animated window-layout reshaping (`C-x w t` to transpose, `C-x w f` / `C-x w v` to flip, `C-x w r <Right>` / `<Left>` to rotate the layout 90°, `C-x w o <Right>` / `<Left>` to cycle buffers across panes), an Emacs `winner-mode`-compatible layout history (`C-c <Left>` / `C-c <Right>` to undo and redo any split, close, resize or reshape — always recorded, nothing to enable), and kill ring management (`C-w`, `M-w`, `C-y`, `M-y`). An optional Emacs 31.1-compatible **Kill Region DWIM** setting (`M-x kill-region-dwim`, off by default) makes `C-w` kill the previous word when no region is selected, and the Emacs 30.1-compatible **Kill Ring Deindent Mode** (`M-x kill-ring-deindent-mode`, off by default) strips the starting column's indentation from killed or copied text so pasting a nested block into a shallower place keeps its shape. The Emacs 29.1-compatible **Duplicate DWIM** (`C-c l`) duplicates the region — or the current line when nothing is selected, or the rectangle to its right in rectangle mark mode — without touching the kill ring (`C-u n` makes `n` copies).
* **Search & Replacement:** Incremental search (`C-s`), interactive replacement (`M-%`), match listing for the current buffer (`M-s o`), live line narrowing with in-place preview (`M-s l`), and cross-file search across directories (`M-x grep`) powered by background OS processes (`findstr` / `grep`). Commands themselves are searchable too: `M-h` (`apropos-command`) lists every command whose name or description matches what you type, with its key binding, and `Enter` runs the one under the cursor.
* **Completion System:** `dabbrev-expand` (`M-/`) for buffer-local word completion, extracting multi-byte characters and preserving undo chain integrity.
* **Live Preview:** Preview modes for Markdown, HTML, and plain text (with word-wrap at the window edge for text), featuring one-way scroll synchronization that tracking the source buffer's position. The Markdown preview renders GitHub-flavored tables, task lists and footnotes, gives headings anchors so a table of contents can be clicked, opens external links in the browser and relative links in the editor. `M-s l` (`consult-line`) works inside a preview as well, scrolling it to the line you pick.
* **Web Preview (Experimental):** `M-x navigate-url` opens a page in a preview buffer. Only `https://` and loopback `http://` (`localhost`, `127.0.0.1`, `[::1]`) are accepted; every other scheme (`javascript:`, `file:`, `data:`, remote `http://`) is refused with an echo-line message.
* **Window & Buffer Management:** Provides seamless buffer switching (`C-x b`) and a dedicated buffer list (`C-x C-b`). In addition to standard minibuffer prompts, it provides commands to utilize OS-native file and save dialogs (`C-x M-f`, `C-x M-w`). An Emacs 31.1-compatible **Auto Window Prefer Longest Edge** setting (`M-x split-window-prefer-longest`) makes automatic splits divide along the pane's longer edge.
* **Inline Completion Preview:** An optional Emacs 30.1-compatible **Completion Preview Mode** (`M-x completion-preview-mode`, off by default) shows a greyed-out suggestion right after the cursor as you type a word of three characters or more, and `Tab` accepts it. Candidates come from the words already in the buffer — the same source `M-/` (`dabbrev-expand`) cycles through, with no language server or network involved.
* **File Tabs (xyzzy-style):** An optional tab bar at the top of the window listing all open buffers (off by default). Click a tab to switch the active pane's buffer, middle-click (or the `×` button) to close, and drag a tab horizontally to reorder, with unsaved/read-only indicators. When tabs overflow the window width, scroll buttons appear at both ends (hold to scroll continuously) and the always-available tab-list button on the right opens a dropdown of all tabs, so every tab stays reachable. While the tab bar is shown, `C-Tab` / `C-S-Tab` cycle through tabs in tab order. Toggle it via the Settings Sidebar ("Show File Tabs") or `M-x show-file-tabs` / `hide-file-tabs` / `toggle-file-tabs`.
* **Sidebar File Explorer (Filer):** A dedicated file manager (`C-x d` / `C-c d`) displayed on the window's left side. Provides fast file previewing (`l` / `Right`), and directory traversal (`r`, `u`) including support for Windows system drives. Files and folders can be created (`c` / `C`), renamed (`R`) and moved to the trash (`d`) in place, bookmarked with `m`, and revealed in Explorer with `e`.
* **Sidebar Utility Suite:** Multiple dedicated sidebars displayed on the window's right side to assist editing:
  * **Workspace Sidebar** (`C-c w`, `C-,` or `M-x toggle-workspace-sidebar`): Manage multiple folders in a dedicated workspace, seamlessly opening and saving `.code-workspace` files compatible with VS Code.
  * **Outline View** (`C-c o`): Hierarchical display of headings for Markdown and HTML, and of declarations for TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, Dart, C#, Swift, PHP and CSS/SCSS/Less, with real-time sync.
  * **Kill Ring Sidebar** (`C-c y` or `M-x browse-kill-ring`): Browse and manage your kill ring (clipboard history).
  * **Register Sidebar** (`C-c r` or `M-x browse-registers`): Inspect and select persistent registers (text, points, and window layouts).
  * **Undo History Sidebar** (`C-c u` or `M-x browse-undo-history`): Browse the active buffer's undo history with text previews; selecting an entry rolls the buffer back to that point and is recorded as a single redo transaction (Office-style).
  * **Playback History** (`M-x playback-history`): Animate the buffer's edit history — rewind to the oldest state and step-by-step redo back to the current state. Prefix arguments control the speed (`C-u` = 10ms, `C-u C-u` = 1ms, `C-u <n>` = `<n>` ms, max 1000ms). Press any key or click to abort, which jumps directly to the latest state. A read-only guard protects the buffer from auto-save, MCP writes, and external drag-and-drop during animation, so intermediate states are never persisted to disk.
  * **Recent Files Sidebar** (`C-c c` or `M-x browse-recent-files`): Quickly browse and open recently used files with path previews. Press `m` to pin / unpin a focused file.
  * **Bookmark Sidebar** (`C-c b` / `C-x r l` or `M-x browse-bookmarks`): Pin files for long-term quick access. Press `m` on any file in Recent Files / Filer / Workspace sidebars to add it to bookmarks; press `m` inside the Bookmark Sidebar to remove. Bookmarks are persisted in `config.json`. Use `C-x r m` (`bookmark-set`) to pin the currently open file (no-op with a message if it is already bookmarked), or `M-x bookmark-toggle` to toggle it. Keybindings follow Emacs `bookmark.el` conventions.
  * **Settings Sidebar** (`C-c s`, `C-.` or `M-x open-config`): Manage editor configurations like fonts, themes, and line numbers.
  * **Git Sidebar** (`C-c g` or `M-x toggle-git-sidebar`): A Source Control view for the open workspace. Lists changed files per repository and a commit history graph; press `Enter` on a changed file to show its `git diff HEAD` in a read-only `*git-diff*` buffer, or expand a commit to inspect its changes. Commit all changes from the built-in message box (`Ctrl+Enter`, or `Ctrl+Shift+Enter` to commit & push in one step), and push / pull (`P` / `F`) without leaving the editor. Branches with no upstream are published via `git push -u origin` (like VS Code), while branches that already track an upstream use a standard push. Create a lightweight tag at HEAD from the message box text and push all tags to the remote with the Create Tag / Push Tags buttons (`t` / `T`). `R` discards the focused file's changes after a y/n confirmation — a tracked file is restored to HEAD, an untracked one is moved to the trash.
* **Terminal Integration:** Built-in interactive shell buffer (`M-x shell`) on Windows environments, following Emacs `comint-mode` conventions: a per-buffer process mark protects the prompt and the scrollback from edits, `C-a` moves to the start of the input, `M-p` / `M-n` cycle the input history, and `C-c C-c` interrupts the running command. For one-off commands, `M-!` (`shell-command`) runs a single command in the buffer's directory and shows short output in the echo area, longer output in `*Shell Command Output*`, while `M-|` (`shell-command-on-region`) feeds the region to the command as standard input; `C-u` inserts the output at point (or replaces the region). Runaway commands are killed after a configurable timeout (`set-shell-command-timeout`, 60 seconds by default).
* **AI CLI Integration:** `M-x claude-cli`, `M-x antigravity-cli` (alias `agy-cli`) and `M-x codex-cli` send an instruction — and the region, when one is selected — to an external AI CLI and bring the answer back into a read-only Markdown buffer in the other pane, or the echo area when it is short. `C-u` puts the answer into the buffer instead, replacing the region, which turns a selection plus "translate this" into an in-place translation that one undo reverts. The instruction and the region both travel on standard input, so nothing from the buffer is ever placed on a command line. Leaving the instruction empty sends the region itself as the prompt. The echo area shows the elapsed seconds while the model thinks, `C-g` cancels the run, and a region larger than `aiCliConfirmChars` is confirmed before it is sent. Requires the CLI to be installed and on PATH.
* **Major Modes:** Over 60 major modes covering programming languages, shell scripts, markup, style sheets, data and config formats, build and infrastructure files, and hardware description languages. The mode is chosen from the file extension when a file is opened, and `M-x set-highlight-mode` (or the mode's own name, e.g. `M-x python-mode`) changes it for the current buffer.
* **Re-indentation:** `C-M-\` (`indent-region`) and `M-x indent-buffer` re-indent the region or the whole buffer. Brackets inside strings and comments are not counted, block comments and multi-line template literals are left alone, and a tab-indented file stays tab-indented. Only brace-based languages (JavaScript, TypeScript, C/C++, C#, Java, Go, Rust, JSON, CSS, …) are re-indented; other modes are left untouched and report the reason.
* **Minibuffer Completion:** Interactive completion for `M-x` commands, files, and directories within the minibuffer.
* **Non-text File Import:** Automatically extract and import plain text from PDF, Word documents (**`.docx`**), and Excel (**`.xlsx`**) files. Excel documents are parsed with sheet headers and data formatted in a clean TSV (Tab-Separated Values) layout. **Note:** Imported files are opened in **Read-only mode** to prevent overwriting the original binary data. Use 'Save As' (`C-x C-w` or `C-x M-w`) to save the extracted text to a new file. A **50MB size limit** applies to these formats to ensure system stability.
* **Cursor Position Memory (Save Place):** An Emacs `save-place-mode`-compatible setting (`M-x save-place-mode`, **on** by default) remembers where the cursor was when you closed a file, and puts it back there — centered in the pane — the next time you open it, even in a later session. The position is stored as a line and column, so editing the file in another editor moves the cursor to the nearest point on the same line instead of drifting into a different one. Positions for the 100 most recent files are kept in `config.json`, with bookmarked files given priority.
* **Electric Pair Mode:** An Emacs `electric-pair-mode`-compatible setting (`M-x electric-pair-mode`, **off** by default) that inserts the closing partner when you type an opening bracket or quote, wraps the selection when a region is active, skips over a closing character you type yourself, and removes both halves when you `Backspace` inside an empty pair. Pressing `Enter` between an empty pair puts the closing character on its own line. Japanese brackets (`「」`, `【】`, `（）`, …) are paired too, and apostrophes inside words (`don't`) are left alone.
* **Electric Indent Mode:** An Emacs `electric-indent-mode`-compatible setting (`M-x electric-indent-mode`, **off** by default) that makes `Enter` insert a newline and indent the new line. The column is chosen with the same rule as `M-x indent-region` — brackets are counted, ignoring the ones inside strings and comments, so a line that opens two blocks goes two steps deeper and a trailing bracket in a comment changes nothing. In Python and YAML, where indentation is the syntax, a line ending in `:` puts the next line one step deeper instead. The indentation characters of the previous line are reused, so a tab-indented file stays tab-indented. Pressing `Enter` at the start of a line leaves the line below untouched, and with Electric Pair Mode on, breaking an empty pair indents both new lines.
* **File Operations & Encoding:** Includes periodic auto-saving, optional auto-revert of unmodified buffers when the file changes on disk (`M-x set-auto-revert-clean`), a recent files list (`M-x recentf-open-files`), automatic UTF-8 promotion, BOM-preserving UTF-8 (`utf-8-bom`), a selectable line terminator (CRLF / LF / CR), native buffer printing (`M-x print-buffer`), and PDF export (`M-x export-buffer-to-pdf`) that keeps the text selectable and searchable instead of flattening the page to an image. Saving is atomic — the text is written to a temp file and then renamed — so a crash cannot leave a half-written file.
* **System Tray Residency:** With Run in Background on (`M-x set-close-to-tray`), closing the window keeps elecxzy resident in the system tray, so the next open is instant and all buffers are still there. Kill and yank can also be tied to the OS clipboard (`M-x set-clipboard-integration`).
* **Emacs Staples:** The small commands that make Emacs feel like Emacs are here too — `M-m` (`back-to-indentation`), `M-\` (`delete-horizontal-space`), `C-c SPC` (`just-one-space`, full-width spaces included), `C-x C-o` (`delete-blank-lines`), `C-x =` (`what-cursor-position`, showing the character at point and its code point), `M-=` (`count-words-region`), `M-^` (`join-line`), `C-x C-t` (`transpose-lines`), `M-x scratch-buffer` and `M-x elecxzy-uptime`.
* **Line Commenting (`C-x C-;`):** Comments or uncomments whole lines and leaves the cursor on the next one, so holding the key works down through a block. A prefix argument gives the number of lines (`C-u 3 C-x C-;`), and a negative one works upwards. With a selection it toggles every line the selection touches, including the line it ends on — `M-;` leaves that last line alone — and does not move the cursor.
* **Zap to Char (`M-z` / `M-Z`):** Kills everything from the cursor up to and including the next occurrence of a character you type — `M-z )` clears the rest of an argument list in one keystroke. `M-Z` stops just before the character instead. A prefix argument chooses which occurrence (`C-u 2 M-z ;` reaches the second semicolon) and a negative one searches backward (`C-u - M-z (`). The character is matched exactly, upper and lower case included, and repeating the command appends to the same kill ring entry.
* **Duplicate Line Removal (`M-x delete-duplicate-lines`):** Removes duplicate lines from the region, keeping the first occurrence of each and leaving the remaining lines in their original order. Prefix arguments switch the rule: `C-u` keeps the last occurrence instead, `C-u C-u` removes only adjacent duplicates (like `uniq`), and `C-u C-u C-u` leaves blank lines alone. The whole operation is a single undo step.
* **Column Alignment (`M-x align-regexp`):** Enter a regular expression and the lines in the region are padded so that its first match on each line starts at the same column — useful for lining up `=`, `:`, or trailing `//` comments. Column widths are measured visually, so full-width characters and tabs line up correctly. Lines that do not match are left untouched.
* **Calculator (`C-x * q`):** A calculator that lives in the minibuffer — type an expression, read the answer in the echo area (`C-u` inserts it at point instead). `C-x * e` (`calc-eval-region`) replaces the selected expression, or the one at point, with its value, so `(1280-64)/3` becomes `405.333333333` in place, and `C-x * s` (`calc-sum-region`) adds up every number in the region — including a rectangular selection, which sums a single column of a table — and `C-x * a` / `C-x * m` / `C-x * d` give its mean, median and standard deviation, while `C-x * t` (`calc-stats-region`) opens a `*Calc Statistics*` buffer with count, sum, mean, median, min, max, range, variance, standard deviation and quartiles. For base work, `C-x * x` / `C-x * b` / `C-x * o` / `C-x * n` rewrite the whole numbers in the region as hexadecimal, binary, octal or decimal in a single undo step, reading `0x` / `0b` / `0o` as well and leaving decimals, identifiers such as `utf8` and thousands separators untouched. Beyond that, a family of `M-x calc-…-region` commands rewrites the numbers in a selection — shares of the total, differences, running totals, z-scores, rounding, an arbitrary factor, square metres to tsubo, consumption tax in or out, Japanese withholding tax, prime factorisations and fractions — or reports on them: returns, volatility and maximum drawdown of a price series, a monthly loan repayment, greatest common divisor and least common multiple, a guess at the sequence and its next term, and the manuscript sheets and reading time of the selected text. For mathematics there is a separate, exact layer: `calc-exact-region` adds fractions and decimals with BigInt rationals so three copies of `1/3` come to exactly `1`, `calc-identify-region` looks for a closed form behind a decimal (`1.644934067` is `pi^2/6`) and says nothing when there is none, and `calc-continued-fraction-region`, `calc-number-theory-region`, `calc-bezout-region`, `calc-binomial-region` and `calc-mod-region` cover continued fractions, divisor and totient tables, the extended Euclidean algorithm with modular inverses, exact binomial coefficients and least non-negative residues. Expressions support the usual arithmetic and `^`, bitwise operators on 32-bit integers, factorials, hex / binary / octal literals (integer answers show their hex and binary forms), functions such as `sqrt`, `round(x, n)`, `log(x, base)`, `min` / `max` / `avg` / `gcd`, the constants `pi`, `e`, `tau`, `phi`, and `ans` for the previous answer. Full-width digits and `× ÷ −` are accepted as typed. The parser is elecxzy's own — nothing is handed to a JavaScript evaluator.
* **Text Formatting (Fill Paragraph):** `M-q` (`fill-paragraph`) command to reformat and hard-wrap paragraphs based on a configurable width (`C-x f` / `set-wrap-column`; `C-u C-x f` takes the current column), optimizing layout for both Japanese and English text. `M-Q` (`unfill-paragraph`) joins a paragraph back into one line, and `M-x fill-paragraph-semlf` reformats it with semantic linefeeds so that each sentence starts on its own line (a sentence too long for one line still wraps at the wrap column).
* **Persistent Registers:** Store and recall text, cursor positions, or **window layouts** across sessions using Emacs-style registers. Commands include `C-x r s` (copy to register), `C-x r i` (insert), `C-x r SPC` (save point), `C-x r j` (jump / restore layout), and `C-x r w` (save window layout). All data is persisted in browser local storage. Supports special 'rectangle' type storage when in rectangle mark mode.
* **Rectangle Editing:** Enhanced rectangle support for mass-editing columns. Enter rectangle mark mode with `C-x SPC`, and perform operations like `C-x r k` (kill), `M-x kill-ring-save` (copy), and `C-y` (yank). The editor intelligently detects rectangular data in the kill ring and registers.
* **Full Unicode Support:** Robust handling of surrogate pairs (emojis, etc.) throughout the editor, ensuring characters are never split during editing or navigation.
* **Accurate Word Navigation**: Utilizes the native `Intl.Segmenter` API for precise word boundary detection. It provides natural cursor movement (`M-f`, `M-b`, etc.) across CJK (Chinese, Japanese, Korean) text and supports subword navigation (e.g., `snake_case`) out of the box without additional configurations.
* **Avy Jump Navigation (`C-'`):** Quick cursor movement within the visible viewport using target labels. Press `C-'` followed by a character to overlay matching locations with labels, then type the label to jump.
* **Show Line Expansion (`C-;`):** Pops up the full text of a line that is cut off at the window edge, without scrolling or altering the buffer (clicking the `...` indicator does the same). With a selection active, the selected text is shown instead.
* **Cursor Visual Effects (VFX):** Add dynamic visual flair to your cursor movement. Switch between 9 unique styles (including "Light Particle", "Cyber Trace", and "Kawaii Shower"), plus the caret-following cat mascot "Elenyan", or turn it off:
  * `C-c 1` to `C-c 9`: Switch through different VFX styles.
  * `C-c 0`: Turn VFX off.
  * `M-x set-cursor-vfx`: Select any style, including the "Elenyan" cat mascot (`C-u N` picks one of 3 cats).
  * `M-x set-macro-vfx` picks a separate effect shown while a keyboard macro runs, and `M-x set-smooth-cursor` animates the cursor between positions.
* **Lightweight Cursor-based Macros (Beta):** Reproduce repetitive text mutations (`insert`/`delete`) relative to the cursor position (`C-x (`, `C-x )`, `C-x e`). Supports prefix arguments for repetition (e.g., `C-u 10 C-x e`).
* **Customizable Color Themes:** Personalize your workspace with 12 built-in themes (balanced 6 light / 6 dark) — **"Dark"** / **"Light"** (Catppuccin), **"Cyber"** (Neon/Futuristic), **"Cute"** (Pastel/Macaron), **"Tokyo Night"** (Storm Navy + Neon Cyan), **"Rose Pine Dawn"** (Warm Paper), **"Gruvbox"** (Retro Warm), **"Nord"** (Arctic Snow Light), **"Forest"** (Everforest Green), **"Slate Dark"** / **"Slate Light"** (Muted Blue-Grey, High Readability), and **"Default"** — switchable via `M-x <theme-name>-theme`, or pick one from a list with `M-x set-theme`, which previews each theme live as you move through the candidates and restores the original on `Esc`.
* **MCP Server Integration**: Functions as a Model Context Protocol (MCP) server, allowing AI assistants (Google Antigravity, Claude Desktop/Code, etc.) to read/edit buffers and control the editor directly via the **`ELECXZY_MCP_MODE`** environment variable.
* **TypeScript Plugins:** Add your own `M-x` commands by dropping a `.ts` file into the `plugins` folder next to `config.json`. A plugin default-exports `{ command, description, execute(input) }` and runs in an isolated, network-blocked Web Worker with a configurable timeout (`M-x set-plugin-timeout`). See the **Plugins** section below.
* **Custom Keybindings (`keybinds.json`)**: Override or remove default keybindings without rebuilding. Drop a `keybinds.json` next to `config.json` (open it any time with `M-x show-keybinds-config`); Emacs-style notation is supported (`\C-` = Ctrl, `\M-` = Alt, `\S-` = Shift for named keys like `"C-S-Tab"`; for single characters write the shifted character itself or a capital letter instead; space-separated tokens form a key sequence like `"C-x C-f"`), and an empty string value removes a binding. Function keys `F1`–`F12` can also be bound (e.g. `"F5": "revert-buffer"`, `"C-F12": "save-buffer"`); when unbound, the Electron default `F11` full-screen toggle is preserved. Parsing or validation problems are reported once in the echo line and never crash editing. Example:
  ```json
  {
      "\\C-s": "save-buffer",
      "C-x C-r": "mark-whole-buffer",
      "F5": "revert-buffer",
      "\\C-_": ""
  }
  ```

<p align="center">
  <img src="./assets/screenshot/01-editor.png" height="170" alt="Editing with tabs and syntax highlighting (Rose Pine Dawn)">
  <img src="./assets/screenshot/02-window-split.png" height="170" alt="Three panes: shell, Markdown preview and code (Tokyo Night)">
  <img src="./assets/screenshot/15-workspace.png" height="170" alt="Workspace sidebar with two folders">
  <img src="./assets/screenshot/05-command-palette.png" height="170" alt="M-x completion (Slate Light)">
  <img src="./assets/screenshot/06-avy.png" height="170" alt="Avy jump labels (Forest)">
  <img src="./assets/screenshot/04-consult-line.png" height="170" alt="consult-line narrowing the buffer (Gruvbox)">
  <img src="./assets/screenshot/03-grep.png" height="170" alt="grep across files (Nord)">
  <img src="./assets/screenshot/07-git-sidebar.png" height="170" alt="Git sidebar with history and changes (Slate Dark)">
  <img src="./assets/screenshot/08-settings.png" height="170" alt="Settings sidebar (Light)">
  <img src="./assets/screenshot/09-kill-ring.png" height="170" alt="Kill ring sidebar (Cyber)">
  <img src="./assets/screenshot/10-web-preview.png" height="170" alt="Web preview beside the code">
  <img src="./assets/screenshot/14-cursor-vfx.png" height="170" alt="Cursor VFX (Cute)">
</p>

### MCP Server Integration

`elecxzy` can function as an MCP server. By connecting your AI assistant to `elecxzy`, the AI can gain direct access to your open buffers, layout, and editing commands. This allows for powerful AI-driven editing workflows.

> [!IMPORTANT]
> Before starting the MCP server, configure **Allowed Save Directories** in `Settings → MCP` (or `mcpAllowedDirectories` in `config.json`). The MCP `save_file` tool can only write to paths under one of these directories. `M-x mcp-start` aborts with an echo-line message if the list is empty or contains a non-existent path.

#### Configuration (Google Antigravity / Claude Desktop / Claude Code)

Add the following to your `claude_desktop_config.json` or the relevant configuration section of your AI agent (like Google Antigravity), referring to one of the examples below:

```json
{
  "mcpServers": {
    "elecxzy": {
      "command": "C:\\path\\to\\elecxzy\\elecxzy.exe",
      "args": ["C:\\path\\to\\elecxzy\\resources\\app.asar"],
      "env": {
        "ELECXZY_MCP_MODE": "true",
        "ELECTRON_RUN_AS_NODE": "1"
      }
    }
  }
}
```

```json
{
  "mcpServers": {
    "elecxzy": {
      "command": "C:\\Users\\...\\AppData\\Local\\Programs\\elecxzy\\elecxzy.exe",
      "args": ["C:\\Users\\...\\AppData\\Local\\Programs\\elecxzy\\resources\\app.asar"],
      "env": {
        "ELECXZY_MCP_MODE": "true",
        "ELECTRON_RUN_AS_NODE": "1"
      }
    }
  }
}
```

### Plugins

`elecxzy` supports small, sandboxed TypeScript plugins. The plugin system is **disabled by default** — opt in with `M-x enable-plugins` (or `enablePlugins` in `config.json`). Once enabled, drop a `.ts` file into the `plugins` folder (in the same user-data folder as `config.json`; open it with `M-x open-plugins-folder`) and it registers a new `M-x` command. The first time plugins load, the folder is created with a type-definition file (`elecxzy-plugin.d.ts`) and a `hello-world.ts` sample.

A plugin is a single file that default-exports `{ command, description, execute(input) }`. `execute` receives a snapshot of the active buffer and returns how to change it — for example, an upcase command:

```ts
import type { Plugin } from './elecxzy-plugin'

const plugin: Plugin = {
  command: 'upcase-buffer',
  description: 'Uppercase the region, or the whole buffer',
  execute(input) {
    if (input.selection) {
      const { start, length } = input.selection
      const region = input.text.slice(start, start + length)
      return { text: region.toUpperCase(), start, length }
    }
    return input.text.toUpperCase() // a bare string replaces the whole buffer
  },
}

export default plugin
```

`input` provides `text` (the whole buffer), `cursor`, `selection` (`{ start, length }` or `null`), `fileName`, and `language`. The return value can be a **string** (replace the whole buffer), an **object** `{ text, start?, length?, cursor?, select?, message? }` (a ranged edit — `start`+`length` splice, both omitted = whole buffer — and/or a one-line message shown as `[command] …`), `{ message }` (message only), or `null` (do nothing). A plugin may also declare an optional `apiVersion: 1`; plugins declaring a newer API version than this build supports are skipped at load.

Plugins run in an isolated Web Worker: no Node, no DOM, no filesystem access, and the network is blocked by the app's Content-Security-Policy. A run that exceeds the timeout (`M-x set-plugin-timeout` or `pluginTimeout` in `config.json`; 1–60 seconds, default 5) is aborted, so a buggy plugin can never freeze the editor. Turn the whole system on/off with `M-x toggle-plugins` (or `enablePlugins` in `config.json`), and reload after editing files with `M-x reload-plugins`. When a plugin does not load or behaves unexpectedly, `M-x debug-plugins` reloads everything and opens a read-only `*Plugin Report*` buffer with the per-file outcome — including full compile errors that do not fit in the echo line.

### Tech Stack

- **Platform**: Electron
- **Frontend**: React, TypeScript
- **Styling**: Styled-components

### Commands and Customization

For a full list of available commands and keybindings, please refer to:
👉 **[COMMANDLIST.md](./COMMANDLIST.md)**

---

<a name="japanese"></a>
## 日本語

`elecxzy` は、Electronを基盤として開発された、Emacsキーバインドをサポートするテキストエディタです。
Lispなどのスクリプトエンジンは内蔵していませんが、テキスト編集機能を提供するMCP（Model Context Protocol）サーバー機能を備えており、各種AIアシスタントから直接エディタを操作することが可能です。
あらかじめ使いやすい設定をデフォルト値として組み込んでおくことで、初期設定のオーバーヘッドを減らし、インストール直後からすぐに作業を開始できることを目的に設計されています。

### ダウンロード

**Windows専用**

[![Microsoft Storeからダウンロード](https://img.shields.io/badge/Download-Microsoft_Store-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)](https://apps.microsoft.com/detail/9P32F2WFL69M)

Microsoft Store版は、自動更新が提供されます。最新の開発版（GitHub経由）は以下から入手可能です：
👉 **[GitHub Releases](https://github.com/kurouna/elecxzy/releases)**

*※ソースコードは現在非公開です。*

### アーキテクチャと設計方針

- **基盤技術**: Electronフレームワークをベースとし、UIの構築にHTML/CSS、アプリケーションロジックにTypeScriptを採用しています。メインプロセスとレンダラープロセス間のIPC通信を用いて、ファイルやウィンドウのシステム処理を連携させています。
- **バッファ管理**: 赤黒木（RB-Tree）ベースの Piece Table をデータ構造として採用しています。差分（Delta）を利用したインクリメンタルなUndo履歴の構築により、大容量ファイルにおいてもメモリ使用量を抑えつつ編集操作が可能です。
- **描画エンジン**: 仮想レンダリングによるカスタム描画系を実装しています。Canvas APIを利用した高精度な文字幅計測を組み込むことで、フォントサイズや全角・半角文字の混在に起因するレイアウトのズレを防ぎ、論理的なカーソル配置とスクロール計算を行っています。
- **IME入力制御**: DOMのcompositionイベントを利用して未確定文字の強制確定やフォーカス管理を行っているほか、プリフィックスキー（`C-x`等）の入力直後はIMEの入力を無視する制御を入れることで、Emacsキーバインドと日本語入力の競合を防ぎ、コマンド実行の確実性を向上させています。
- **設定機構**: 動的なスクリプトエンジンを持たず、静的な設定ファイル（`config.json` および `color-config.json`）を用いてエディタの外観や基本的な挙動を管理します。

### 主な機能

* **Emacs互換の操作体系**: 基本的なカーソル移動（`C-n`, `C-a`等）、再帰的なウィンドウの分割と比率変更（`C-x 2`, `C-x ^`等）、ウィンドウレイアウトのアニメーション付き再構成（`C-x w t` で転置、`C-x w f` / `C-x w v` で左右・上下反転、`C-x w r <Right>` / `<Left>` でレイアウト 90° 回転、`C-x w o <Right>` / `<Left>` でペイン間バッファ循環シフト）、Emacs の `winner-mode` 互換のレイアウト履歴（`C-c <Left>` / `C-c <Right>` で分割・クローズ・サイズ変更・並べ替えを取り消し / やり直し。常時記録され、有効化の設定は不要）、キルリングの管理（`C-w`, `M-w`, `C-y`, `M-y`）をサポート。Emacs 31.1 互換の **Kill Region DWIM**（`M-x kill-region-dwim`、デフォルト OFF）を有効にすると、選択範囲が無いときの `C-w` が直前の単語のキルになります。また Emacs 30.1 互換の **Kill Ring Deindent Mode**（`M-x kill-ring-deindent-mode`、デフォルト OFF）を有効にすると、キル・コピーしたテキストが開始桁ぶん浅くなり、ネストしたブロックを浅い場所へ貼っても形が崩れません。Emacs 29.1 互換の **Duplicate DWIM**（`C-c l`）は、選択範囲を（選択が無ければ現在の行を、矩形マークモードでは矩形をその右隣に）キルリングを汚さずに複製します（`C-u n` で n 個）。
* **検索・置換機能**: インクリメンタル検索（`C-s`）、対話的置換（`M-%`）、バッファ内の一致行一覧（`M-s o`）、行のライブ絞り込みとプレビュー付きジャンプ（`M-s l`）、およびバックグラウンドのOSプロセス（Windowsでは `findstr`、他環境では `grep`）を用いたディレクトリ内テキスト検索（`M-x grep`）。コマンド自体も検索でき、`M-h`（`apropos-command`）は入力した語がコマンド名か説明に一致するコマンドをキーバインドつきで一覧表示し、`Enter` でカーソル行のコマンドを実行します。
* **動的単語補完**: バッファ近傍の文字列から推測する `dabbrev-expand` (`M-/`)。日本語などのマルチバイト文字の抽出に対応し、Undo履歴管理との連携を維持します。
* **リアルタイムプレビュー**: Markdown / HTML / プレーンテキストの編集内容を反映するプレビューモード（テキストはウィンドウ幅で折り返して表示）。ソースバッファのスクロールに連動してプレビュー側もスクロールする片方向スクロール同期を備えています。Markdown プレビューは GitHub 風の表・タスクリスト・脚注を描画し、見出しにアンカーを振るので目次から飛べます。リンクは外部 URL なら既定のブラウザで、相対リンクならエディタで開きます。`M-s l`（`consult-line`）はプレビュー上でも使え、選んだ行までプレビューをスクロールします。
* **Web プレビュー（実験的）**: `M-x navigate-url` で指定した URL をバッファ内に表示します。許可されるのは `https://` とループバック `http://`（`localhost` / `127.0.0.1` / `[::1]`）のみで、それ以外（`javascript:`・`file:`・`data:`・外部ホストへの `http://` 等）は拒否され、エコーラインに案内が表示されます。
* **ウィンドウ・バッファ管理**: バッファの切り替え (`C-x b`) や専用のバッファリスト機能 (`C-x C-b`) を備えるほか、ミニバッファによるファイル操作に加えて、OSネイティブのファイル選択・保存ダイアログ (`C-x M-f`, `C-x M-w`) もサポートします。Emacs 31.1 互換の **Auto Window Prefer Longest Edge** 設定 (`M-x split-window-prefer-longest`) を有効にすると、自動分割がペインの長辺方向を優先します。
* **インライン補完プレビュー**: Emacs 30.1 互換の **Completion Preview Mode**（`M-x completion-preview-mode`、デフォルト OFF）を有効にすると、3 文字以上の語を打っている最中にカーソル直後へ候補の残りが薄く表示され、`Tab` で確定できます。候補はバッファ内に既にある語（`M-/` の `dabbrev-expand` が巡回するものと同一）で、言語サーバーもネットワークも使いません。
* **ファイルタブ (xyzzy 風)**: 開いている全バッファを画面上部にタブ表示するオプション機能（デフォルトは非表示）。タブのクリックでアクティブペインのバッファを切り替え、中クリック（または `×` ボタン）で閉じ、ドラッグ＆ドロップで並び替えができ、未保存・読み取り専用のインジケータも表示します。タブがウィンドウ幅を超えた場合は両端にスクロールボタンが現れ（押しっぱなしで連続スクロール）、右端に常設の全タブ一覧ボタンからドロップダウンですべてのタブに到達できます。タブ表示中は `C-Tab` / `C-S-Tab` でタブ順に巡回できます。設定サイドバーの「Show File Tabs」、または `M-x show-file-tabs` / `hide-file-tabs` / `toggle-file-tabs` で表示を切り替えられます。
* **サイドバー型ファイラ機能**: ウィンドウ左側に表示されるファイルエクスプローラ (`C-x d` / `C-c d`)。素早くファイルの中身を確認できるプレビュー機能 (`l` / `Right`) や、Windows環境のシステムドライブにも対応したディレクトリナビゲーション (`r`, `u`) を備えています。サイドバー上でファイル・フォルダの新規作成 (`c` / `C`)、リネーム (`R`)、ゴミ箱への移動 (`d`) が行えるほか、`m` でブックマーク、`e` でエクスプローラでの場所表示ができます。
* **右サイドバー機能群:** ウィンドウ右側に表示される、編集を効率化するための各種専用サイドバーを搭載：
  * **ワークスペース・サイドバー** (`C-c w`, `C-,` または `M-x toggle-workspace-sidebar`): 複数のフォルダをまとめて管理。VS Code互換の `.code-workspace` ファイルの読み書きに対応しています。
  * **アウトラインビュー** (`C-c o`): Markdown/HTML の見出し階層に加え、TypeScript/JavaScript/Python/Go/Rust/Java/Kotlin/Dart/C#/Swift/PHP/CSS/SCSS/Less の宣言の階層も表示。エディタとのリアルタイム同期や位置復元に対応。
  * **キルリング・サイドバー** (`C-c y` または `M-x browse-kill-ring`): キルリング（クリップボード履歴）を一覧し、過去のテキストを選択してヤンク（貼り付け）可能。
  * **レジスタ・サイドバー** (`C-c r` または `M-x browse-registers`): 保存されているテキスト、位置、ウィンドウレイアウト（レジスタ）を一覧。
  * **Undo 履歴サイドバー** (`C-c u` または `M-x browse-undo-history`): 現在のバッファの Undo 履歴を中身付きで一覧表示し、選択した項目までまとめて Undo できます。サイドバー経由のまとめ Undo は 1 回の Redo で一括復元できます（Word/Excel と同様）。
  * **履歴プレイバック** (`M-x playback-history`): 現在のバッファの編集履歴をアニメーション再生します。先頭まで一気に Undo した後、現在の状態まで段階的に Redo して再生します。プレフィックス引数で速度を制御可能 (`C-u` で 10ms、`C-u C-u` で 1ms、`C-u <n>` で `<n>` ms、上限 1000ms)。任意のキー入力やクリックで中断（最新状態に即座に復帰）。再生中はバッファに読み取り専用ガードがかかり、オートセーブ、MCP からの書き込み、外部ファイルのドラッグ&ドロップが中間状態をディスクに保存しないよう保護されます。
  * **最近使ったファイルサイドバー** (`C-c c` または `M-x browse-recent-files`): 最近使用したファイルをディレクトリパスと共に一覧表示し、素早く開くことが可能。フォーカス中の行で `m` キーを押すとブックマーク (ピン止め) のトグルが可能。
  * **ブックマーク サイドバー** (`C-c b` / `C-x r l` または `M-x browse-bookmarks`): よく使うファイルをピン止めして長期的に呼び出せるサイドバー。最近使ったファイル / ファイラ / ワークスペース サイドバー上で `m` キーを押すとブックマーク追加、ブックマーク サイドバー内で `m` キーを押すと解除できます。`config.json` に永続化されます。`C-x r m` (`bookmark-set`) で現在開いているファイルをブックマーク (既にブックマーク済みの場合はミニバッファに通知)、`M-x bookmark-toggle` でトグルできます。キーバインドは Emacs `bookmark.el` の規約に準拠しています。
  * **設定サイドバー** (`C-c s`, `C-.` または `M-x open-config`): フォント、テーマ、行番号表示などのエディタ設定を視覚的に管理。
  * **Git サイドバー** (`C-c g` または `M-x toggle-git-sidebar`): 開いているワークスペースのソース管理ビュー。リポジトリごとの変更ファイル一覧とコミット履歴グラフを表示します。変更ファイルで `Enter` を押すと `git diff HEAD` の差分を読み取り専用の `*git-diff*` バッファに表示し、コミットを展開してその変更内容を確認できます。内蔵のメッセージ欄から全変更を一括コミット（`Ctrl+Enter`、`Ctrl+Shift+Enter` でコミット＆push を一括）、push / pull（`P` / `F`）までエディタ内で完結できます。upstream 未設定のブランチは VS Code 同様 `git push -u origin` で publish し、既に upstream を追跡しているブランチは通常の push になります。Create Tag / Push Tags ボタン（`t` / `T`）で、メッセージ欄のテキストを名前にした軽量タグを HEAD に作成し、すべてのタグをリモートへ push できます。`R` では、y/n 確認のうえフォーカス中ファイルの変更を破棄できます（tracked は HEAD へ復元、未トラックはゴミ箱へ移動）。
* **シェル統合**: エディタ内で対話的シェル（cmd.exe等）を実行するバッファ機能 (`M-x shell`)。Emacs の `comint-mode` の作法に準拠し、バッファごとのプロセスマークがプロンプトと過去の出力を編集から保護します。`C-a` で入力開始位置へ移動、`M-p` / `M-n` で入力履歴を巡回、`C-c C-c` で実行中のコマンドを中断できます。単発の実行には `M-!`（`shell-command`）があり、バッファのあるディレクトリでコマンドを1回実行して、短い出力はエコーライン、長い出力は `*Shell Command Output*` に表示します。`M-|`（`shell-command-on-region`）は選択範囲を標準入力として渡します。いずれも `C-u` を付けると出力をカーソル位置に挿入（選択範囲は置き換え）します。終わらないコマンドは設定したタイムアウト（`set-shell-command-timeout`、既定 60 秒）で終了させます。
* **AI CLI 連携**: `M-x claude-cli` / `M-x antigravity-cli`（別名 `agy-cli`）/ `M-x codex-cli` で、指示文を、選択範囲があればそれも添えて外部の AI CLI へ渡し、答えを隣のペインの読み取り専用 Markdown バッファ（短ければエコーライン）に受け取ります。`C-u` を付けると答えをバッファに入れ、選択範囲を置き換えます。文章を選んで「翻訳して」と指示すればその場が訳文になり、undo 1 回で戻せます。指示文も選択範囲も標準入力で渡すため、バッファの内容がコマンドラインに乗ることはありません。指示文を空のまま Enter を押すと、選択範囲そのものをプロンプトとして送ります。実行中はエコーラインに経過秒数が出て `C-g` で中断でき、`aiCliConfirmChars` を超える選択範囲は送信前に確認します。対象の CLI が導入され PATH にあることが前提です。
* **メジャーモード**: プログラミング言語、シェルスクリプト、マークアップ、スタイルシート、データ・設定形式、ビルド・インフラ、ハードウェア記述言語まで、60 種類以上のメジャーモードを内蔵しています。ファイルを開くと拡張子から自動的に選ばれ、`M-x set-highlight-mode`（またはモード名の直接指定。例: `M-x python-mode`）で現在のバッファのモードを変更できます。
* **再インデント**: `C-M-\`（`indent-region`）と `M-x indent-buffer` で、選択範囲またはバッファ全体を再インデントします。文字列やコメントの中の括弧は数えず、ブロックコメントや複数行テンプレートリテラルの中身は崩さず、タブで字下げされたファイルはタブのまま保たれます。対象はブレースで階層を作る言語（JavaScript、TypeScript、C/C++、C#、Java、Go、Rust、JSON、CSS など）のみで、それ以外のモードでは何もせず理由を表示します。
* **ミニバッファ補完**: `M-x` 時のコマンドのほか、ファイルパスやディレクトリパスの補完機能を搭載。
* **ドキュメント・インポーター**: PDF、Word (**`.docx`**)、Excel (**`.xlsx`**) 形式のファイルを、プレーンテキストとして自動的に抽出・インポートして開くことが可能です。Excel は各シートが TSV 形式で読み込まれます。**注意:** 元のバイナリファイルを破壊しないよう、インポートされたバッファは自動的に**「読み取り専用（Read-only）」**として開かれます（安定性確保のため、**50MBまでのサイズ制限**があります）。抽出したテキストを保存する場合は `Save As` (`C-x C-w`または`C-x M-w`) を使用してください。
* **カーソル位置の記憶（Save Place）**: Emacs の `save-place-mode` 互換の設定（`M-x save-place-mode`、デフォルト **ON**）。ファイルを閉じたときのカーソル位置を覚えておき、次に開いたとき（アプリを再起動した後でも）その位置へ戻し、ペインの中央に表示します。位置は行と桁で保存されるため、別のエディタでファイルが編集されていても、無関係な行へずれずに同じ行の一番近い位置へ着地します。直近 100 ファイルぶんを `config.json` に保持し、ブックマーク済みのファイルを優先して残します。
* **括弧の自動補完（Electric Pair）**: Emacs の `electric-pair-mode` 互換の設定（`M-x electric-pair-mode`、デフォルト **OFF**）。開き括弧やクォートを入力すると閉じ文字が自動で入り、選択範囲があればそれを囲みます。閉じ文字を自分で打った場合は重ねずにすり抜け、空のペアの内側で `Backspace` を押すと左右まとめて消えます。空のペアの内側で `Enter` を押すと閉じ文字が次の行へ移ります。`「」`・`【】`・`（）` などの日本語括弧にも対応し、英単語中のアポストロフィ（`don't`）は対象外です。
* **改行時の自動字下げ（Electric Indent）**: Emacs の `electric-indent-mode` 互換の設定（`M-x electric-indent-mode`、デフォルト **OFF**）。`Enter` で改行したとき、新しい行が自動で字下げされます。桁の決め方は `M-x indent-region` と同じ規則で、文字列やコメントの中を除いて括弧を数えます。1 行で 2 つブロックを開けば 2 段深くなり、コメント末尾の括弧では桁が動きません。字下げそのものが構文である Python・YAML では、行末が `:` の行の次を 1 段深くします。字下げに使う文字は前の行のものを引き継ぐため、タブで字下げされたファイルはタブのまま保たれます。行頭で `Enter` を押したときは下へ送られる行の字下げをそのまま残し、Electric Pair Mode が ON なら空のペアを開いた 2 行にも字下げが入ります。
* **ファイル・エンコーディング管理**: オートセーブ、ディスク上のファイルが変わったときの未編集バッファの自動再読込 (`M-x set-auto-revert-clean`)、最近開いたファイルの履歴 (`M-x recentf-open-files`)、自動UTF-8昇格、BOM付きUTF-8の保持 (`utf-8-bom`)、改行コードの選択 (CRLF / LF / CR)、印刷機能 (`M-x print-buffer`)、およびページを画像に潰さず文字を文字のまま埋め込む PDF 出力 (`M-x export-buffer-to-pdf`) に対応。保存はアトミック方式（一時ファイルに書き込んでからリネーム）のため、クラッシュしても書きかけのファイルが残りません。
* **トレイ常駐**: Run in Background を有効にすると (`M-x set-close-to-tray`)、ウィンドウを閉じてもタスクトレイに常駐し、次回はバッファを保ったまま瞬時に復帰できます。キル・ヤンクを OS のクリップボードと連携させることもできます (`M-x set-clipboard-integration`)。
* **Emacs 定番の小コマンド**: `M-m`（`back-to-indentation`）、`M-\`（`delete-horizontal-space`）、`C-c SPC`（`just-one-space`、全角空白にも対応）、`C-x C-o`（`delete-blank-lines`）、`C-x =`（`what-cursor-position`。カーソル位置の文字と文字コードを表示）、`M-=`（`count-words-region`）、`M-^`（`join-line`）、`C-x C-t`（`transpose-lines`）、`M-x scratch-buffer`、`M-x elecxzy-uptime` などを備えています。
* **行単位のコメント (`C-x C-;`)**: 行全体のコメント状態を切り替え、カーソルを次の行へ送ります。押し続ければブロックを上から順に処理できます。前置引数は行数で（`C-u 3 C-x C-;`）、負の値なら上方向へ進みます。選択範囲があるときは、選択が掛かった行をすべて切り替えます。`M-;` が選択の終わる行を対象外にするのに対し、こちらはその行も含めます（カーソルは動かしません）。
* **指定した文字までキル (`M-z` / `M-Z`)**: カーソル位置から、次に打った 1 文字が現れるところまでを、その文字ごとキルします（`M-z )` で引数リストの残りを一気に消す、といった使い方ができます）。`M-Z` はその文字の手前で止めます。前置引数で何個目かを指定でき（`C-u 2 M-z ;` で 2 つ目のセミコロンまで）、負の前置引数では手前を探します（`C-u - M-z (`）。文字は大文字・小文字を区別してそのまま照合し、続けて実行するとキルリングの同じエントリへ連結されます。
* **重複行の削除 (`M-x delete-duplicate-lines`)**: 選択範囲の中で内容が同じ行を、最初の 1 つだけ残して削除します。残った行の並びは元のままです。前置引数で規則を切り替えられ、`C-u` は最初ではなく最後の 1 つを残し、`C-u C-u` は隣り合った重複だけを消し（`uniq` 相当）、`C-u C-u C-u` は空行を残します。操作全体が 1 回の Undo で元に戻ります。
* **桁揃え機能 (`M-x align-regexp`)**: 入力した正規表現の最初のマッチが同じ桁に来るよう、選択範囲の行に空白を詰め替えます（`=` や `:`、行末の `//` コメントの位置揃えに便利です）。桁は表示幅で測るため、全角文字やタブが混じっていても正しく揃います。マッチしない行は一切変更しません。
* **電卓 (`C-x * q`)**: ミニバッファに常駐する電卓です。式を打つとエコー行に答えが出ます（`C-u` を付けるとカーソル位置に挿入します）。`C-x * e`（`calc-eval-region`）は選択した数式——選択が無ければカーソル位置の数式——をその場で計算結果に置き換えるので、`(1280-64)/3` と書いて一打で `405.333333333` になります。`C-x * s`（`calc-sum-region`）は選択範囲の数値をすべて合計し、矩形選択なら表の 1 列だけを足せます。`C-x * a`／`C-x * m`／`C-x * d` で平均・中央値・標準偏差を、`C-x * t`（`calc-stats-region`）で件数・合計・平均・中央値・最小・最大・範囲・分散・標準偏差・四分位数をまとめた `*Calc Statistics*` バッファを出せます。基数変換もあり、`C-x * x`／`C-x * b`／`C-x * o`／`C-x * n` で選択範囲の整数を 16 進・2 進・8 進・10 進の表記へ 1 回の undo で戻せる形で書き換えます。`0x` / `0b` / `0o` も読み、小数・`utf8` のような識別子・3 桁区切りには触れません。さらに `M-x calc-…-region` の一群があり、選択範囲の数値を構成比・階差・累積和・z 得点・丸め・任意の倍率・平方メートルと坪・消費税の内税と外税・源泉徴収税額・素因数分解・分数へ書き換えたり、価格列の収益率とボラティリティと最大ドローダウン、毎月のローン返済額、最大公約数と最小公倍数、数列の見立てと次の項、原稿用紙の枚数と読了時間を表示したりできます。数学向けには厳密計算の層を別に用意しています。`calc-exact-region` は BigInt の有理数で分数と小数を足すので `1/3` を 3 つでちょうど `1` になり、`calc-identify-region` は小数の背後にある閉じた形（`1.644934067` なら `pi^2/6`）を探して、無ければ黙ります。ほかに `calc-continued-fraction-region`・`calc-number-theory-region`・`calc-bezout-region`・`calc-binomial-region`・`calc-mod-region` で、連分数、約数と φ・μ の一覧、拡張ユークリッドと mod 逆元、厳密な二項係数、最小非負剰余を扱えます。式は四則と `^`、32 ビット整数のビット演算、階乗、16 進・2 進・8 進リテラル（整数の答えには 16 進と 2 進も併記）、`sqrt`・`round(x, n)`・`log(x, 底)`・`min`／`max`／`avg`／`gcd` などの関数、定数 `pi`・`e`・`tau`・`phi`、直前の答えを指す `ans` に対応します。全角数字や `× ÷ −` もそのまま使えます。解析はすべて elecxzy 自身が行い、JavaScript の評価系には渡していません。
* **段落整形機能 (`M-q`)**: 指定した桁数でテキストをハードラップし、段落を美しく再整形する `fill-paragraph` 機能を搭載。折り返し桁は `C-x f`（`set-wrap-column`）で設定でき、`C-u C-x f` は現在の桁を採用します。 `M-Q`（`unfill-paragraph`）は段落を 1 行に戻し、`M-x fill-paragraph-semlf` は 1 文が 1 行になるセマンティック改行で整形します（1 行に収まらない長い文は折り返し幅で折り返します）。
* **永続化レジスタ機能**: テキスト、カーソル位置、**ウィンドウレイアウト**を一時的に記憶（レジスタ）し、必要な時に呼び出せます。保存内容はローカルストレージへ永続化されます。対応コマンド: `C-x r s` (コピー), `C-x r i` (挿入), `C-x r SPC` (点保存), `C-x r j` (ジャンプ / レイアウト復元), `C-x r w` (ウィンドウレイアウト保存)。矩形選択モード中であれば矩形データとしても保存可能です。
* **矩形編集機能**: 縦方向にテキストを操作する矩形編集を正式にサポート。`C-x SPC` で矩形マークモードに入り、`C-x r k` (切り取り) やヤンク (C-y) が可能です。キルリングやレジスタに保存された矩形データは、貼り付け時に自動的に判別・展開されます。
* **サロゲートペアへの完全対応**: 絵文字や特殊漢字などのサロゲートペアを「一文字」として厳格に管理。編集・移動・整形時に文字が分断されることのない堅牢なテキスト処理を実現。
* **正確な単語ナビゲーション**: ネイティブの `Intl.Segmenter` API を利用した単語境界の判定を実装しています。日本語（CJK）における自然な文節移動や、スネークケース（`snake_case`）などのサブワード単位でのカーソル移動（`M-f`, `M-b` など）に標準で対応しています。
* **Avy ジャンプ (`C-'`):** 画面内の表示領域に対して、ラベル入力を用いたカーソル移動。`C-'` に続けて文字を入力すると座標にラベルが重畳表示され、それをタイピングすることで目的の場所へ即座にジャンプできます。
* **行の展開表示 (`C-;`):** 右端で切れた行の全文を、スクロールもバッファの変更もせずにポップアップ表示します（`...` インジケーターのクリックでも同じ動作です）。選択範囲があるときは、その内容を表示します。
* **カーソルVFX:** カーソルの移動に合わせて動的な視覚効果（粒子、雷、カワイイシャワー、分身など）を表示します。ショートカットキーで9種類のスタイルを瞬時に切り替えられるほか、カーソルを追う猫マスコット「Elenyan」も選べます。
  * `C-c 1` 〜 `C-c 9`: 各種VFXスタイルを選択。
  * `C-c 0`: VFXをオフにします。
  * `M-x set-cursor-vfx`: 任意のスタイルを選択。猫マスコット「Elenyan」もここから選べます（`C-u N` で3種類の猫を選択）。
  * `M-x set-macro-vfx`: キーボードマクロ実行中に表示する専用の視覚効果を選択します。`M-x set-smooth-cursor` ではカーソル移動を滑らかにアニメーションさせられます。
* **簡易的なカーソルベースマクロ (Beta):** カーソル位置を基準としたテキスト操作（挿入・削除）を記録・再現します（`C-x (`, `C-x )`, `C-x e`）。ユニバーサル引数による連続実行（`C-u 10 C-x e` 等）にも対応しています。
* **カスタマイズ可能なカラーテーマ:** 12 種類の内蔵テーマ (ライト 6 / ダーク 6 のバランス構成) で作業空間をパーソナライズできます。**"Dark"** / **"Light"** (Catppuccin)、**"Cyber"** (ネオン/近未来)、**"Cute"** (パステル/マカロン)、**"Tokyo Night"** (Storm 濃紺 + ネオンシアン)、**"Rose Pine Dawn"** (温かい紙)、**"Gruvbox"** (レトロ暖色)、**"Nord"** (北極の雪原ライト)、**"Forest"** (Everforest グリーン)、**"Slate Dark"** / **"Slate Light"** (低彩度ブルーグレー・高可読性)、**"Default"** を `M-x <テーマ名>-theme` で切り替え可能です。`M-x set-theme` なら一覧から選べます（候補を移動するたびにその配色がライブプレビューされ、`Esc` で元の配色に戻ります）。
* **MCP サーバー統合**: Model Context Protocol (MCP) サーバーとして動作可能。環境変数 **`ELECXZY_MCP_MODE`** を **`true`** に指定して起動することで、AI アシスタント（Google Antigravity, Claude Desktop/Code 等）から直接バッファの読み書きやエディタ操作が行えます。
* **TypeScript プラグイン:** `config.json` と同じフォルダの `plugins` フォルダに `.ts` ファイルを置くだけで、独自の `M-x` コマンドを追加できます。プラグインは `{ command, description, execute(input) }` を default export し、隔離され通信が遮断された Web Worker 内でタイムアウト付き (`M-x set-plugin-timeout`) で実行されます。詳細は下記「プラグイン」を参照。
* **キーバインドのカスタマイズ (`keybinds.json`)**: 再ビルドなしに既定キーマップを上書き・削除できます。`config.json` と同じユーザデータフォルダに `keybinds.json` を置くだけ（`M-x show-keybinds-config` でいつでも開けます）。記法は Emacs 互換で、`\C-` が `Ctrl`、`\M-` が `Alt`、`\S-` が `Shift`（`"C-S-Tab"` のような特殊キー用。単一文字は Shift 後の文字か大文字をそのまま書きます）、スペース区切りでキーシーケンス（`"C-x C-f"`）を表現できます。値を空文字 `""` にするとそのバインドを削除します。ファンクションキー `F1`〜`F12` も割り当て可能です（例: `"F5": "revert-buffer"`、`"C-F12": "save-buffer"`）。未割当のままなら Electron 既定の `F11` 全画面トグルはそのまま動作します。JSON の構文エラーや未登録コマンド ID などはエコーラインに 1 度だけまとめて表示され、起動・編集を止めることはありません。例:
  ```json
  {
      "\\C-s": "save-buffer",
      "C-x C-r": "mark-whole-buffer",
      "F5": "revert-buffer",
      "\\C-_": ""
  }
  ```

<p align="center">
  <img src="./assets/screenshot/01-editor.png" height="170" alt="Editing with tabs and syntax highlighting (Rose Pine Dawn)">
  <img src="./assets/screenshot/02-window-split.png" height="170" alt="Three panes: shell, Markdown preview and code (Tokyo Night)">
  <img src="./assets/screenshot/15-workspace.png" height="170" alt="Workspace sidebar with two folders">
  <img src="./assets/screenshot/05-command-palette.png" height="170" alt="M-x completion (Slate Light)">
  <img src="./assets/screenshot/06-avy.png" height="170" alt="Avy jump labels (Forest)">
  <img src="./assets/screenshot/04-consult-line.png" height="170" alt="consult-line narrowing the buffer (Gruvbox)">
  <img src="./assets/screenshot/03-grep.png" height="170" alt="grep across files (Nord)">
  <img src="./assets/screenshot/07-git-sidebar.png" height="170" alt="Git sidebar with history and changes (Slate Dark)">
  <img src="./assets/screenshot/08-settings.png" height="170" alt="Settings sidebar (Light)">
  <img src="./assets/screenshot/09-kill-ring.png" height="170" alt="Kill ring sidebar (Cyber)">
  <img src="./assets/screenshot/10-web-preview.png" height="170" alt="Web preview beside the code">
  <img src="./assets/screenshot/14-cursor-vfx.png" height="170" alt="Cursor VFX (Cute)">
</p>


### MCP サーバー統合

`elecxzy` は MCP サーバーとして動作します。お使いの AI アシスタント（Google Antigravity や Claude Desktop/Code 等）と連携させることで、AI が開いているバッファの内容を読み取ったり、直接編集したりといった強力なエージェント操作が可能になります。

> [!IMPORTANT]
> MCP サーバーを起動する前に、`設定サイドバー → MCP` の **Allowed Save Directories**（または `config.json` の `mcpAllowedDirectories`）に保存を許可するディレクトリを登録してください。MCP の `save_file` ツールは、登録されたいずれかのディレクトリ配下にしか書き込めません。リストが空、または存在しないパスを含む場合、`M-x mcp-start` は起動を中断し、エコーラインに案内を表示します。

#### 設定方法 (Google Antigravity / Claude Desktop / Claude Code)

`claude_desktop_config.json` や、Google Antigravity の設定セクションに以下のいずれかの内容を参考にして追加してください：

```json
{
  "mcpServers": {
    "elecxzy": {
      "command": "C:\\path\\to\\elecxzy\\elecxzy.exe",
      "args": ["C:\\path\\to\\elecxzy\\resources\\app.asar"],
      "env": {
        "ELECXZY_MCP_MODE": "true",
        "ELECTRON_RUN_AS_NODE": "1"
      }
    }
  }
}
```

```json
{
  "mcpServers": {
    "elecxzy": {
      "command": "C:\\Users\\...\\AppData\\Local\\Programs\\elecxzy\\elecxzy.exe",
      "args": ["C:\\Users\\...\\AppData\\Local\\Programs\\elecxzy\\resources\\app.asar"],
      "env": {
        "ELECXZY_MCP_MODE": "true",
        "ELECTRON_RUN_AS_NODE": "1"
      }
    }
  }
}
```

### プラグイン

`elecxzy` は小さくサンドボックス化された TypeScript プラグインに対応しています。プラグイン機構は**既定で無効**です — `M-x enable-plugins` (または `config.json` の `enablePlugins`) でオプトインしてください。有効化後、`config.json` と同じユーザデータフォルダ内の `plugins` フォルダ (`M-x open-plugins-folder` で開けます) に `.ts` ファイルを置くと、新しい `M-x` コマンドとして登録されます。初回のプラグイン読み込み時に、型定義ファイル (`elecxzy-plugin.d.ts`) とサンプル (`hello-world.ts`) が自動生成されます。

プラグインは `{ command, description, execute(input) }` を default export する単一ファイルです。`execute` はアクティブなバッファのスナップショットを受け取り、どう変更するかを返します。例えば大文字化コマンドなら:

```ts
import type { Plugin } from './elecxzy-plugin'

const plugin: Plugin = {
  command: 'upcase-buffer',
  description: 'Uppercase the region, or the whole buffer',
  execute(input) {
    if (input.selection) {
      const { start, length } = input.selection
      const region = input.text.slice(start, start + length)
      return { text: region.toUpperCase(), start, length }
    }
    return input.text.toUpperCase() // 文字列を返すとバッファ全文を置換
  },
}

export default plugin
```

`input` には `text` (バッファ全文)、`cursor`、`selection` (`{ start, length }` または `null`)、`fileName`、`language` が渡されます。戻り値は、**文字列** (全文を置換)、**オブジェクト** `{ text, start?, length?, cursor?, select?, message? }` (範囲編集 — `start`+`length` で splice、両方省略で全文 — や `[command] …` 形式の 1 行メッセージ)、`{ message }` (メッセージのみ)、`null` (何もしない) のいずれかです。また、任意で `apiVersion: 1` を宣言できます。本ビルドが対応するより新しい API バージョンを宣言したプラグインは、読み込み時にスキップされます。

プラグインは隔離された Web Worker で実行され、Node・DOM・ファイルシステムへのアクセスはなく、通信もアプリの Content-Security-Policy で遮断されます。タイムアウト (`M-x set-plugin-timeout` または `config.json` の `pluginTimeout`。1〜60 秒、既定 5 秒) を超えた実行は中断されるため、不具合のあるプラグインがエディタを固めることはありません。機構全体の有効/無効は `M-x toggle-plugins` (または `config.json` の `enablePlugins`) で切り替え、ファイル編集後は `M-x reload-plugins` で再読み込みします。プラグインが読み込まれない・動きがおかしいときは、`M-x debug-plugins` で全体を再読み込みし、ファイルごとの読み込み結果 (エコー行に収まらないコンパイルエラーの全文を含む) を読み取り専用の `*Plugin Report*` バッファで確認できます。

### 技術スタック

- **プラットフォーム**: Electron
- **フロントエンド**: React, TypeScript
- **スタイリング**: Styled-components

### コマンド一覧

すべてのコマンドとキーバインドの詳細については、以下をご参照ください。
👉 **[COMMANDLIST.md](./COMMANDLIST.md)**

---

## FAQ

### English

**Q: Is word wrap (wrapping at the window edge) supported?**

A: We currently have no plans to support dynamic word wrap. Implementing line folding requires complex rendering calculations, which would negatively impact the predictability of the virtual rendering system and overall maintainability. As an alternative, please use the **`M-q` (Fill Paragraph)** command to perform hard-wrapping, enable **`auto-fill-mode`** to automatically insert newlines as you type, or use **`C-;` (Show Line Expansion)** to temporarily view truncated lines in an overlay.

**Q: Horizontal scrolling with my mouse tilt-wheel doesn't work.**

A: Depending on your environment, mouse utility software (e.g., Logi Options) may block horizontal scroll signals (deltaX) for unrecognized applications. You can horizontally scroll by holding the **Shift** key while rotating the vertical wheel.

**Q: The cursor is misaligned when using "MS Gothic" or "MS Mincho" fonts.**

A: This behavior is due to conflicting legacy bitmap data within these older fonts and the modern Canvas-based text measurement. For proper cursor alignment, we recommend using modern monospace fonts such as **BIZ UDGothic**.

**Q: I see leftover files named `.<filename>.tmp-*` in my edit folder. Are they safe to delete?**

A: Yes, you can delete them safely. elecxzy uses an atomic-save pattern (write to a temp file, then rename) to prevent file corruption on crashes, and these temp files are normally cleaned up automatically. If one remains, it usually means antivirus software or a cloud-sync tool (e.g., OneDrive, Dropbox, Google Drive) briefly locked the temp file and the rename step failed — your original file is unaffected, but the temp file got stranded. If this happens often, add the folder you edit in to the exclusion list of your antivirus or cloud-sync tool.

**Q: The Microsoft Store version feels slow and uses more memory than the installer version.**

A: The Microsoft Store build is packaged as an MSIX/appx app, which Windows runs inside a virtualized container. This layer adds overhead that can increase memory usage and make the editor feel sluggish — this is a characteristic of the packaging format rather than a bug in elecxzy. If it becomes noticeable, open Windows **Settings → Apps → Installed apps → elecxzy → ⋯ → Advanced options** and click **Reset**. Clearing the app's accumulated state often lowers memory usage and makes operation smoother again. Note that Reset clears the app's local data, so custom settings may return to their defaults — if you have customized `config.json`, `color-config.json`, or `keybinds.json`, back them up first. If you do not need the Store version specifically, the standalone installer (NSIS `.exe`) build avoids this overhead entirely.

### 日本語

**Q: 右端で折り返し表示はできないのですか？**

A: 現時点では、ウィンドウ端での動的な折り返し（ソフトラップ）には対応していません。折り返し処理の実装は、仮想レンダリングにおける座標計算の複雑化を招き、実行速度やコード保守性の低下に繋がるためです。代替手段として、**`M-q` (Fill Paragraph)** コマンドによる整形、入力に追従して自動的に改行を挿入する **`auto-fill-mode`**、または右端で切れた行を一時的に展開表示する **`C-;` (Show Line Expansion)** をご利用ください。

**Q: マウスのチルトホイールを倒しても水平スクロールが動作しません。**

A: 一部のマウスユーティリティソフト（例：Logi Options）がインストールされている環境では、アプリケーションに対する水平スクロール信号がブロックされる場合があります。**Shiftキーを押しながらホイールを縦に回転**させることで、水平スクロールが可能です。

**Q: 「MS ゴシック」や「MS 明朝」を使うと、カーソルの位置がずれます。**

A: 古いフォントに内蔵されているビットマップ仕様と、Canvas APIを利用した文字幅計測エンジンとの間で生じる挙動です。正確なカーソル配置のためには、表示が滑らかな **BIZ UDGothic** などのモダンな等幅フォントの使用を推奨します。

**Q: 編集フォルダに `.<filename>.tmp-*` というファイルが残っています。削除しても問題ありませんか？**

A: 削除して問題ありません。elecxzy はクラッシュ時のファイル破損を防ぐため、アトミック保存方式（一時ファイルに書き込んでからリネーム）で保存しており、これらの一時ファイルは通常自動的に削除されます。残っている場合は、ウイルス対策ソフトやクラウド同期ソフト（OneDrive、Dropbox、Google Drive など）が一時ファイルを瞬間的にロックし、リネーム手順が失敗したことが原因です（元のファイルには影響ありません）。頻繁に発生する場合は、編集対象のフォルダをウイルス対策ソフトやクラウド同期ソフトの除外設定に追加してください。

**Q: Microsoft Store 版が、インストーラ版に比べて動作が重く、メモリ使用量も多いです。**

A: Microsoft Store 版は MSIX/appx 形式でパッケージ化されており、Windows はこれを仮想化されたコンテナ内で実行します。この仕組みによるオーバーヘッドでメモリ使用量が増え、動作が重く感じられることがあります（elecxzy 側の不具合ではなく、パッケージ形式に由来する挙動です）。気になる場合は、Windows の **[設定] → [アプリ] → [インストールされているアプリ] → [elecxzy] → [⋯] → [詳細オプション]** から **[リセット]** を実行してください。蓄積されたアプリの状態が消去され、メモリ使用量が減って動作が軽くなることがあります。なお、リセットはアプリのローカルデータを消去するため、カスタマイズした設定が初期状態に戻る場合があります。`config.json`・`color-config.json`・`keybinds.json` を編集している場合は、事前にバックアップしておくことをおすすめします。特に Store 版である必要がなければ、この種のオーバーヘッドがない単体インストーラ（NSIS `.exe`）版のご利用もご検討ください。

---

## License / ライセンス

This software is released under the [MIT License](./LICENSE). 
本ソフトウェアは [MITライセンス](./LICENSE) のもとで公開されています。

## Acknowledgements / 謝辞

This application is deeply inspired by the design and philosophy of the following pioneering editors. We express our utmost respect and gratitude to their creators and contributors:

本アプリケーションは、以下の先駆的なエディタの設計と哲学に深くインスパイアされています。これらの優れたソフトウェアを生み出した開発者およびコミュニティの皆様に、最大限の敬意と謝意を表します。

- **GNU Emacs**
  - Copyright (C) 1985-2024 Free Software Foundation, Inc.
  - Created by Richard Stallman

- **xyzzy**
  - Copyright (c) 1996-2005 Tetsuya Kamei
  - Copyright (c) 2012-2014 xyzzy Project
