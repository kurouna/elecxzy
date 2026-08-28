# **elecxzy** Command List / コマンド一覧

Every command **elecxzy** offers, grouped by topic. Most commands run by pressing `M-x` (Alt+x) and typing the command name; commands that also have a default key binding show it in the first column.

**elecxzy** で使用できるコマンドをテーマ別にまとめた一覧です。ほとんどのコマンドは `M-x` (Alt+x) を押してコマンド名を入力すると実行できます。既定のキーバインドを持つコマンドは、表の1列目にそのキーを記載しています。

## How to Read This List / 本書の読み方

- **Keys / キー** — the default key binding. A row showing just `M-x` has no key binding: type `M-x` and then the command name. / 既定のキーバインドです。`M-x` とだけ書かれた行はキーバインドを持たず、`M-x` に続けてコマンド名を入力して実行します。
- **Command / コマンド** — the command name you type after `M-x`. Names separated by `/` are aliases of one command; `—` means the operation has no command name. / `M-x` の後に入力するコマンド名です。`/` 区切りは同じコマンドの別名、`—` はコマンド名を持たない操作です。
- Key notation follows Emacs: `C-` is Ctrl, `M-` is Alt, `SPC` is Space, `S-` / `Shift+` is Shift. `C-x C-f` means press `C-x`, release, then `C-f`. / キー表記は Emacs 流です。`C-` は Ctrl、`M-` は Alt、`SPC` は Space、`S-` / `Shift+` は Shift を表します。`C-x C-f` は `C-x` を押して離してから `C-f` を押します。
- `C-u n` before a command passes the number `n` to it (see [Basics](#basics--基本)). / コマンドの前に `C-u n` を付けると、そのコマンドに数値 `n` を渡せます（[Basics](#basics--基本) 参照）。
- Sidebar sections list only the keys unique to that sidebar; the shared ones live in [Sidebar Common Keys](#common-keys--共通キー). / サイドバーの節にはそのサイドバー固有のキーだけを載せています。共通のキーは [Sidebar Common Keys](#common-keys--共通キー) にまとめています。
- Settings tables put the toggle, `set-…` and `get-…` forms of one option on a single row: the bare name toggles it, `set-…` assigns a value, `get-…` shows the current value. / 設定の表は、1つの設定項目のトグル・`set-…`・`get-…` を1行にまとめています。名前だけのコマンドはトグル、`set-…` は値の設定、`get-…` は現在値の表示です。

## Contents / 目次

- [How to Read This List / 本書の読み方](#how-to-read-this-list--本書の読み方)
- [Basics / 基本](#basics--基本)
    - [Running Commands / コマンドの実行](#running-commands--コマンドの実行)
    - [Help & Info / ヘルプ・情報](#help--info--ヘルプ・情報)
- [Files / ファイル](#files--ファイル)
    - [Opening & Saving / 開く・保存](#opening--saving--開く・保存)
    - [Configuration Files / 設定ファイル](#configuration-files--設定ファイル)
    - [Recent Files & Bookmarks / 最近使ったファイル・ブックマーク](#recent-files--bookmarks--最近使ったファイル・ブックマーク)
- [Editing / 編集](#editing--編集)
    - [Inserting & Deleting / 挿入と削除](#inserting--deleting--挿入と削除)
    - [Kill & Yank / キルとヤンク](#kill--yank--キルとヤンク)
    - [Mark & Region / マークと選択範囲](#mark--region--マークと選択範囲)
    - [Case, Transpose & Join / 大文字小文字・入れ替え・連結](#case-transpose--join--大文字小文字・入れ替え・連結)
    - [Duplicate, Sort & Align / 複製・ソート・整列](#duplicate-sort--align--複製・ソート・整列)
    - [Indent & Comment / インデントとコメント](#indent--comment--インデントとコメント)
    - [Fill & Wrap / 折り返しと整形](#fill--wrap--折り返しと整形)
    - [Replace & Count / 置換とカウント](#replace--count--置換とカウント)
    - [Undo & Redo / アンドゥ・リドゥ](#undo--redo--アンドゥ・リドゥ)
    - [Completion / 補完](#completion--補完)
    - [Registers / レジスタ](#registers--レジスタ)
    - [Rectangles / 矩形操作](#rectangles--矩形操作)
    - [Keyboard Macros / キーボードマクロ](#keyboard-macros--キーボードマクロ)
    - [Input Method / 入力メソッド](#input-method--入力メソッド)
- [Navigation & Search / 移動と検索](#navigation--search--移動と検索)
    - [Moving the Cursor / カーソル移動](#moving-the-cursor--カーソル移動)
    - [Scrolling & Recentering / スクロールと再配置](#scrolling--recentering--スクロールと再配置)
    - [Jumping / ジャンプ](#jumping--ジャンプ)
    - [Search & Replace / 検索と置換](#search--replace--検索と置換)
- [Windows & Buffers / ウィンドウとバッファ](#windows--buffers--ウィンドウとバッファ)
    - [Splitting & Resizing / 分割とサイズ変更](#splitting--resizing--分割とサイズ変更)
    - [Rearranging Layouts / レイアウトの並べ替え](#rearranging-layouts--レイアウトの並べ替え)
    - [Buffers & Tabs / バッファとタブ](#buffers--tabs--バッファとタブ)
- [Sidebars / サイドバー](#sidebars--サイドバー)
    - [Common Keys / 共通キー](#common-keys--共通キー)
    - [Filer / ファイラ](#filer--ファイラ)
    - [Workspace / ワークスペース](#workspace--ワークスペース)
    - [Recent Files / 最近使ったファイル](#recent-files--最近使ったファイル)
    - [Bookmarks / ブックマーク](#bookmarks--ブックマーク)
    - [Git](#git)
    - [Outline / アウトライン](#outline--アウトライン)
    - [Kill Ring / キルリング](#kill-ring--キルリング)
    - [Register List / レジスタ一覧](#register-list--レジスタ一覧)
    - [Undo History / Undo 履歴](#undo-history--undo-履歴)
    - [Settings Sidebar / 設定サイドバー](#settings-sidebar--設定サイドバー)
- [Modes & Preview / モードとプレビュー](#modes--preview--モードとプレビュー)
    - [Major Modes / メジャーモード](#major-modes--メジャーモード)
    - [Preview / プレビュー](#preview--プレビュー)
    - [Web (Experimental / 実験的)](#web-experimental--実験的)
- [Settings / 設定](#settings--設定)
    - [Themes / テーマ](#themes--テーマ)
    - [Display & Appearance / 表示と外観](#display--appearance--表示と外観)
    - [Editing Behavior / 編集動作](#editing-behavior--編集動作)
    - [Files & Saving / ファイルと保存](#files--saving--ファイルと保存)
    - [Cursor & Effects / カーソルと演出](#cursor--effects--カーソルと演出)
    - [DateTime Format Tokens / 日時フォーマットトークン](#datetime-format-tokens--日時フォーマットトークン)
- [Integrations / 連携](#integrations--連携)
    - [Plugins / プラグイン](#plugins--プラグイン)
    - [MCP (AI Integration / AI 連携)](#mcp-ai-integration--ai-連携)
    - [AI CLI](#ai-cli)
    - [Shell / シェル](#shell--シェル)

## Basics / 基本

### Running Commands / コマンドの実行
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `execute-extended-command` | Execute a command by name (with completion) | コマンド名を指定して実行します（補完候補あり） |
| `C-u` | `universal-argument` | Provide a numeric argument for the next command | 次に実行するコマンドに引数（数値）を渡します |
| `C-u C-u ...` | — | Multiply universal argument (4, 16, 64...) | 引数を累積（4, 16, 64倍...）させます |
| `C-g` | `keyboard-quit` | Cancel current command or operation | コマンドや操作を中断します |

### Help & Info / ヘルプ・情報
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `command-list` | Show this command list | コマンド一覧を表示します |
| `M-x` | `license` | Show license information | ライセンス情報を表示します |
| `M-x` | `version` | Show version information | バージョン情報を表示します |
| `M-x` | `elecxzy-uptime` | Show uptime since this elecxzy instance was started (Emacs `emacs-uptime` compatible) | この elecxzy 起動からの経過時間を表示します (Emacs `emacs-uptime` 互換) |
| `C-x =` | `what-cursor-position` | Show the character at point with its code point, and the position in the buffer | カーソル位置の文字とその文字コード、バッファ内の位置を表示します |

## Files / ファイル

### Opening & Saving / 開く・保存
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x C-f` | `find-file` | Open a file | ファイルを開きます |
| `C-x M-f` | `find-file-dialog` | Open a file using OS dialog | OSダイアログを使用してファイルを開きます |
| `C-x C-r` | `find-file-read-only` | Open a file as read-only | 読み取り専用でファイルを開きます |
| `C-x C-s` | `save-buffer` | Save current buffer | 現在のバッファを保存します |
| `C-x C-w` | `write-file` | Save buffer as a new file | 名前を付けて保存します |
| `C-x M-w` | `write-file-dialog` | Save buffer using OS dialog | OSダイアログを使用して保存します |
| `C-x i` | `insert-file` | Insert a file at cursor | カーソル位置にファイルを挿入します |
| `C-x C-q` | `read-only-mode` | Toggle read-only mode | 書き込み禁止状態を切り替えます |
| `C-x x g` | `revert-buffer` | Revert current buffer from disk | 現在のバッファをディスクの内容で再読込します（C-_ で revert 前へ戻せます） |
| `C-x C-c` | `quit` | Exit the application | アプリケーションを終了します |

> The Filer (`C-x d`) and Workspace (`C-c w`) sidebars are described under [Sidebars](#sidebars--サイドバー). / ファイラ（`C-x d`）とワークスペース（`C-c w`）のサイドバーは [Sidebars](#sidebars--サイドバー) を参照してください。

### Configuration Files / 設定ファイル
| Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|
| `show-config` | Open the configuration file | 設定ファイル(config.json)を開きます |
| `show-color-config` | Open the color configuration file | カラー設定ファイル(color-config.json)を開きます |

> Keybindings can be overridden in `keybinds.json`, placed next to `config.json`. / キーバインドは `config.json` と同じ場所に置いた `keybinds.json` で上書きできます。

### Recent Files & Bookmarks / 最近使ったファイル・ブックマーク
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c c` | `browse-recent-files` | Open the Recent Files Sidebar | 最近使ったファイルサイドバーを開きます |
| `M-x` | `recentf-open-files` | List recently opened files | 最近開いたファイルの一覧を表示します |
| `C-c b` / `C-x r l` | `bookmark-bmenu-list` / `browse-bookmarks` | Open the Bookmark Sidebar (Emacs compatible) | ブックマーク・サイドバーを開きます (Emacs 互換) |
| `C-x r m` | `bookmark-set` | Bookmark the current file. If already bookmarked, prints a message (Emacs compatible) | 現在開いているファイルをブックマークします。既にブックマーク済みの場合はミニバッファに通知します (Emacs 互換) |
| `M-x` | `bookmark-toggle` | Toggle bookmark for the current file | 現在開いているファイルのブックマーク (ピン止め) をトグルします |

> The keys available inside these sidebars are listed under [Sidebars](#sidebars--サイドバー). / これらのサイドバー内で使えるキーは [Sidebars](#sidebars--サイドバー) に記載しています。

## Editing / 編集

### Inserting & Deleting / 挿入と削除
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-d` | `delete-char` | Delete character at cursor | カーソル位置の文字を削除します |
| `C-h` / `Backspace` | `backward-delete-char` | Delete character before cursor | カーソルの前の文字を削除します |
| `C-o` | `open-line` | Insert a newline after cursor | カーソル位置に改行を挿入します |
| `C-x C-o` | `delete-blank-lines` | Leave just one blank line around point; delete an isolated blank line; on a non-blank line delete the blank lines that follow it | カーソル周辺の空行を1行だけ残します。単独の空行なら削除し、中身のある行では直後に続く空行を削除します |
| `C-j` | `newline-and-indent` | Newline and indent | 改行してインデントを維持します |
| `C-m` | `newline` | Insert a newline (same as Enter) | 改行を挿入します（Enter と同じ） |
| `Insert` | `toggle-overwrite-mode` | Toggle overwrite-mode | 上書きモード (Overwrite Mode) を切り替えます |
| `M-x` | `just-one-space` | Delete all but one space around point (Supports `C-u n`) | カーソル前後の空白（半角/タブ）を削除し、スペースを1つ（`C-u n` で `n` 個）挿入します |
| `C-c SPC` | `just-one-space-extended` | Delete all but one space around point, including full-width | カーソル前後の空白（半角/タブ/全角）を削除し、半角スペースを1つ挿入します |
| `M-\` | `delete-horizontal-space` | Delete all spaces and tabs around point (with a prefix argument, only those before point) | カーソル前後の空白（半角/タブ）をすべて削除します（前置引数を付けると手前だけ） |
| `M-x` | `delete-trailing-whitespace` | Delete trailing whitespace in buffer | バッファ全体の行末の空白を削除します |
| `M-x` | `delete-trailing-whitespace-region` | Delete trailing whitespace in region | 選択範囲の行末の空白を削除します |

### Kill & Yank / キルとヤンク
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-k` | `kill-line` | Kill from cursor to end of line (Supports `C-u n`) | 行末までキルします（`C-u n` で回数指定が可能） |
| `C-w` | `kill-region` | Kill the selected region (with `kill-region-dwim` enabled, kills the previous word when no region is selected) | 選択範囲をキルします（`kill-region-dwim` が有効なときは、選択範囲が無い場合に直前の単語をキルします） |
| `M-w` | `kill-ring-save` | Copy the selected region (or current line) to kill ring (with `kill-ring-deindent-mode` enabled, the copied text is deindented by the column it starts at) | 選択範囲（または現在行）をコピーします（`kill-ring-deindent-mode` が有効なときは、コピーしたテキストが開始桁ぶん浅くなります） |
| `C-y` | `yank` | Paste from the kill ring (Supports `C-u n` for repeat, max 1000) | キルリングから貼り付け（ヤンク）します（`C-u n` で回数指定が可能、最大 1000 回） |
| `M-y` | `yank-pop` | Cycle through previous kills | キルリングを遡って貼り付けます |
| `M-x` | `kill-whole-line` | Kill the whole line (including newline) | 行全体（改行を含む）をキルします |
| `M-d` | `kill-word` | Kill word forward | 次の単語をキルします |
| `M-Backspace` | `backward-kill-word` | Kill word backward | 前の単語をキルします |
| `M-z` | `zap-to-char` | Kill through the next occurrence of a character you type (`C-u n` for the n-th, negative to search backward) | 次に入力した文字が現れるところまで、その文字を含めてキルします（`C-u n` で n 個目、負の値で手前を検索） |
| `M-Z` | `zap-up-to-char` | Same as `M-z` but stops just before the character | `M-z` と同じですが、その文字の手前で止めます |
| `M-k` | `kill-sentence` | Kill from cursor to end of sentence | 文末（句読点や行末）までキルします |
| `C-c C-k` | `kill-line-save` | Save from point to end of line (elecxzy original) | 行末（または改行）までを消さずに保存します（オリジナル） |

### Mark & Region / マークと選択範囲
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-SPC` | `set-mark-command` | Set mark at current position | 現在位置にマークをセットします |
| `C-u C-SPC` | `set-mark-command` | Pop mark from mark ring (with argument) | マークリングから位置を復元してジャンプします |
| `C-x C-x` | `exchange-point-and-mark` | Swap cursor and mark positions | カーソルとマークの位置を入れ替えます |
| `C-x h` | `mark-whole-buffer` | Mark the whole buffer | バッファ全体（全文）を選択します |
| `C-=` | `expand-region` | Expand region incrementally | 選択範囲を段階的に拡大します |
| `C-- C-=` | `contract-region` | Contract region to previous state | 選択範囲を段階的に縮小します |
| `Shift + arrow` | — | Start or extend selection toward the arrow direction. Note: selection is NOT cleared by pressing a plain (unshifted) arrow afterwards — use `C-g` or `C-SPC C-SPC` to deactivate the region explicitly. | Shift + 矢印キーで選択を開始・拡張します。一般的なエディタと異なり、選択中に Shift なしの矢印キーを押しても選択は解除されません。明示的に解除するには `C-g` または `C-SPC C-SPC` を使用してください。 |

### Case, Transpose & Join / 大文字小文字・入れ替え・連結
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-u` | `upcase-word` | Uppercase from cursor to end of word | 単語を大文字にします |
| `M-l` | `downcase-word` | Lowercase from cursor to end of word | 単語を小文字にします |
| `M-c` | `capitalize-word` | Capitalize first letter of word | 単語の先頭を大文字にします |
| `C-q` | `quoted-insert` | Insert the next key as a literal character, so `C-q Tab` types a real tab (`Tab` on its own inserts spaces) | 次に押したキーをそのまま文字として挿入します。`C-q Tab` で本物のタブ文字を入力できます（`Tab` 単体はスペースを挿入します） |
| `C-t` | `transpose-chars` | Swap characters around cursor | 文字を入れ替えます |
| `M-t` | `transpose-words` | Swap words around cursor | 単語を入れ替えます |
| `C-x C-t` | `transpose-lines` | Swap the current line with the previous one | 現在の行を前の行と入れ替えます |
| `M-x` | `transpose-sentences` | Swap the current sentence with the previous one | 現在の文を前の文と入れ替えます |
| `M-x` | `transpose-paragraphs` | Swap the current paragraph with the previous one | 現在の段落を前の段落と入れ替えます |
| `M-^` | `join-line` | Join current line with the next one | 現在の行を次の行と結合します（CJK文字間以外はスペースを挿入） |

### Duplicate, Sort & Align / 複製・ソート・整列
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c l` | `duplicate-dwim` | Duplicate the region, or the current line when nothing is selected; in rectangle mark mode the rectangle is duplicated to its right (`C-u n` for `n` copies, does not affect kill ring) | 選択範囲を、選択が無ければ現在の行を複製します。矩形マークモードでは矩形をその右隣に複製します（`C-u n` で `n` 個、キルリングは変更しません） |
| `M-x` | `duplicate-line` | Duplicate current line below regardless of the selection (`C-u n` for `n` copies, does not affect kill ring) | 選択の有無にかかわらず現在の行を次の行に複製します（`C-u n` で `n` 個、キルリングは変更しません） |
| `M-x` | `sort-lines` | Sort lines in region alphabetically | 選択範囲内の行をアルファベット順にソートします |
| `C-u M-x` | `sort-lines` | Sort lines in reverse order | 逆順（降順）で行をソートします |
| `M-x` | `delete-duplicate-lines` | Delete duplicate lines in the region, keeping the first of each | 選択範囲の重複行を削除し、同じ行のうち最初の 1 つだけを残します |
| `C-u M-x` | `delete-duplicate-lines` | Keep the last of each instead of the first | 最初ではなく最後の 1 つを残します |
| `C-u C-u M-x` | `delete-duplicate-lines` | Delete only adjacent duplicates (like `uniq`) | 隣り合った重複だけを削除します（`uniq` 相当） |
| `C-u C-u C-u M-x` | `delete-duplicate-lines` | Keep blank lines even when they are duplicated | 空行は重複していても残します |
| `M-x` | `align-regexp` | Align the lines in the region so that the first match of a regexp you enter starts at the same column (e.g. `=`, `:`, `//`) | 入力した正規表現の最初のマッチが同じ桁に来るよう、選択範囲の行を揃えます（`=`、`:`、`//` など） |

### Indent & Comment / インデントとコメント
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-M-\` | `indent-region` | Re-indent the region. Brace-based languages only (JavaScript, TypeScript, C/C++, C#, Java, Go, Rust, JSON, CSS, …); other modes are left untouched | 選択範囲を再インデントします。対象はブレースで階層を作る言語のみ（JavaScript、TypeScript、C/C++、C#、Java、Go、Rust、JSON、CSS など）。それ以外のモードでは何もしません |
| `M-x` | `indent-buffer` | Re-indent the whole buffer, with the same language limits as `indent-region` | バッファ全体を再インデントします。対象言語の条件は `indent-region` と同じです |
| `C-x TAB` | `indent-rigidly` | Indent rigidly (interactive) | 選択範囲を左右にスライド（シフト）させます |
| `M-;` | `comment-dwim` | Comment / uncomment region | 選択範囲のコメント状態を切り替えます |
| `C-x C-;` | `comment-line` | Comment / uncomment whole lines and move to the next one, so repeating it works through a block (`C-u n` for `n` lines, negative to go upwards). With a selection, every line the selection touches is toggled — including the line it ends on, unlike `M-;` — and the cursor is not moved | 行全体のコメント状態を切り替え、次の行へ移動します（連打でブロックを処理できます。`C-u n` で n 行、負の値で上方向）。選択範囲があるときは、選択が掛かった行をすべて切り替え（`M-;` と違い、選択が終わる行も含みます）、カーソルは動かしません |
| `M-x` | `comment-region` | Comment lines in region | 選択範囲をコメント化します |
| `M-x` | `uncomment-region` | Uncomment lines in region | 選択範囲のコメントを解除します |

### Fill & Wrap / 折り返しと整形
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-q` | `fill-paragraph` | Fill paragraph matching wrap column | 段落を折り返し幅に合わせて整形(ハードラップ)します |
| `M-Q` | `unfill-paragraph` | Unfill paragraph (join into a single line) | ハードラップされた段落を1行に連結します（M-qの逆） |
| `C-x f` | `set-wrap-column` | Set the wrap column (`C-u` uses the current column, `C-u n` uses n) | 折り返し桁を設定します (`C-u` は現在の桁、`C-u n` は n) |
| `M-x` | `auto-fill-mode` | Toggle auto-fill-mode | 自動改行モード (Auto Fill Mode) を切り替えます |

### Replace & Count / 置換とカウント
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `replace-string` | Replace string from cursor to end | 現在位置から末尾まで文字列を置換します |
| `M-x` | `replace-string-buffer` | Replace string in entire buffer | バッファ全体の文字列を置換します |
| `M-x` | `replace-string-region` | Replace string in selected region | 選択範囲内の文字列を置換します |
| `M-=` | `count-words-region` | Count words, characters, and lines in region | 選択範囲の単語数、文字数、行数をカウントします |
| `M-x` | `count-words-buffer` | Count words, characters, and lines in buffer | バッファ全体の単語数、文字数、行数をカウントします |

> Interactive search and replace is `query-replace` (`M-%`), listed under [Search & Replace](#search--replace--検索と置換). / 対話的な検索・置換は [Search & Replace](#search--replace--検索と置換) の `query-replace`（`M-%`）です。

### Undo & Redo / アンドゥ・リドゥ
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-/` / `C-_` | `undo` | Undo the last action | 直前の操作を取り消します |
| `M-_` | `redo` | Redo the last undone action | 取り消した操作をやり直します |
| `M-x` | `playback-history` | Animate the current buffer's edit history. Rewinds to the oldest state and then redoes step-by-step back to the current state. Press any key or click to abort (jumps directly to the latest state). | 現在のバッファの編集履歴をアニメーション再生します。先頭まで一気に Undo してから、現在地まで段階的に Redo します。任意のキー入力やクリックで中断（最新状態に即座に復帰）。 |
| `C-u M-x` | `playback-history` | Faster playback (10ms interval) | 高速再生（10ms 間隔） |
| `C-u C-u M-x` | `playback-history` | Fastest playback (1ms interval; browser may clamp to ~4ms) | 超高速再生（1ms 間隔。ブラウザの仕様で実効値は約 4ms 以上） |
| `C-u <n> M-x` | `playback-history` | Playback with explicit `<n>` ms interval (max 1000ms) | `<n>` ミリ秒間隔で再生（上限 1000ms） |

> [!NOTE]
> Playback engages a read-only guard on the target buffer for the duration of the animation, so auto-save, MCP writes, and external drag-and-drop cannot corrupt intermediate states. The buffer always returns to its original state on completion or abort.
>
> プレイバック中はバッファに読み取り専用ガードがかかり、オートセーブ、MCP からの書き込み、外部ファイルのドラッグ&ドロップ等が中間状態に干渉しないよう保護されます。完了時／中断時のいずれも、バッファは必ず開始時の状態に復帰します。

> The Undo History Sidebar (`C-c u`) shows the same history as a list. / Undo 履歴サイドバー（`C-c u`）では同じ履歴を一覧から選べます。

### Completion / 補完
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-/` | `dabbrev-expand` | Dynamic word completion (repeat to cycle candidates) | 動的な単語補完 (dabbrev) を実行します（繰り返すと候補を巡回します） |
| `Tab` | — | Accept the inline completion preview when it is visible (otherwise inserts spaces). Requires `M-x completion-preview-mode` | 補完プレビューが表示されているとき、その候補を確定します（表示されていなければ従来どおりスペースを挿入）。`M-x completion-preview-mode` が必要です |

### Registers / レジスタ
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x r s` | `copy-to-register` | Copy region to register | 選択範囲をレジスタに保存します |
| `C-x r i` | `insert-register` | Insert contents of register | レジスタの内容を挿入します |
| `C-x r SPC` | `point-to-register` | Store current position in register | 現在のカーソル位置をレジスタに保存します |
| `C-x r j` | `jump-to-register` | Jump to position / restore layout stored in register | レジスタに保存された位置へジャンプ、またはウィンドウレイアウトを復元します |
| `C-x r w` | `window-configuration-to-register` | Save current window layout to register | 現在のウィンドウレイアウトをレジスタに保存します |

> Registers are kept across sessions. `C-c r` opens the Register Sidebar. / レジスタはセッションをまたいで保持されます。`C-c r` でレジスタ・サイドバーを開けます。

### Rectangles / 矩形操作
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x SPC` | `rectangle-mark-mode` | Toggle rectangle mark mode | 矩形選択モードを切り替えます |
| `C-x r k` | `kill-rectangle` | Kill the rectangle defined by mark and point | マークとカーソル間の矩形領域をキルします |
| `C-x r y` | `yank-rectangle` | Yank the last killed rectangle at cursor position | キルした矩形をカーソル位置にヤンク（貼り付け）します |
| `C-x r t` | `string-rectangle` | Replace rectangle contents with a string | 矩形領域の内容を指定した文字列で置換します |

### Keyboard Macros / キーボードマクロ
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x (` | `start-kbd-macro` | Start defining a lightweight cursor-based macro | 簡易的なカーソルベースマクロの記録を開始します |
| `C-x )` | `end-kbd-macro` | Stop defining a lightweight cursor-based macro | 簡易的なカーソルベースマクロの記録を終了します |
| `C-x e` | `call-last-kbd-macro` | Execute the last defined lightweight cursor-based macro (Supports `C-u n` for repeat) | 最後に記録した簡易的なカーソルベースマクロを実行します（`C-u n` で回数指定が可能） |

### Input Method / 入力メソッド
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-\` | — | Toggle IME (Input Method Editor) | IME（日本語入力）のON/OFFを切り替えます |

## Navigation & Search / 移動と検索

### Moving the Cursor / カーソル移動
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-f` / `Right` | `forward-char` | Move cursor forward one character | カーソルを右に1文字移動します |
| `C-b` / `Left` | `backward-char` | Move cursor backward one character | カーソルを左に1文字移動します |
| `C-n` / `Down` | `next-line` | Move cursor to the next line | 次の行に移動します |
| `C-p` / `Up` | `previous-line` | Move cursor to the previous line | 前の行に移動します |
| `C-a` / `Home` | `beginning-of-line` | Move to the beginning of the line | 行頭に移動します |
| `C-e` / `End` | `end-of-line` | Move to the end of the line | 行末に移動します |
| `M-m` | `back-to-indentation` | Move to the first non-whitespace character of the line | 行頭の空白を飛ばして、最初の中身のある文字へ移動します |
| `M-f` | `word-forward` | Move forward one word | 1単語分右に移動します |
| `M-b` | `word-backward` | Move backward one word | 1単語分左に移動します |
| `M-a` | `backward-sentence` | Move backward to start of sentence | 文の先頭（または前の文）に移動します |
| `M-e` | `forward-sentence` | Move forward to end of sentence | 文の末尾（句読点や行末）に移動します |
| `M-<` | `beginning-of-buffer` | Move to the beginning of the buffer | バッファの先頭に移動します |
| `M->` | `end-of-buffer` | Move to the end of the buffer | バッファの末尾に移動します |

### Scrolling & Recentering / スクロールと再配置
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-v` | `scroll-up-command` | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | `scroll-down-command` | Scroll up one page | 1ページ分上にスクロールします |
| `C-M-v` | `scroll-other-window` | Scroll the other pane down one page without leaving the current one (`C-u n` for `n` lines, negative to scroll the other way) | フォーカスを移さずに隣のペインを1ページ分下にスクロールします（`C-u n` で n 行、負の値で逆方向） |
| `C-M-V` | `scroll-other-window-down` | Same as `C-M-v` but scrolls the other pane up | `C-M-v` と同じですが、隣のペインを上にスクロールします |
| `C-l` | `recenter` | Recenter the cursor (center of window) | カーソル位置が中心になるよう画面を再配置します |
| `C-u 0 C-l` | `recenter` | Scroll so cursor is at the top of the window | カーソル行を画面の一番上に配置します |
| `C-u -1 C-l` | `recenter` | Scroll so cursor is at the bottom of the window | カーソル行を画面の一番下に配置します |
| `C-u n C-l` | `recenter` | Scroll so cursor is at the n-th line from the top | カーソル行を画面上から n 行目に配置します |

### Jumping / ジャンプ
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-g` | `goto-line` | Jump to a specific line number | 指定した行番号へジャンプします |
| `M-x` | `goto-char` | Jump to a character position from the start (newlines count as 1) | バッファ先頭からの文字数（改行は1文字としてカウント）へジャンプします |
| `M-x` | `move-to-column` | Move to a specific column on the current line | 現在の行の指定したカラムに移動します |
| `C-'` | `avy-goto-char-timer` | Jump to visible text using character labels (Can be used during isearch to jump with current query) | 画面上の文字（単語境界）へラベルを入力して高速にジャンプします (C-s/C-r の最中に実行すると現在の検索クエリを引き継いでジャンプします) |
| `C-;` | `show-line-expansion` | Show full text of the truncated line in an overlay (also triggered by clicking the `...` indicator). When text is selected, it pops up the selection instead. | 右端で切れた行をポップアップ表示します（`...` インジケーターのクリックでも実行可能）。また、選択範囲がある場合はその内容を表示します。 |

### Search & Replace / 検索と置換
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-s` | `isearch-forward` | Incremental search forward (Supports `C-'` to trigger Avy jump) | 前方インクリメンタル検索を開始します (`C-'` で Avy ジャンプへ移行可能) |
| `C-r` | `isearch-backward` | Incremental search backward (Supports `C-'` to trigger Avy jump) | 後方インクリメンタル検索を開始します (`C-'` で Avy ジャンプへ移行可能) |
| `M-%` | `query-replace` | Interactive search and replace | 対話的な文字列置換（y/n/!/q）を実行します |
| `M-s o` | `occur` | List every line in the current buffer matching a string into an `*Occur*` buffer (`Enter` jumps to the line under the cursor) | 現在のバッファ内で一致する行を `*Occur*` バッファに一覧表示します（`Enter` でカーソル行に対応する行へジャンプ） |
| `M-s l` | `consult-line` | Narrow the buffer's lines live in the minibuffer and jump (space-separated AND search, `C-n`/`C-p` to move with live preview, `Enter` to jump, `C-g` to return, `C-'` to hand off to Avy; shows up to 300 candidates at a time; also works in Markdown / HTML / Text previews, where it scrolls the preview to the matching line) | バッファの行をミニバッファでライブ絞り込みしてジャンプします（空白区切りの AND 検索、`C-n`/`C-p` で候補移動＝その場でプレビュー、`Enter` で確定、`C-g` で元の位置に復帰、`C-'` で Avy へ移行。候補表示は一度に最大 300 件。Markdown / HTML / Text プレビューでも使えます＝該当行までプレビューをスクロールします） |
| `M-x` | `grep` | Run grep to search files in directory (`Enter` jumps to the file and line under the cursor) | ディレクトリ内の複数ファイルをまたいで文字列検索（Grep）を行います（`Enter` でカーソル行に対応するファイル・行へジャンプ） |

## Windows & Buffers / ウィンドウとバッファ

### Splitting & Resizing / 分割とサイズ変更
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x 2` | `split-window-below` | Split window horizontally | ウィンドウを上下に分割します |
| `C-x 3` | `split-window-right` | Split window vertically | ウィンドウを左右に分割します |
| `C-x 0` | `delete-window` | Close the current window | 現在のウィンドウを閉じます |
| `C-x 1` | `delete-other-windows` | Close all other windows | 他のウィンドウを閉じます |
| `C-x o` / `M-o` | `other-window` | Switch focus to another window | 他のウィンドウに移動します |
| `C-x 4 f` | `find-file-other-window` | Open a file in the other window, splitting when there is only one | ファイルを隣のウィンドウで開きます（1つしか無ければ分割します） |
| `C-x 4 b` | `switch-to-buffer-other-window` | Show a buffer in the other window, splitting when there is only one | バッファを隣のウィンドウで表示します（1つしか無ければ分割します） |
| `C-x 4 0` | `kill-buffer-and-window` | Close the current window and kill the buffer it was showing | 現在のウィンドウを閉じ、表示していたバッファも削除します |
| `C-x ^` | `enlarge-window` | Enlarge window vertically | ウィンドウを垂直方向に拡大します |
| `C-x -` | `shrink-window` | Shrink window vertically | ウィンドウを垂直方向に縮小します |
| `C-x }` | `enlarge-window-horizontally` | Enlarge window horizontally | ウィンドウを水平方向に拡大します |
| `C-x {` | `shrink-window-horizontally` | Shrink window horizontally | ウィンドウを水平方向に縮小します |
| `C-x +` | `balance-windows` | Balance all window sizes | すべてのウィンドウのサイズを均等にします |

### Rearranging Layouts / レイアウトの並べ替え
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x w t` | `window-layout-transpose` | Transpose layout: swap row/column orientation throughout the tree | レイアウトを転置：すべての分割の縦横を入れ替えます |
| `C-x w f` | `window-layout-flip-leftright` | Mirror horizontal splits left ↔ right | 左右に並んだ分割を反転します |
| `C-x w v` | `window-layout-flip-topdown` | Mirror vertical splits top ↔ bottom | 上下に並んだ分割を反転します |
| `C-x w r Right` | `window-layout-rotate-clockwise` | Rotate the entire window layout 90° clockwise | ウィンドウレイアウト全体を時計回りに 90° 回転します |
| `C-x w r Left` | `window-layout-rotate-anticlockwise` | Rotate the entire window layout 90° counter-clockwise | ウィンドウレイアウト全体を反時計回りに 90° 回転します |
| `C-x w o Right` | `rotate-windows` | Cyclically rotate buffer contents through panes forward in tree-order; the active pane follows its buffer | バッファ内容をペイン間で前向きに循環シフトします。アクティブペインは自分のバッファを追って移動します |
| `C-x w o Left` | `rotate-windows-back` | Same as above but backward through tree-order | 同上、ただし後ろ向きに循環シフトします |
| `C-c Left` | `winner-undo` | Restore the previous window layout — undoes a split, close, resize or reshape | 直前のウィンドウ構成に戻します（分割・クローズ・サイズ変更・並べ替えを取り消せます） |
| `C-c Right` | `winner-redo` | Redo the window layout undone by `winner-undo` | `winner-undo` で戻した構成をやり直します |

### Buffers & Tabs / バッファとタブ
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x b` | `switch-to-buffer` | Switch to another buffer | バッファを切り替えます（補完候補あり） |
| `C-x C-b` | `list-buffers` | Show a list of all open buffers | バッファ一覧を表示します |
| `C-x k` | `kill-buffer` | Close the current buffer | バッファを閉じます |
| `C-Tab` | `next-tab` | Switch to the next tab in tab order (only while the file tab bar is shown) | タブ順で次のタブに切り替えます（ファイルタブ表示中のみ） |
| `C-S-Tab` | `previous-tab` | Switch to the previous tab in tab order (only while the file tab bar is shown) | タブ順で前のタブに切り替えます（ファイルタブ表示中のみ） |
| `M-x` | `scratch-buffer` | Switch to `*scratch*`, creating it if it does not exist | `*scratch*` バッファに切り替えます（存在しなければ新規作成） |

Keys inside the buffer list (`C-x C-b`): / バッファ一覧（`C-x C-b`）の中で使えるキー:

| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `f` | `buffer-menu-execute` | Switch to the buffer under cursor | カーソル位置のバッファに切り替えます（バッファ一覧にて） |
| `q` | `keyboard-quit` | Quit buffer list | バッファ一覧を閉じます |

## Sidebars / サイドバー

Sidebars share one set of navigation keys. Each section below lists only the keys unique to that sidebar. / サイドバーの移動キーは共通です。以下の各節には、そのサイドバー固有のキーだけを記載しています。

### Common Keys / 共通キー
| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `C-n` / `j` / `n` | Move focus down | フォーカスを下に移動します |
| `C-p` / `k` / `p` | Move focus up | フォーカスを上に移動します |
| `C-v` | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | Scroll up one page | 1ページ分上にスクロールします |
| `M-<` | Jump to the beginning of the list | 一覧の先頭に移動します |
| `M->` | Jump to the end of the list | 一覧の末尾に移動します |
| `C-l` | Recenter the focused item | フォーカス項目が中心になるよう画面を再配置します |
| `C-g` / `C-q` / `q` / `Esc` | Close the sidebar | サイドバーを閉じます |

Exceptions / 例外:

- **Kill Ring, Registers, Undo History** — `b` also closes the sidebar. / `b` でも閉じられます。
- **Git** — moves with `C-n` / `n` / `Down` and `C-p` / `p` / `Up` (no `j` / `k`), scrolls with `C-v` / `M-v`, jumps with `M-<` / `M->`, has no `C-l`, and closes with `C-g` / `q` / `Esc`. / 移動は `C-n` / `n` / `Down`、`C-p` / `p` / `Up`（`j` / `k` は非対応）、スクロールは `C-v` / `M-v`、先頭・末尾は `M-<` / `M->`、`C-l` は非対応、閉じるのは `C-g` / `q` / `Esc` です。
- **Settings** — closes with `C-g` / `C-q` / `Esc` or a right click on the backdrop. / 閉じるのは `C-g` / `C-q` / `Esc`、または背景の右クリックです。

### Filer / ファイラ
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x d` / `C-c d` | `toggle-sidebar` | Toggle the Filer Sidebar | ファイラ・サイドバーを開閉します |
| `M-x` | `set-current-directory` | Change root to a specific directory | 指定したディレクトリをルートに設定します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `Click` / `f` | Open file | ファイルを開きます |
| `Space` / `Tab` / `C-f` / `l` / `Right` | Expand folder / Move to child / Preview file | フォルダを展開・子階層へ移動 / ファイルをプレビュー（閉じない）します |
| `C-b` / `h` / `b` / `Left` | Collapse folder / Move to parent | フォルダを折り畳む / 親階層へ移動します |
| `u` | Change root to parent directory | 1つ上の親フォルダをルート階層に設定します |
| `r` | Jump to root / drives | システムドライブルート（または`/`）へジャンプします |
| `g` | Reload tree | ツリー（ディレクトリ情報）を最新状態に再読み込みします |
| `d` | Move file/folder to trash | 選択中のファイルをゴミ箱へ移動、またはフォルダを再帰的にゴミ箱へ移動します |
| `c` | Create new file | 選択中のフォルダ内に新しい空ファイルを作成します |
| `C` (Shift+`c`) | Create new folder | 選択中のフォルダ内に新しいフォルダを作成します |
| `R` (Shift+`r`) | Rename selected file/folder | 選択中のファイル・フォルダの名前を変更します（ミニバッファに現在の名前が表示されます） |
| `m` | Toggle bookmark for the focused file | フォーカス中のファイルをブックマーク (ピン止め) します／解除します（ディレクトリ行では無視されます） |
| `e` | Reveal location in file manager (Explorer/Finder) | フォーカス中のファイル／フォルダの場所をエクスプローラ（ファイルマネージャ）で表示します（ドライブ一覧では無視されます） |

### Workspace / ワークスペース
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c w` / `C-,` | `toggle-workspace-sidebar` | Toggle Workspace Sidebar | ワークスペースサイドバーを開閉します |
| `M-x` | `open-workspace` | Open a VS Code .code-workspace file | VS Code形式のワークスペースファイルを開きます |
| `M-x` | `save-workspace` | Save current workspace | ワークスペースを上書き保存します |
| `M-x` | `save-workspace-as` | Save workspace as... | ワークスペースを名前を付けて保存します |
| `C-c a` | `add-folder-to-workspace` | Add a folder to current workspace | フォルダをワークスペースに追加します |
| `M-x` | `close-workspace` | Close current workspace | ワークスペースを閉じます |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `Click` / `f` | Open file | ファイルを開きます |
| `Space` / `Tab` / `C-f` / `l` / `Right` | Expand folder / Move to child / Preview file | フォルダを展開・子階層へ移動 / ファイルをプレビュー（閉じない）します |
| `C-b` / `h` / `b` / `Left` | Collapse folder / Move to parent | フォルダを折り畳む / 親階層へ移動します |
| `Drag & Drop Folder` | Add folder to workspace | フォルダをサイドバーにドロップして追加します |
| `a` | Add folder to workspace | フォルダをワークスペースに追加します |
| `g` | Reload tree | ツリー（ディレクトリ情報）を最新状態に再読み込みします |
| `d` | Remove root / Move to trash | ルートフォルダをワークスペースから除去、または実ファイルをゴミ箱へ移動します |
| `c` | Create new file | 選択中のフォルダ内に新しい空ファイルを作成します |
| `C` (Shift+`c`) | Create new folder | 選択中のフォルダ内に新しいフォルダを作成します |
| `R` (Shift+`r`) | Rename selected file/folder | 選択中のファイル・フォルダの名前を変更します（ミニバッファに現在の名前が表示されます） |
| `m` | Toggle bookmark for the focused file | フォーカス中のファイルをブックマーク (ピン止め) します／解除します（ディレクトリ行・root では無視されます） |
| `e` | Reveal location in file manager (Explorer/Finder) | フォーカス中のファイル／フォルダ（root 含む）の場所をエクスプローラ（ファイルマネージャ）で表示します（missing 行では無視されます） |
| `Q` | Close workspace | ワークスペースを閉じます |

### Recent Files / 最近使ったファイル
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c c` | `browse-recent-files` | Toggle the Recent Files Sidebar | 最近使ったファイル・サイドバーを開閉します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Open file | ファイルを開きます |
| `Space` / `Tab` / `C-f` / `l` / `Right` | Preview file | ファイルをプレビュー（閉じない）します |
| `m` | Toggle bookmark for the focused file | フォーカス中のファイルをブックマーク (ピン止め) します／解除します |
| `e` | Reveal location in file manager (Explorer/Finder) | フォーカス中のファイルの場所をエクスプローラ（ファイルマネージャ）で表示します |

### Bookmarks / ブックマーク
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c b` / `C-x r l` | `bookmark-bmenu-list` / `browse-bookmarks` | Open Bookmark Sidebar (Emacs compatible) | ブックマーク・サイドバーを開閉します (Emacs 互換) |
| `C-x r m` | `bookmark-set` | Bookmark the current file (no-op + echo if already bookmarked, Emacs compatible) | 現在開いているファイルをブックマークします (既に登録済みならミニバッファ通知のみ、Emacs 互換) |
| `M-x` | `bookmark-toggle` | Toggle bookmark for the current file | 現在開いているファイルをブックマーク (ピン止め) します／解除します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Open file | ファイルを開きます (`.code-workspace` はワークスペースとして開きます) |
| `Space` / `Tab` / `C-f` / `l` / `Right` | Preview file | ファイルをプレビュー（閉じない）します |
| `m` | Remove bookmark | フォーカス中のブックマークを解除します |
| `e` | Reveal location in file manager (Explorer/Finder) | フォーカス中のファイルの場所をエクスプローラ（ファイルマネージャ）で表示します |

### Git
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c g` | `toggle-git-sidebar` | Toggle the Git (Source Control) Sidebar | Git（ソース管理）サイドバーを開閉します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Expand section/commit, or open the focused file's full-file diff (whole file as context) | セクション・コミットを展開、またはフォーカス中ファイルの差分をファイル全体（全行を文脈として）表示します |
| `Space` / `Tab` / `l` / `Right` | Expand section/commit, or preview the focused file's diff (compact, with a few lines of context) | セクション・コミットを展開、またはフォーカス中ファイルの差分をプレビュー（前後数行のコンパクト表示）します |
| `C-b` / `h` / `b` / `Left` | Collapse section/commit / Move to parent | セクション・コミットを折り畳む / 親へ移動します |
| `c` | Focus the commit message box | コミットメッセージ入力欄にフォーカスします |
| `Ctrl+Enter` | Commit all changes (`git add -A` + commit) | 全変更を一括コミットします（`git add -A` + commit） |
| `Ctrl+Shift+Enter` | Commit all changes and push (publishes a branch with no upstream, like VS Code) | 全変更を一括コミットして push します（upstream 未設定のブランチは VS Code 同様 publish します） |
| `C-y` | Yank (paste from clipboard if integration is on, else kill ring) | ヤンク（クリップボード連携が有効ならクリップボード、無効ならキルリングから貼り付け） |
| `P` | Push to remote; publishes the branch (`push -u origin`) when it has no upstream, like VS Code (disabled on a detached HEAD) | リモートへ push します（upstream 未設定のブランチは VS Code 同様 `push -u origin` で publish。detached HEAD では無効） |
| `F` | Pull from remote (disabled when the branch has no upstream) | リモートから pull します（upstream 未設定のブランチでは無効） |
| `R` | Discard the focused file's changes: restore a tracked file to HEAD (cannot be undone), or move an untracked file to the trash; asks for y/n confirmation | フォーカス中の変更ファイルを破棄します（tracked は HEAD へ復元＝取り消し不可、未トラックはゴミ箱へ移動。y/n 確認あり） |
| `t` | Create a lightweight tag at HEAD, named after the text in the message box | メッセージ欄のテキストを名前にした軽量タグを HEAD に作成します |
| `T` | Push all tags to the remote (`git push --tags`) | すべてのタグをリモートへ push します（`git push --tags`） |
| `g` | Reload git status & history | Git の状態と履歴を最新に再取得します |

### Outline / アウトライン
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c o` | `outline-view` | Toggle the Outline Sidebar (parses up to 50,000 lines) | アウトライン・サイドバーを開閉します（50,000 行まで解析） |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Jump to heading & Close | 見出しへジャンプして閉じます |
| `Space` / `Tab` / `C-f` / `l` / `Right` | Expand heading / Move to child | 見出しを展開 / 子要素へ移動します |

### Kill Ring / キルリング
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c y` | `browse-kill-ring` | Toggle the Kill Ring Sidebar | キルリング・サイドバーを開閉します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Insert selected text & Close | 選択したテキストを挿入して閉じます |

### Register List / レジスタ一覧
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c r` | `browse-registers` | Toggle the Register Sidebar | レジスタ・サイドバーを開閉します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Jump/Insert from register & Close | レジスタの内容へジャンプまたは挿入して閉じます |

### Undo History / Undo 履歴
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c u` | `browse-undo-history` | Toggle the Undo History Sidebar | Undo 履歴サイドバーを開閉します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `Enter` / `f` | Undo to the selected entry (inclusive) & Close | 選択した項目までまとめて Undo して閉じます（その項目自体も Undo されます） |

> [!NOTE]
> Multiple undos performed via the sidebar are merged into a single redo transaction, so a single `C-/` (or `M-_`) restores everything in one step (Office-style behavior).
>
> サイドバー経由でまとめて Undo した操作は 1 つの Redo トランザクションに統合されるため、`C-/`（または `M-_`）の Redo 1 回で一括復元できます（Word/Excel と同様の挙動）。

### Settings Sidebar / 設定サイドバー
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c s` / `C-.` | `open-config` | Toggle the Settings Sidebar | 設定サイドバーを開閉します |

Keys inside the sidebar: / サイドバー内で使えるキー:

| Keys / キー | Action (English) | 操作 (日本語) |
|:---|:---|:---|
| `C-g` / `C-q` / `Esc` | Save & Close sidebar | 設定を保存して閉じます |
| `Right Click` (Backdrop) | Save & Close sidebar | 背景の右クリックで閉じます |

## Modes & Preview / モードとプレビュー

### Major Modes / メジャーモード

A major mode decides how the buffer is syntax-highlighted and outlined. It is chosen from the file extension when a file is opened, and `M-x set-highlight-mode` changes it for the current buffer. Every mode below can also be invoked directly by name, e.g. `M-x python-mode`. / メジャーモードはバッファのシンタックスハイライトやアウトラインの解釈を決めます。ファイルを開くと拡張子から自動的に選ばれ、`M-x set-highlight-mode` で現在のバッファのモードを変更できます。以下のモードは名前を直接指定しても切り替えられます（例: `M-x python-mode`）。

| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `set-highlight-mode` | Set major mode for current buffer (with completion) | 現在のバッファのモードを設定します（補完あり） |

| Group / 分類 | Modes / モード |
|:---|:---|
| Plain text / プレーンテキスト | `fundamental-mode` `text-mode` |
| Programming / プログラミング言語 | `c-mode` `cpp-mode` `csharp-mode` `clojure-mode` `coffee-mode` (= `coffeescript-mode`) `crystal-mode` `dart-mode` `elixir-mode` `emacs-lisp-mode` `erlang-mode` `fsharp-mode` `go-mode` `groovy-mode` `haskell-mode` `java-mode` `javascript-mode` `julia-mode` `kotlin-mode` `lisp-mode` `lua-mode` `nim-mode` `objc-mode` `ocaml-mode` (= `tuareg-mode`) `perl-mode` `php-mode` `python-mode` `r-mode` `ruby-mode` `rust-mode` `scala-mode` `swift-mode` `typescript-mode` |
| Shell & script / シェル・スクリプト | `bash-mode` `bat-mode` `powershell-mode` `vim-mode` |
| Markup & documents / マークアップ・文書 | `markdown-mode` `adoc-mode` (= `asciidoc-mode`) `html-mode` `latex-mode` `svg-mode` `xml-mode` |
| Style sheets / スタイルシート | `css-mode` `less-mode` `sass-mode` `scss-mode` |
| Data & config / データ・設定 | `json-mode` `yaml-mode` `toml-mode` `ini-mode` `conf-mode` `properties-mode` `graphql-mode` `protobuf-mode` `sql-mode` `diff-mode` |
| Build & infrastructure / ビルド・インフラ | `cmake-mode` `makefile-mode` `dockerfile-mode` `nix-mode` `nginx-mode` `apache-mode` |
| Hardware description / ハードウェア記述 | `glsl-mode` `verilog-mode` `vhdl-mode` |

### Preview / プレビュー
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c v` | `preview-dispatch` | Preview current buffer (Markdown/HTML/Text) | 現在のバッファをプレビューします（Markdown/HTML/Text） |
| `M-x` | `preview-html` | Preview current HTML buffer | 現在のHTMLバッファをプレビューします |
| `M-x` | `preview-markdown` | Preview current Markdown buffer | 現在のMarkdownバッファをプレビューします |
| `M-x` | `preview-text` | Preview current text buffer with word-wrap at the window edge | 現在のテキストバッファをウィンドウ幅で折り返してプレビューします |
| `C-c p` | `print-buffer` | Print active buffer | 現在のバッファを印刷します |

### Web (Experimental / 実験的)
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `navigate-url` | Open a URL in a preview buffer. Only `https://` and loopback `http://` (`localhost` / `127.0.0.1` / `[::1]`) are accepted; other schemes (`http://` to remote hosts, `javascript:`, `file:`, `data:`, etc.) are refused with an echo-line message. | 指定したURLをバッファ内で表示します。許可されるのは `https://` とループバック `http://`（`localhost` / `127.0.0.1` / `[::1]`）のみで、それ以外（外部ホストへの `http://`・`javascript:`・`file:`・`data:` 等）は拒否され、エコーラインに案内が表示されます |

## Settings / 設定

`C-c s` (or `C-.`) opens the Settings Sidebar, where the same options can be changed with the mouse. Settings are stored in `config.json`, colors in `color-config.json`. / `C-c s`（または `C-.`）で設定サイドバーを開くと、同じ項目をマウスで変更できます。設定は `config.json`、配色は `color-config.json` に保存されます。

### Themes / テーマ
| Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|
| `set-theme` | Select a color theme with live preview | カラーテーマを一覧から選びます（候補の移動でライブプレビュー、Esc で元に戻ります） |
| `dark-theme` | Set color theme to Dark Mode | カラーテーマをダークモードに設定します |
| `light-theme` | Set color theme to Light Mode | カラーテーマをライトモードに設定します |
| `cyber-theme` | Set color theme to Cyber Mode | カラーテーマをサイバーモードに設定します |
| `cute-theme` | Set color theme to Cute Mode | カラーテーマをキュートモードに設定します |
| `tokyo-night-theme` | Set color theme to Tokyo Night | カラーテーマを Tokyo Night に設定します |
| `rose-pine-dawn-theme` | Set color theme to Rose Pine Dawn | カラーテーマを Rose Pine Dawn に設定します |
| `gruvbox-theme` | Set color theme to Gruvbox | カラーテーマを Gruvbox に設定します |
| `nord-theme` | Set color theme to Nord | カラーテーマを Nord に設定します |
| `forest-theme` | Set color theme to Forest | カラーテーマを Forest に設定します |
| `slate-dark-theme` | Set color theme to Slate Dark | カラーテーマを Slate Dark に設定します |
| `slate-light-theme` | Set color theme to Slate Light | カラーテーマを Slate Light に設定します |
| `default-theme` | Set color theme to default | カラーテーマをデフォルトに戻します |

### Display & Appearance / 表示と外観
| Setting / 設定 | Commands / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| Syntax Highlighting | `font-lock-mode` / `global-font-lock-mode` / `set-font-lock-mode` / `get-font-lock-mode` | Syntax highlighting in every buffer (Emacs `font-lock-mode` compatible) | 全バッファのシンタックスハイライト（Emacs `font-lock-mode` 互換） |
| Matching Brackets | `show-paren-mode` / `set-show-paren-mode` / `get-show-paren-mode` | Highlight of the bracket next to point and its partner (Emacs `show-paren-mode` compatible) | カーソル隣の括弧と対応する括弧のハイライト（Emacs `show-paren-mode` 互換） |
| Current Line Highlight | `hl-line-mode` / `global-hl-line-mode` / `set-hl-line-mode` / `get-hl-line-mode` | Highlight of the line the cursor is on (Emacs `hl-line-mode` compatible) | カーソル行のハイライト（Emacs `hl-line-mode` 互換） |
| Line Numbers | `set-line-number-mode` / `get-line-number-mode` | Line numbers in the gutter (on/off) | 行番号の表示（on/off） |
| File Tab Bar | `toggle-file-tabs` / `show-file-tabs` / `hide-file-tabs` / `get-show-file-tabs` | Tab bar listing open files at the top of the window | ウィンドウ上部に開いているファイルのタブバーを表示 |
| Date & Time | `display-datetime-mode` / `set-display-datetime-format` / `get-display-datetime-format` | Date and time in the modeline, and its format (see [DateTime Format Tokens](#datetime-format-tokens--日時フォーマットトークン)) | モードラインの日時表示と、その書式（[DateTime Format Tokens](#datetime-format-tokens--日時フォーマットトークン) 参照） |
| IME Indicator | `set-show-ime-indicator` / `get-show-ime-indicator` | IME state indicator (on/off/auto) | IME インジケータの表示（on/off/自動判定） |
| Buffer Font | `set-font` / `get-font` | Font of the current buffer only | 現在のバッファだけに適用するフォント |
| Default Font | `set-default-font` / `get-default-font` | Font used when a buffer has no font of its own | バッファ固有の指定が無いときに使われるフォント |
| Font Size | `set-font-size` / `get-font-size` | Font size in points | フォントサイズ |
| Tab Width | `set-tab-width` / `get-tab-width` | Number of columns a tab occupies | タブ 1 文字分の桁数 |
| Wrap Column | `set-wrap-column` / `get-wrap-column` | Column that `fill-paragraph` and Auto Fill Mode wrap at | `fill-paragraph` や Auto Fill Mode が折り返す桁 |

### Editing Behavior / 編集動作
| Setting / 設定 | Commands / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| Auto Fill Mode | `auto-fill-mode` / `set-auto-fill-mode` / `get-auto-fill-mode` | Automatic line break at the wrap column while typing | 入力中に折り返し幅で自動改行するかどうか |
| Electric Pair Mode | `electric-pair-mode` / `set-electric-pair-mode` / `get-electric-pair-mode` | Typing an opening bracket or quote inserts its closing partner, and wraps the region when one is selected (off by default) | 開き括弧やクォートの入力で閉じ文字を自動挿入する（選択範囲があればそれを囲む。デフォルト OFF） |
| Electric Indent Mode | `electric-indent-mode` / `set-electric-indent-mode` / `get-electric-indent-mode` | Enter indents the new line, counting brackets with the same rule as `indent-region`; in Python and YAML a line ending in `:` goes one step deeper (off by default) | Enter で改行したとき新しい行を自動で字下げする（括弧の数え方は `indent-region` と同じ。Python・YAML では行末が `:` の行の次を 1 段深くする。デフォルト OFF） |
| Kill Region DWIM | `kill-region-dwim` / `set-kill-region-dwim` / `get-kill-region-dwim` | `C-w` without a region kills the previous word (Emacs 31.1 compatible) | 選択範囲が無いときの `C-w` で直前の単語をキルする（Emacs 31.1 互換） |
| Kill Ring Deindent Mode | `kill-ring-deindent-mode` / `set-kill-ring-deindent-mode` / `get-kill-ring-deindent-mode` | Killed or copied text is deindented by the column it starts at (Emacs 30.1 compatible) | キル・コピーしたテキストを開始桁ぶん浅くする（Emacs 30.1 互換） |
| Completion Preview Mode | `completion-preview-mode` / `set-completion-preview-mode` / `get-completion-preview-mode` | Ghost suggestion after the cursor while typing, accepted with `Tab` (Emacs 30.1 compatible) | 入力中にカーソル直後へ補完候補をゴースト表示する（`Tab` で確定。Emacs 30.1 互換） |
| Save Place Mode | `save-place-mode` / `set-save-place-mode` / `get-save-place-mode` | Reopening a file returns the cursor to where you left it (on by default) | ファイルを開き直したとき前回のカーソル位置へ戻す（デフォルト ON） |
| Auto Window Prefer Longest Edge | `split-window-prefer-longest` / `set-split-window-prefer-longest` / `get-split-window-prefer-longest` | Automatic splits divide along the longer edge (Emacs 31.1 compatible) | 自動分割で長辺方向を優先する（Emacs 31.1 互換） |
| Case Sensitive Search | `set-case-sensitive-search` / `get-case-sensitive-search` | Whether search distinguishes upper and lower case | 検索で大文字小文字を区別するかどうか |
| Kill Ring Size | `set-kill-ring-max` / `get-kill-ring-max` | Maximum number of entries kept in the kill ring | キルリングの最大保持件数 |
| Undo Limit | `set-max-undo-limit` / `get-max-undo-limit` | Maximum number of undo steps kept per buffer | バッファごとに保持する最大 Undo 回数 |

### Files & Saving / ファイルと保存
| Setting / 設定 | Commands / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| Auto Save | `auto-save` / `set-auto-save` / `get-auto-save` | Periodic automatic saving of modified buffers | 変更したバッファを定期的に自動保存するかどうか |
| Auto Save Interval | `set-auto-save-interval` / `get-auto-save-interval` | Interval between auto-saves, in minutes | オートセーブの間隔（分） |
| Auto Revert (clean buffers) | `set-auto-revert-clean` / `get-auto-revert-clean` | Reload a buffer automatically when the file changes on disk and the buffer has no edits | ディスク上のファイルが変わったとき、未編集のバッファを自動で再読込するかどうか |
| Encoding | `set-encoding` / `get-encoding` | Character encoding used when saving the current buffer | 現在のバッファを保存するときの文字エンコーディング |
| Line Terminator | `set-line-terminator` / `get-line-terminator` | Newline written on save (CRLF/LF/CR) | 保存時の改行コード（CRLF/LF/CR） |
| Current Directory | `set-current-directory` / `get-current-directory` | Working directory used by file prompts, grep and the Filer | ファイル入力・grep・ファイラが基準にするカレントディレクトリ |
| OS Clipboard Integration | `set-clipboard-integration` / `get-clipboard-integration` | Whether kill and yank also use the OS clipboard | キル・ヤンクを OS のクリップボードと連携させるかどうか |
| Run in Background | `set-close-to-tray` / `get-close-to-tray` | Closing the window keeps elecxzy resident in the system tray | ウィンドウを閉じてもトレイに常駐させるかどうか |

### Cursor & Effects / カーソルと演出
| Setting / 設定 | Commands / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| Cursor VFX | `set-cursor-vfx` / `get-cursor-vfx` | Visual effect that follows the cursor. `C-u N` picks the Elenyan cat when Elenyan is selected (1=kitten, 2=black, 3=white) | カーソルに追従する視覚効果。Elenyan 選択時は `C-u N` で猫の種類を選べます（1=子猫、2=黒猫、3=白猫） |
| Macro VFX | `set-macro-vfx` / `get-macro-vfx` | Visual effect shown while a keyboard macro runs | マクロ実行中に表示する視覚効果 |
| Smooth Cursor | `set-smooth-cursor` / `get-smooth-cursor` | Animated cursor movement between positions | カーソル移動を滑らかにアニメーションさせるかどうか |

Each VFX style also has its own command and key: / 各スタイルには専用のコマンドとキーがあります:

| Keys / キー | Command / コマンド | Style / スタイル |
|:---|:---|:---|
| `C-c 0` | `set-cursor-vfx-off` | Off |
| `C-c 1` | `set-cursor-vfx-light-particle` | Light Particle |
| `C-c 2` | `set-cursor-vfx-cyber-trace` | Cyber Trace |
| `C-c 3` | `set-cursor-vfx-prismatic-nova` | Prismatic Nova |
| `C-c 4` | `set-cursor-vfx-arcane-sigil` | Arcane Sigil |
| `C-c 5` | `set-cursor-vfx-inferno-flame` | Inferno Flame |
| `C-c 6` | `set-cursor-vfx-phantom-merge` | Phantom Merge |
| `C-c 7` | `set-cursor-vfx-rubber-slime` | Rubber Slime |
| `C-c 8` | `set-cursor-vfx-quantum-tunnel` | Quantum Tunnel |
| `C-c 9` | `set-cursor-vfx-kawaii-shower` | Kawaii Shower |

### DateTime Format Tokens / 日時フォーマットトークン

Tokens accepted by `set-display-datetime-format`. / `set-display-datetime-format` で使用できるトークンの一覧です。

| Token / トークン | Description / 説明 | Example / 例 |
|:---|:---|:---|
| `YYYY` | 4-digit year / 4桁の年 | 2026 |
| `YY` | 2-digit year / 2桁の年 | 26 |
| `MM` | Month (01-12) / 月 (01-12) | 04 |
| `M` | Month (1-12) / 月 (1-12) | 4 |
| `DD` | Day (01-31) / 日 (01-31) | 09 |
| `D` | Day (1-31) / 日 (1-31) | 9 |
| `HH` | 24-hour hour (00-23) / 24時間制の時 (00-23) | 14 |
| `H` | 24-hour hour (0-23) / 24時間制の時 (0-23) | 14 |
| `hh` | 12-hour hour (01-12) / 12時間制の時 (01-12) | 02 |
| `h` | 12-hour hour (1-12) / 12時間制の時 (1-12) | 2 |
| `mm` | Minute (00-59) / 分 (00-59) | 05 |
| `m` | Minute (0-59) / 分 (0-59) | 5 |
| `ss` | Second (00-59) / 秒 (00-59) | 08 |
| `s` | Second (0-59) / 秒 (0-59) | 8 |
| `a` | AM/PM | PM |

## Integrations / 連携

### Plugins / プラグイン

Drop a TypeScript file in the `plugins` folder (next to `config.json`) that `export default`s an object `{ command, description, execute(input) }` to add your own `M-x` command. Plugins run in an isolated, network-blocked Web Worker. The plugin system is disabled by default — enable it with `M-x enable-plugins`. See README for the authoring guide.

`config.json` と同じ場所の `plugins` フォルダに、`{ command, description, execute(input) }` を default export する TypeScript ファイルを置くと、独自の `M-x` コマンドを追加できます。プラグインは隔離され通信が遮断された Web Worker 内で実行されます。プラグイン機構は既定で無効です — `M-x enable-plugins` で有効化してください。書き方は README を参照してください。

| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `reload-plugins` | Reload plugins from the plugins folder | plugins フォルダからプラグインを再読み込みします |
| `M-x` | `debug-plugins` | Reload plugins and show a per-file load report in a read-only buffer | プラグインを再読み込みし、ファイルごとの読み込み結果を読み取り専用バッファに表示します |
| `M-x` | `open-plugins-folder` | Open the plugins folder in the OS file manager | plugins フォルダを OS のファイルマネージャで開きます |
| `M-x` | `enable-plugins` | Enable the plugin system and (re)load plugins | プラグイン機構を有効化して (再)読み込みします |
| `M-x` | `disable-plugins` | Disable the plugin system and unload plugins | プラグイン機構を無効化してアンロードします |
| `M-x` | `toggle-plugins` | Toggle the plugin system on/off | プラグイン機構の有効/無効を切り替えます |
| `M-x` | `get-enable-plugins` | Show whether the plugin system is enabled | プラグイン機構が有効かどうかを表示します |
| `M-x` | `set-plugin-timeout` | Set the per-plugin execution timeout in seconds (1-60) | プラグイン実行のタイムアウト (秒、1〜60) を設定します |
| `M-x` | `get-plugin-timeout` | Show the current per-plugin execution timeout | 現在のプラグイン実行タイムアウト (秒) を表示します |

### MCP (AI Integration / AI 連携)
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `mcp-start` | Start the internal MCP server. Aborts and shows an echo-line message if `mcpAllowedDirectories` is empty or contains a non-existent path. | 内蔵 MCP サーバーを起動します。`mcpAllowedDirectories` が未設定、または存在しないパスを含む場合は起動を中断し、エコーラインに案内を表示します |
| `M-x` | `mcp-stop` | Stop the internal MCP server | 内蔵 MCP サーバーを停止します |
| `C-c m` | `mcp-toggle` | Toggle the internal MCP server | 内蔵 MCP サーバーの起動・停止を切り替えます |

> [!NOTE]
> The `save_file` MCP tool refuses any target path that is not located under one of the directories listed in `mcpAllowedDirectories` (config.json / Settings → MCP). You must add at least one allowed root before starting the MCP server.
>
> MCP の `save_file` ツールは、`mcpAllowedDirectories`（config.json / 設定サイドバー → MCP）に登録されたいずれかのディレクトリ配下のパスにしか保存できません。MCP サーバを起動する前に、許可ディレクトリを最低 1 件追加してください。

### AI CLI

Send an instruction — and the region, when one is selected — to an external AI CLI and get the answer back. The instruction and the region both travel on standard input, so nothing from the buffer is ever placed on a command line. The answer opens in a read-only Markdown buffer in the other pane, or in the echo area when it is short. Requires the CLI to be installed and on PATH.

指示文を、選択範囲があればそれも添えて、外部の AI CLI へ渡し、答えを受け取ります。指示文も選択範囲も標準入力で渡すため、バッファの内容がコマンドラインに乗ることはありません。答えは隣のペインの読み取り専用 Markdown バッファに開き、短ければエコーラインに表示します。対象の CLI が導入され PATH にあることが前提です。

| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `claude-cli` | Ask Claude Code about the region (`C-u` replaces the region with the answer) | 選択範囲について Claude Code に尋ねます (`C-u` で選択範囲を答えで置き換え) |
| `M-x` | `antigravity-cli` | Ask Antigravity about the region; `agy-cli` is an alias | 選択範囲について Antigravity に尋ねます。`agy-cli` は別名です |
| `M-x` | `set-ai-cli-timeout` | Set the AI CLI timeout in seconds (1-3600) | AI CLI のタイムアウト (秒、1〜3600) を設定します |
| `M-x` | `get-ai-cli-timeout` | Show the current AI CLI timeout | 現在の AI CLI のタイムアウトを表示します |
| `M-x` | `set-ai-cli-confirm-chars` | Set the region size above which sending is confirmed; 0 never asks | 送信前に確認する選択範囲の文字数を設定します。0 で確認しません |
| `M-x` | `get-ai-cli-confirm-chars` | Show the region size above which sending is confirmed | 送信前に確認する文字数を表示します |

> [!NOTE]
> Leaving the instruction empty and pressing `Enter` sends the region itself as the prompt, which suits text that already says what it wants. While an AI CLI is running, the echo area shows the elapsed seconds, and `C-g` cancels the run. A region longer than `aiCliConfirmChars` (20000 by default) asks for confirmation first. The command line each CLI is launched with can be changed with `claudeCliCommand` and `antigravityCliCommand` (config.json / Settings → AI CLI).
>
> 指示文を空のまま `Enter` を押すと、選択範囲そのものをプロンプトとして送ります（やってほしいことが本文に書かれている場合に便利です）。AI CLI の実行中はエコーラインに経過秒数が出て、`C-g` で中断できます。`aiCliConfirmChars` (既定 20000) を超える選択範囲は、送信前に確認します。起動する行は `claudeCliCommand` と `antigravityCliCommand` (config.json / 設定サイドバー → AI CLI) で変更できます。

### Shell / シェル
| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-!` | `shell-command` | Run a one-off shell command; short output goes to the echo area, longer output to `*Shell Command Output*` (`C-u` inserts it at point) | シェルコマンドを1回実行します。短い出力はエコーライン、長い出力は `*Shell Command Output*` に表示します (`C-u` でカーソル位置に挿入) |
| `M-\|` | `shell-command-on-region` | Run a shell command with the region as its standard input (`C-u` replaces the region with the output) | 選択範囲を標準入力としてシェルコマンドを実行します (`C-u` で選択範囲を出力で置き換え) |
| `M-x` | `set-shell-command-timeout` | Set the `M-!` / `M-\|` execution timeout in seconds (1-3600) | `M-!` / `M-\|` のタイムアウト (秒、1〜3600) を設定します |
| `M-x` | `get-shell-command-timeout` | Show the current `M-!` / `M-\|` execution timeout | 現在の `M-!` / `M-\|` のタイムアウト (秒) を表示します |
| `M-x` | `shell` | Run an interactive shell (Emacs comint-mode style) | 対話的なシェル(Emacs comint-mode 風)を起動します |

Keys inside the `*shell*` buffer: / `*shell*` バッファ内で使えるキー:

| Keys / キー | Command / コマンド | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `Enter` | `shell-send-input` | Send current input to the shell process | 現在の入力をシェルプロセスに送信します |
| `C-a` | `shell-bol` | Move to the start of the input (after the prompt) | プロンプト直後 (入力開始位置) へ移動します |
| `M-p` | `shell-previous-input` | Cycle backward through input history | 入力履歴を一つ前へ |
| `M-n` | `shell-next-input` | Cycle forward through input history | 入力履歴を一つ後ろへ |
| `C-c C-c` | `shell-interrupt` | Interrupt the running command (restart cmd.exe) | 実行中のコマンドを中断します (cmd.exe を再起動) |

> [!NOTE]
> The shell buffer (`*shell*`) follows Emacs comint-mode conventions: a per-buffer process mark protects the prompt and scrollback from edits, `Enter` sends from the process mark to the end of the buffer, and input history persists for the lifetime of the buffer. On Windows, `cmd.exe` is launched with `/Q` to suppress command echo. Output is decoded by detecting whether it is UTF-8, so both modern CLIs and legacy console tools read correctly.
>
> `*shell*` 
バッファは Emacs comint-mode の作法に従います。バッファごとのプロセスマークがプロンプトと過去の出力を編集から保護し、`Enter` はプロセスマークからバッファ末尾までを送信します。入力履歴はバッファが生きている間だけ保持されます。Windows では `cmd.exe` を `/Q` 付きで起動してコマンドエコーを抑制しています。出力は UTF-8 かどうかを判定して復号するので、近年の CLI も従来のコンソール道具も正しく読めます。
