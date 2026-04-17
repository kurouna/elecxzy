# **elecxzy** Command List / コマンド一覧

This guide covers the key commands for **elecxzy** by category. To run most of these commands, press M-x (Alt+x) followed by the command name.

このドキュメントでは、**elecxzy** で使用可能な主要なコマンドをセクション別にまとめています。
ほとんどのコマンドは `M-x` (Alt+x) を押してからコマンド名を入力することで実行できます。

## Help & Info (ヘルプ・情報)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x command-list` | `command-list` | Show this command list | コマンド一覧を表示します |
| `M-x license` | `license` | Show license information | ライセンス情報を表示します |
| `M-x version` | `version` | Show version information | バージョン情報を表示します |

## File Operations (ファイル操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x C-f` | `find-file` | Open a file | ファイルを開きます |
| `C-x M-f` | `find-file-dialog` | Open a file using OS dialog | OSダイアログを使用してファイルを開きます |
| `C-x C-r` | `find-file-read-only` | Open a file as read-only | 読み取り専用でファイルを開きます |
| `C-x C-s` | `save-buffer` | Save current buffer | 現在のバッファを保存します |
| `C-x C-w` | `write-file` | Save buffer as a new file | 名前を付けて保存します |
| `C-x M-w` | `write-file-dialog` | Save buffer using OS dialog | OSダイアログを使用して保存します |
| `C-x i` | `insert-file` | Insert a file at cursor | カーソル位置にファイルを挿入します |
| `C-x C-q` | `read-only-mode` | Toggle read-only mode | 書き込み禁止状態を切り替えます |
| `C-x C-c` | `quit` | Exit the application | アプリケーションを終了します |
| `M-x show-config` | `show-config` | Open the configuration file | 設定ファイル(config.json)を開きます |
| `M-x show-color-config` | `show-color-config` | Open the color configuration file | カラー設定ファイル(color-config.json)を開きます |
| `C-x d` | `toggle-sidebar` | Open the Filer Sidebar | ファイラサイドバーを開きます |
| `C-c c` | `browse-recent-files` | Open the Recent Files Sidebar | 最近使ったファイルサイドバーを開きます |
| `M-x recentf-open-files` | `recentf-open-files` | List recently opened files | 最近開いたファイルの一覧を表示します |

## Navigation (カーソル移動)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-f` / `right` | `forward-char` | Move cursor forward one character | カーソルを右に1文字移動します |
| `C-b` / `left` | `backward-char` | Move cursor backward one character | カーソルを左に1文字移動します |
| `C-n` / `down` | `next-line` | Move cursor to the next line | 次の行に移動します |
| `C-p` / `up` | `previous-line` | Move cursor to the previous line | 前の行に移動します |
| `C-a` / `home` | `beginning-of-line` | Move to the beginning of the line | 行頭に移動します |
| `C-e` / `end` | `end-of-line` | Move to the end of the line | 行末に移動します |
| `M-f` | `word-forward` | Move forward one word | 1単語分右に移動します |
| `M-b` | `word-backward` | Move backward one word | 1単語分左に移動します |
| `M-a` | `backward-sentence` | Move backward to start of sentence | 文の先頭（または前の文）に移動します |
| `M-e` | `forward-sentence` | Move forward to end of sentence | 文の末尾（句読点や行末）に移動します |
| `M-<` | `beginning-of-buffer` | Move to the beginning of the buffer | バッファの先頭に移動します |
| `M->` | `end-of-buffer` | Move to the end of the buffer | バッファの末尾に移動します |
| `C-v` | `scroll-up-command` | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | `scroll-down-command` | Scroll up one page | 1ページ分上にスクロールします |
| `C-l` | `recenter` | Recenter the cursor (center of window) | カーソル位置が中心になるよう画面を再配置します |
| `C-u 0 C-l` | `recenter` | Scroll so cursor is at the top of the window | カーソル行を画面の一番上に配置します |
| `C-u -1 C-l` | `recenter` | Scroll so cursor is at the bottom of the window | カーソル行を画面の一番下に配置します |
| `C-u n C-l` | `recenter` | Scroll so cursor is at the n-th line from the top | カーソル行を画面上から n 行目に配置します |
| `M-g` | `goto-line` | Jump to a specific line number | 指定した行番号へジャンプします |
| `M-x goto-char` | `goto-char` | Jump to a character position from the start (newlines count as 1) | バッファ先頭からの文字数（改行は1文字としてカウント）へジャンプします |
| `M-x move-to-column` | `move-to-column` | Move to a specific column on the current line | 現在の行の指定したカラムに移動します |
| `C-'` | `avy-goto-char-timer` | Jump to visible text using character labels (Can be used during isearch to jump with current query) | 画面上の文字（単語境界）へラベルを入力して高速にジャンプします (C-s/C-r の最中に実行すると現在の検索クエリを引き継いでジャンプします) |

## Editing (編集)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-d` | `delete-char` | Delete character at cursor | カーソル位置の文字を削除します |
| `C-h` / `backspace` | `backward-delete-char` | Delete character before cursor | カーソルの前の文字を削除します |
| `C-k` | `kill-line` | Kill from cursor to end of line (Supports `C-u n`) | 行末まで削除（キル）します（`C-u n` で回数指定が可能） |
| `C-w` | `kill-region` | Kill the selected region | 選択範囲を削除（キル）します |
| `M-w` | `kill-ring-save` | Copy the selected region (or current line) to kill ring | 選択範囲（または現在行）をコピーします |
| `C-y` | `yank` | Paste from the kill ring (Supports `C-u n` for repeat) | キルリングから貼り付け（ヤンク）します（`C-u n` で回数指定が可能） |
| `M-y` | `yank-pop` | Cycle through previous kills | キルリングを遡って貼り付けます |
| `M-x kill-whole-line` | `kill-whole-line` | Kill the whole line (including newline) | 行全体（改行を含む）を削除（キル）します |
| `M-d` | `kill-word` | Kill word forward | 次の単語を削除（キル）します |
| `M-k` | `kill-sentence` | Kill from cursor to end of sentence | 文末（句読点や行末）まで削除（キル）します |
| `M-u` | `upcase-word` | Uppercase from cursor to end of word | 単語を大文字にします |
| `M-l` | `downcase-word` | Lowercase from cursor to end of word | 単語を小文字にします |
| `M-c` | `capitalize-word` | Capitalize first letter of word | 単語の先頭を大文字にします |
| `M-backspace` | `backward-kill-word` | Kill word backward | 前の単語を削除（キル）します |
| `M-q` | `fill-paragraph` | Fill paragraph matching wrap column | 段落を折り返し幅に合わせて整形(ハードラップ)します |
| `M-x auto-fill-mode` | `auto-fill-mode` | Toggle auto-fill-mode | 自動改行モード (Auto Fill Mode) を切り替えます |
| `C-o` | `open-line` | Insert a newline after cursor | カーソル位置に改行を挿入します |
| `C-j` | `newline-and-indent` | Newline and indent | 改行してインデントを維持します |
| `C-t` | `transpose-chars` | Swap characters around cursor | 文字を入れ替えます |
| `M-t` | `transpose-words` | Swap words around cursor | 単語を入れ替えます |
| `M-^` | `join-line` | Join current line with the next one | 現在の行を次の行と結合します（CJK文字間以外はスペースを挿入） |
| `C-c d` | `duplicate-line` | Duplicate current line below (does not affect kill ring) | 現在の行を次の行に複製します（キルリングは変更しません） |
| `C-/` | `undo` | Undo the last action | 直前の操作を取り消します |
| `M-/` | `dabbrev-expand` | Dynamic word completion | 動的な単語補完 (dabbrev) を実行します |
| `C-SPC` | `set-mark-command` | Set mark at current position | 現在位置にマークをセットします |
| `C-u C-SPC` | `set-mark-command` | Pop mark from mark ring (with argument) | マークリングから位置を復元してジャンプします |
| `C-x C-x` | `exchange-point-and-mark` | Swap cursor and mark positions | カーソルとマークの位置を入れ替えます |
| `C-x h` | `mark-whole-buffer` | Mark the whole buffer | バッファ全体（全文）を選択します |
| `C-=` | `expand-region` | Expand region incrementally | 選択範囲を段階的に拡大します |
| `C-- C-=` | `contract-region` | Contract region to previous state | 選択範囲を段階的に縮小します |
| `C-g` | `keyboard-quit` | Cancel current command or operation | コマンドや操作を中断します |
| `M-x delete-trailing-whitespace` | `delete-trailing-whitespace` | Delete trailing whitespace in buffer | バッファ全体の行末の空白を削除します |
| `M-x delete-trailing-whitespace-region` | `delete-trailing-whitespace-region` | Delete trailing whitespace in region | 選択範囲の行末の空白を削除します |
| `M-x replace-string` | `replace-string` | Replace string from cursor to end | 現在位置から末尾まで文字列を置換します |
| `M-x replace-string-buffer` | `replace-string-buffer` | Replace string in entire buffer | バッファ全体の文字列を置換します |
| `M-x replace-string-region` | `replace-string-region` | Replace string in selected region | 選択範囲内の文字列を置換します |
| `M-x count-words-region` | `count-words-region` | Count words, characters, and lines in region | 選択範囲の単語数、文字数、行数をカウントします |
| `M-x count-words-buffer` | `count-words-buffer` | Count words, characters, and lines in buffer | バッファ全体の単語数、文字数、行数をカウントします |
| `M-;` | `comment-dwim` | Comment / uncomment region | 選択範囲のコメント状態を切り替えます |
| `M-x comment-region` | `comment-region` | Comment lines in region | 選択範囲をコメント化します |
| `M-x uncomment-region` | `uncomment-region` | Uncomment lines in region | 選択範囲のコメントを解除します |
| `C-M-\` | `indent-region` | Indent region | 選択範囲をインデントします |
| `M-x indent-buffer` | `indent-buffer` | Indent entire buffer | バッファ全体をインデントします |
| `C-x TAB` | `indent-rigidly` | Indent rigidly (interactive) | 選択範囲を左右にスライド（シフト）させます |
| `M-x sort-lines` | `sort-lines` | Sort lines in region alphabetically | 選択範囲内の行をアルファベット順にソートします |
| `C-u M-x sort-lines` | - | Sort lines in reverse order | 逆順（降順）で行をソートします |

## Lightweight Cursor-based Macros (簡易的なカーソルベースマクロ)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x (` | `start-kbd-macro` | Start defining a lightweight cursor-based macro | 簡易的なカーソルベースマクロの記録を開始します |
| `C-x )` | `end-kbd-macro` | Stop defining a lightweight cursor-based macro | 簡易的なカーソルベースマクロの記録を終了します |
| `C-x e` | `call-last-kbd-macro` | Execute the last defined lightweight cursor-based macro (Supports `C-u n` for repeat) | 最後に記録した簡易的なカーソルベースマクロを実行します（`C-u n` で回数指定が可能） |

## Registers (レジスタ)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x r s` | `copy-to-register` | Copy region to register | 選択範囲をレジスタに保存します |
| `C-x r i` | `insert-register` | Insert contents of register | レジスタの内容を挿入します |
| `C-x r SPC` | `point-to-register` | Store current position in register | 現在のカーソル位置をレジスタに保存します |
| `C-x r j` | `jump-to-register` | Jump to position stored in register | レジスタに保存された位置へジャンプします |

## Rectangle Operations (矩形操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x SPC` | `rectangle-mark-mode` | Toggle rectangle mark mode | 矩形選択モードを切り替えます |
| `C-x r k` | `kill-rectangle` | Kill the rectangle defined by mark and point | マークとカーソル間の矩形領域を削除（キル）します |
| `C-x r y` | `yank-rectangle` | Yank the last killed rectangle at cursor position | キルした矩形をカーソル位置にヤンク（貼り付け）します |
| `C-x r t` | `string-rectangle` | Replace rectangle contents with a string | 矩形領域の内容を指定した文字列で置換します |

## Search (検索)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-s` | `isearch-forward` | Incremental search forward (Supports `C-'` to trigger Avy jump) | 前方インクリメンタル検索を開始します (`C-'` で Avy ジャンプへ移行可能) |
| `C-r` | `isearch-backward` | Incremental search backward (Supports `C-'` to trigger Avy jump) | 後方インクリメンタル検索を開始します (`C-'` で Avy ジャンプへ移行可能) |
| `M-%` | `query-replace` | Interactive search and replace | 対話的な文字列置換（y/n/!/q）を実行します |
| `M-x grep` | `grep` | Run grep to search files in directory | ディレクトリ内の複数ファイルをまたいで文字列検索（Grep）を行います |

## Windows & Buffers (ウィンドウ・バッファ)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x 2` | `split-window-below` | Split window horizontally | ウィンドウを上下に分割します |
| `C-x 3` | `split-window-right` | Split window vertically | ウィンドウを左右に分割します |
| `C-x 0` | `delete-window` | Close the current window | 現在のウィンドウを閉じます |
| `C-x 1` | `delete-other-windows` | Close all other windows | 他のウィンドウを閉じます |
| `C-x o` | `other-window` | Switch focus to another window | 他のウィンドウに移動します |
| `C-x ^` | `enlarge-window` | Enlarge window vertically | ウィンドウを垂直方向に拡大します |
| `C-x -` | `shrink-window` | Shrink window vertically | ウィンドウを垂直方向に縮小します |
| `C-x }` | `enlarge-window-horizontally` | Enlarge window horizontally | ウィンドウを水平方向に拡大します |
| `C-x {` | `shrink-window-horizontally` | Shrink window horizontally | ウィンドウを水平方向に縮小します |
| `C-x +` | `balance-windows` | Balance all window sizes | すべてのウィンドウのサイズを均等にします |
| `C-x b` | `switch-to-buffer` | Switch to another buffer | バッファを切り替えます（補完候補あり） |
| `C-x C-b` | `list-buffers` | Show a list of all open buffers | バッファ一覧を表示します |
| `C-x k` | `kill-buffer` | Close the current buffer | バッファを閉じます |
| `f` (in Buffer List) | `buffer-menu-execute` | Switch to the buffer under cursor | カーソル位置のバッファに切り替えます（バッファ一覧にて） |
| `q` (in Buffer List) | `keyboard-quit` | Quit buffer list | バッファ一覧を閉じます |

## Filer Operations (ファイラ操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x d` | `toggle-sidebar` | Toggle Filer Sidebar | ファイラサイドバーを開閉します |
| `Enter` / `Click` / `f` | (Sidebar Open) | Open file & Close | ファイルを開いてファイラを閉じます |
| `C-n` / `j` / `n` | (Sidebar Open) | Move focus down | フォーカスを下に移動します |
| `C-p` / `k` / `p` | (Sidebar Open) | Move focus up | フォーカスを上に移動します |
| `Space` / `Tab` / `C-f` / `l` / `Right` | (Sidebar Open) | Expand folder / Move to child | フォルダを展開 / 子階層へ移動します |
| `C-b` / `h` / `b` / `Left` | (Sidebar Open) | Collapse folder / Move to parent | フォルダを折り畳む / 親階層へ移動します |
| `u` | (Sidebar Open) | Change root to parent directory | 1つ上の親フォルダをルート階層に設定します |
| `r` | (Sidebar Open) | Jump to root / drives | システムドライブルート（または`/`）へジャンプします |
| `g` | (Sidebar Open) | Reload tree | ツリー（ディレクトリ情報）を最新状態に再読み込みします |
| `C-v` | (Sidebar Open) | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | (Sidebar Open) | Scroll up one page | 1ページ分上にスクロールします |
| `M-<` | (Sidebar Open) | Jump to the beginning of the list | 階層の先頭に移動します |
| `M->` | (Sidebar Open) | Jump to the end of the list | 階層の末尾に移動します |
| `C-l` | (Sidebar Open) | Recenter the focused item | フォーカス項目が中心になるよう画面を再配置します |
| `C-g` / `C-q` / `q` / `Esc` | (Sidebar Open) | Close sidebar | ファイラを閉じます |

## Recent Files Sidebar Operations (最近使ったファイル・サイドバー操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c c` | `browse-recent-files` | Open Recent Files Sidebar | 最近使ったファイル表示を開閉します |
| `C-n` / `j` / `n` | (Sidebar Open) | Move focus down | フォーカスを下に移動します |
| `C-p` / `k` / `p` | (Sidebar Open) | Move focus up | フォーカスを上に移動します |
| `C-v` | (Sidebar Open) | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | (Sidebar Open) | Scroll up one page | 1ページ分上にスクロールします |
| `M-<` | (Sidebar Open) | Jump to the beginning of the list | 履歴の先頭に移動します |
| `M->` | (Sidebar Open) | Jump to the end of the list | 履歴の末尾に移動します |
| `C-l` | (Sidebar Open) | Recenter the focused item | フォーカス項目が中心になるよう画面を再配置します |
| `Space` / `Tab` / `l` / `Right` | (Sidebar Open) | Preview file | ファイルをプレビューします |
| `Enter` / `Click` / `f` | (Sidebar Open) | Open file & Close | ファイルを開いて閉じます |
| `C-g` / `C-q` / `q` / `Esc` | (Sidebar Open) | Close sidebar | サイドバーを閉じます |

## Outline Operations (アウトライン操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c o` | `outline-view` | Toggle Outline Sidebar (Parses up to 50,000 lines) | アウトライン表示を開閉します (50,000行まで) |
| `C-n` / `j` / `n` | (Outline Open) | Move focus down (Preview jumps to heading) | フォーカスを下に移動（エディタも連動）します |
| `C-p` / `k` / `p` | (Outline Open) | Move focus up (Preview jumps to heading) | フォーカスを上に移動（エディタも連動）します |
| `C-v` | (Outline Open) | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | (Outline Open) | Scroll up one page | 1ページ分上にスクロールします |
| `M-<` | (Outline Open) | Jump to the beginning of the list | アウトラインの先頭に移動します |
| `M->` | (Outline Open) | Jump to the end of the list | アウトラインの末尾に移動します |
| `C-l` | (Outline Open) | Recenter the focused item | フォーカス項目が中心になるよう画面を再配置します |
| `Space` / `Tab` / `C-f` / `l` / `Right` | (Outline Open) | Expand item / Move to child | 項目を展開 / 子階層へ移動します |
| `C-b` / `h` / `b` / `Left` | (Outline Open) | Collapse item / Move to parent | 項目を折り畳む / 親階層へ移動します |
| `g` | (Outline Open) | Refresh outline | アウトライン解析を最新状態に更新します |
| `Enter` / `Click` / `f` | (Outline Open) | Jump to heading & Close | 該当の見出しにジャンプして閉じます |
| `C-g` / `C-q` / `q` / `Esc` | (Outline Open) | Cancel & Close sidebar | キャンセルしてサイドバーを閉じます |

## Kill Ring Sidebar Operations (キルリング・サイドバー操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c y` | `browse-kill-ring` | Open Kill Ring Sidebar | キルリング表示を開閉します |
| `C-n` / `j` / `n` | (Sidebar Open) | Move focus down | フォーカスを下に移動します |
| `C-p` / `k` / `p` | (Sidebar Open) | Move focus up | フォーカスを上に移動します |
| `C-v` | (Sidebar Open) | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | (Sidebar Open) | Scroll up one page | 1ページ分上にスクロールします |
| `M-<` | (Sidebar Open) | Jump to the beginning of the list | 履歴の先頭に移動します |
| `M->` | (Sidebar Open) | Jump to the end of the list | 履歴の末尾に移動します |
| `C-l` | (Sidebar Open) | Recenter the focused item | フォーカス項目が中心になるよう画面を再配置します |
| `b` | (Sidebar Open) | Close sidebar | サイドバーを閉じます |
| `g` | (Sidebar Open) | Refresh list | 履歴を最新の状態に更新します |
| `Enter` / `Click` / `f` | (Sidebar Open) | Insert selected text & Close | 選択したテキストを挿入して閉じます |
| `C-g` / `C-q` / `q` / `Esc` | (Sidebar Open) | Close sidebar | サイドバーを閉じます |

## Register Sidebar Operations (レジスタ・サイドバー操作)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c r` | `browse-registers` | Open Register Sidebar | レジスタ表示を開閉します |
| `C-n` / `j` / `n` | (Sidebar Open) | Move focus down | フォーカスを下に移動します |
| `C-p` / `k` / `p` | (Sidebar Open) | Move focus up | フォーカスを上に移動します |
| `C-v` | (Sidebar Open) | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | (Sidebar Open) | Scroll up one page | 1ページ分上にスクロールします |
| `M-<` | (Sidebar Open) | Jump to the beginning of the list | 履歴の先頭に移動します |
| `M->` | (Sidebar Open) | Jump to the end of the list | 履歴の末尾に移動します |
| `C-l` | (Sidebar Open) | Recenter the focused item | フォーカス項目が中心になるよう画面を再配置します |
| `b` | (Sidebar Open) | Close sidebar | サイドバーを閉じます |
| `g` | (Sidebar Open) | Refresh list | 履歴を最新の状態に更新します |
| `Enter` / `Click` / `f` | (Sidebar Open) | Action(Insert/Jump) & Close | 決定（挿入または移動）して閉じます |
| `C-g` / `C-q` / `q` / `Esc` | (Sidebar Open) | Close sidebar | サイドバーを閉じます |

## Preview & Web (プレビュー・Web)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-c v` | `preview-dispatch` | Preview current buffer (Markdown/HTML) | 現在のバッファをプレビューします（Markdown/HTML） |
| `M-x preview-html` | `preview-html` | Preview current HTML buffer | 現在のHTMLバッファをプレビューします |
| `M-x preview-markdown` | `preview-markdown` | Preview current Markdown buffer | 現在のMarkdownバッファをプレビューします |
| `C-c o` / `M-x outline-view` | `outline-view` | Toggle Outline Sidebar (Parses up to 50,000 lines) | アウトライン表示を開閉します (50,000行まで) |
| `C-c p` / `M-x print-buffer` | `print-buffer` | Print active buffer | 現在のバッファを印刷します |

## Major Modes (メジャーモード)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x set-highlight-mode` | `set-highlight-mode` | Set major mode for current buffer (with completion) | 現在のバッファのモードを設定します（補完あり） |
| `M-x fundamental-mode` | `fundamental-mode` | Switch to Fundamental mode | Fundamental モード（基本）に切り替えます |
| `M-x text-mode` | `text-mode` | Switch to Plain Text mode | テキストモードに切り替えます |
| `M-x c-mode` | `c-mode` | Switch to C mode | C言語モードに切り替えます |
| `M-x cpp-mode` | `cpp-mode` | Switch to C++ mode | C++モードに切り替えます |
| `M-x csharp-mode` | `csharp-mode` | Switch to C# mode | C#モードに切り替えます |
| `M-x dart-mode` | `dart-mode` | Switch to Dart mode | Dartモードに切り替えます |
| `M-x go-mode` | `go-mode` | Switch to Go mode | Goモードに切り替えます |
| `M-x java-mode` | `java-mode` | Switch to Java mode | Javaモードに切り替えます |
| `M-x javascript-mode` | `javascript-mode` | Switch to JavaScript mode | JavaScriptモードに切り替えます |
| `M-x json-mode` | `json-mode` | Switch to JSON mode | JSONモードに切り替えます |
| `M-x kotlin-mode` | `kotlin-mode` | Switch to Kotlin mode | Kotlinモードに切り替えます |
| `M-x lua-mode` | `lua-mode` | Switch to Lua mode | Luaモードに切り替えます |
| `M-x markdown-mode` | `markdown-mode` | Switch to Markdown mode | Markdownモードに切り替えます |
| `M-x perl-mode` | `perl-mode` | Switch to Perl mode | Perlモードに切り替えます |
| `M-x php-mode` | `php-mode` | Switch to PHP mode | PHPモードに切り替えます |
| `M-x python-mode` | `python-mode` | Switch to Python mode | Pythonモードに切り替えます |
| `M-x ruby-mode` | `ruby-mode` | Switch to Ruby mode | Rubyモードに切り替えます |
| `M-x rust-mode` | `rust-mode` | Switch to Rust mode | Rustモードに切り替えます |
| `M-x sql-mode` | `sql-mode` | Switch to SQL mode | SQLモードに切り替えます |
| `M-x swift-mode` | `swift-mode` | Switch to Swift mode | Swiftモードに切り替えます |
| `M-x toml-mode` | `toml-mode` | Switch to TOML mode | TOMLモードに切り替えます |
| `M-x typescript-mode` | `typescript-mode` | Switch to TypeScript mode | TypeScriptモードに切り替えます |
| `M-x css-mode` | `css-mode` | Switch to CSS mode | CSSモードに切り替えます |
| `M-x html-mode` | `html-mode` | Switch to HTML mode | HTMLモードに切り替えます |
| `M-x xml-mode` | `xml-mode` | Switch to XML mode | XMLモードに切り替えます |
| `M-x svg-mode` | `svg-mode` | Switch to SVG mode | SVGモードに切り替えます |
| `M-x yaml-mode` | `yaml-mode` | Switch to YAML mode | YAMLモードに切り替えます |
| `M-x bash-mode` | `bash-mode` | Switch to Bash/Shell mode | Bash/Shellモードに切り替えます |

## Settings (設定)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x open-config` | `open-config` | Open the Settings Sidebar | 設定サイドバーを開きます |
| `C-g` / `C-q` / `Esc` | (Settings Open) | Save & Close sidebar | 設定を保存して閉じます |
| `Right Click` (Backdrop) | (Settings Open) | Save & Close sidebar | 背景の右クリックで閉じます |
| `M-x auto-save` | `auto-save` | Toggle auto-save status | オートセーブを切り替えます |
| `M-x get-auto-fill-mode` | `get-auto-fill-mode` | Show auto-fill mode status | 自動改行モードの状態を表示します |
| `M-x get-auto-save` | `get-auto-save` | Show auto-save status | オートセーブの状態を表示します |
| `M-x get-auto-save-interval` | `get-auto-save-interval` | Show auto-save interval | オートセーブの間隔を表示します |
| `M-x get-case-sensitive-search` | `get-case-sensitive-search` | Get case sensitive search status | 検索の大文字小文字区別の状態を表示します |
| `M-x get-clipboard-integration` | `get-clipboard-integration` | Get current OS clipboard integration setting | OSクリップボード連携の現在の設定を表示します |
| `M-x get-current-directory` | `get-current-directory` | Show current working directory | カレントディレクトリを表示します |
| `M-x get-kill-ring-max` | `get-kill-ring-max` | Get current maximum number of items in the kill ring | キルリングの最大保持件数を表示します |
| `M-x get-default-font` | `get-default-font` | Get default font | デフォルトフォントを表示します |
| `M-x get-encoding` | `get-encoding` | Get current buffer encoding | 現在のバッファのエンコーディングを表示します |
| `M-x get-font` | `get-font` | Get current buffer font | 現在のバッファのフォントを表示します |
| `M-x get-font-size` | `get-font-size` | Get font size | フォントサイズを表示します |
| `M-x get-line-number-mode` | `get-line-number-mode` | Get line number display status | 行番号表示の状態を表示します |
| `M-x get-line-terminator` | `get-line-terminator` | Get line terminator | 改行コードを表示します |
| `M-x get-max-undo-limit` | `get-max-undo-limit` | Get current maximum number of undo operations | 最大Undo回数を表示します |
| `M-x get-show-ime-indicator` | `get-show-ime-indicator` | Get current IME indicator visibility setting | IMEインジケータの表示状態（自動判定を含む）を表示します |
| `M-x get-cursor-vfx` | `get-cursor-vfx` | Get current cursor particle VFX setting | カーソルの粒子エフェクト（VFX）の現在の設定を表示します |
| `M-x get-macro-vfx` | `get-macro-vfx` | Get current macro execution visual effects setting | マクロ実行時の視覚効果（VFX）の現在の設定を表示します |
| `M-x get-smooth-cursor` | `get-smooth-cursor` | Get current smooth cursor animation setting | ヒュンヒュンカーソル（滑らかな移動）の現在の設定を表示します |
| `M-x get-tab-width` | `get-tab-width` | Get current tab width | タブ幅を表示します |
| `M-x get-wrap-column` | `get-wrap-column` | Get current wrap column | 現在の折り返し幅を表示します |
| `M-x set-auto-fill-mode` | `set-auto-fill-mode` | Toggle auto-fill mode (on/off) | 自動改行モードを有効/無効にします |
| `M-x set-auto-save` | `set-auto-save` | Toggle auto-save (yes/no) | オートセーブを有効/無効にします |
| `M-x set-auto-save-interval` | `set-auto-save-interval` | Set auto-save interval (min) | オートセーブの間隔(分)を設定します |
| `M-x set-case-sensitive-search` | `set-case-sensitive-search` | Set case sensitive search (on/off) | 検索の大文字小文字区別を設定します |
| `M-x set-clipboard-integration` | `set-clipboard-integration` | Set OS clipboard integration (on/off) | OSクリップボード連携の有効・無効を設定します |
| `M-x set-current-directory` | `set-current-directory` | Change current working directory | カレントディレクトリを変更します |
| `M-x set-kill-ring-max` | `set-kill-ring-max` | Set the maximum number of items in the kill ring | キルリングの最大保持件数を設定します |
| `M-x set-default-font` | `set-default-font` | Set the default display font | デフォルトのフォントを設定します |
| `M-x set-encoding` | `set-encoding` | Set file encoding for saving | 保存時のエンコーディングを設定します |
| `M-x set-font` | `set-font` | Set buffer local font | バッファ固有のフォントを設定します |
| `M-x set-font-size` | `set-font-size` | Set font size | フォントサイズを設定します |
| `M-x set-line-number-mode` | `set-line-number-mode` | Toggle line number display (on/off) | 行番号の表示状態を設定します |
| `M-x set-line-terminator` | `set-line-terminator` | Set line terminator (CRLF/LF/CR) | 改行コードを設定します |
| `M-x set-max-undo-limit` | `set-max-undo-limit` | Set the maximum number of undo operations | 最大Undo回数を設定します |
| `M-x set-show-ime-indicator` | `set-show-ime-indicator` | Set IME indicator visibility (on/off/auto) | IMEインジケータの表示状態（ON/OFF/自動）を設定します |
| `M-x set-cursor-vfx` | `set-cursor-vfx` | Select cursor VFX style (off/Light Particle/Cyber Trace/Prismatic Nova/Arcane Sigil/Inferno Flame/Phantom Merge) | カーソルVFXの種類（OFF/Light Particle/Cyber Trace/Prismatic Nova/Arcane Sigil/Inferno Flame/Phantom Merge）を選択します |
| `C-c 0` | `set-cursor-vfx-off` | Set cursor VFX to Off | カーソルVFXをオフにします |
| `C-c 1` | `set-cursor-vfx-light-particle` | Set cursor VFX to Light Particle | カーソルVFXを Light Particle に設定します |
| `C-c 2` | `set-cursor-vfx-cyber-trace` | Set cursor VFX to Cyber Trace | カーソルVFXを Cyber Trace に設定します |
| `C-c 3` | `set-cursor-vfx-prismatic-nova` | Set cursor VFX to Prismatic Nova | カーソルVFXを Prismatic Nova に設定します |
| `C-c 4` | `set-cursor-vfx-arcane-sigil` | Set cursor VFX to Arcane Sigil | カーソルVFXを Arcane Sigil に設定します |
| `C-c 5` | `set-cursor-vfx-inferno-flame` | Set cursor VFX to Inferno Flame | カーソルVFXを Inferno Flame に設定します |
| `C-c 6` | `set-cursor-vfx-phantom-merge` | Set cursor VFX to Phantom Merge | カーソルVFXを Phantom Merge に設定します |
| `M-x set-macro-vfx` | `set-macro-vfx` | Set macro execution visual effects (on/off) | マクロ実行時の視覚効果（VFX）の有効・無効を設定します |
| `M-x set-smooth-cursor` | `set-smooth-cursor` | Set smooth cursor animation (on/off) | ヒュンヒュンカーソル（滑らかな移動）の有効・無効を設定します |
| `M-x set-tab-width` | `set-tab-width` | Set the tab width | タブ幅を設定します |
| `M-x set-wrap-column` | `set-wrap-column` | Set the wrap column | 折り返し幅を設定します |

## MCP (AI Integration / AI 連携)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x mcp-start` | `mcp-start` | Start the internal MCP server | 内蔵 MCP サーバーを起動します |
| `M-x mcp-stop` | `mcp-stop` | Stop the internal MCP server | 内蔵 MCP サーバーを停止します |
| `C-c m` / `M-x mcp-toggle` | `mcp-toggle` | Toggle the internal MCP server | 内蔵 MCP サーバーの起動・停止を切り替えます |

## Prefix Arguments (プレフィックス引数)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-u` | `universal-argument` | Provide a numeric argument for the next command | 次に実行するコマンドに引数（数値）を渡します |
| `C-u C-u ...` | - | Multiply universal argument (4, 16, 64...) | 引数を累積（4, 16, 64倍...）させます |

## Advanced (その他)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `execute-extended-command` | Execute a command by name (with completion) | コマンド名を指定して実行します（補完候補あり） |

## Experimental (実験的)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x navigate-url` | `navigate-url` | Open a URL in a preview buffer | 指定したURLをバッファ内で表示します |
| `M-x shell` | `shell` | Run an interactive shell (cmd.exe) | 対話的なシェル(cmd.exe)を実行します |
