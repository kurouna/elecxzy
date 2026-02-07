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
| `C-x C-s` | `save-buffer` | Save current buffer | 現在のバッファを保存します |
| `C-x C-w` | `write-file` | Save buffer as a new file | 名前を付けて保存します |
| `C-x C-q` | `read-only-mode` | Toggle read-only mode | 書き込み禁止状態を切り替えます |
| `C-x C-c` | `quit` | Exit the application | アプリケーションを終了します |
| `M-x show-config` | `show-config` | Open the configuration file | 設定ファイル(config.json)を開きます |
| `M-x recentf-open-files` | `recentf-open-files` | List recently opened files | 最近開いたファイルの一覧を表示します |

## Navigation (カーソル移動)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-f` / `right` | `cursor-forward` | Move cursor forward one character | カーソルを右に1文字移動します |
| `C-b` / `left` | `cursor-backward` | Move cursor backward one character | カーソルを左に1文字移動します |
| `C-n` / `down` | `cursor-next-line` | Move cursor to the next line | 次の行に移動します |
| `C-p` / `up` | `cursor-previous-line` | Move cursor to the previous line | 前の行に移動します |
| `C-a` / `home` | `cursor-bol` | Move to the beginning of the line | 行頭に移動します |
| `C-e` / `end` | `cursor-eol` | Move to the end of the line | 行末に移動します |
| `M-f` | `word-forward` | Move forward one word | 1単語分右に移動します |
| `M-b` | `word-backward` | Move backward one word | 1単語分左に移動します |
| `M-<` | `beginning-of-buffer` | Move to the beginning of the buffer | バッファの先頭に移動します |
| `M->` | `end-of-buffer` | Move to the end of the buffer | バッファの末尾に移動します |
| `C-v` | `scroll-up-command` | Scroll down one page | 1ページ分下にスクロールします |
| `M-v` | `scroll-down-command` | Scroll up one page | 1ページ分上にスクロールします |
| `C-l` | `recenter` | Recenter the cursor | カーソル位置が中心になるよう画面を再配置します |
| `M-g g` / `M-g M-g` | `goto-line` | Jump to a specific line number | 指定した行番号へジャンプします |

## Editing (編集)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-d` | `delete-char` | Delete character at cursor | カーソル位置の文字を削除します |
| `C-h` / `backspace` | `backward-delete-char` | Delete character before cursor | カーソルの前の文字を削除します |
| `C-k` | `kill-line` | Kill from cursor to end of line | 行末まで削除（キル）します |
| `C-w` | `kill-region` | Kill the selected region | 選択範囲を削除（キル）します |
| `M-w` | `kill-ring-save` | Copy the selected region to kill ring | 選択範囲をコピーします |
| `C-y` | `yank` | Paste from the kill ring | キルリングから貼り付け（ヤンク）します |
| `M-y` | `yank-pop` | Cycle through previous kills | キルリングを遡って貼り付けます |
| `M-d` | `kill-word` | Kill word forward | 次の単語を削除（キル）します |
| `M-backspace` | `backward-kill-word` | Kill word backward | 前の単語を削除（キル）します |
| `C-o` | `open-line` | Insert a newline after cursor | カーソル位置に改行を挿入します |
| `C-t` | `transpose-chars` | Swap characters around cursor | 文字を入れ替えます |
| `C-/` | `undo` | Undo the last action | 直前の操作を取り消します |
| `C-SPC` | `set-mark-command` | Set mark at current position | 現在位置にマークをセットします |
| `C-x C-x` | `exchange-point-and-mark` | Swap cursor and mark positions | カーソルとマークの位置を入れ替えます |
| `C-g` | `keyboard-quit` | Cancel current command or operation | コマンドや操作を中断します |
| `M-x delete-trailing-whitespace` | `delete-trailing-whitespace` | Delete trailing whitespace in buffer | バッファ全体の行末の空白を削除します |
| `M-x delete-trailing-whitespace-region` | `delete-trailing-whitespace-region` | Delete trailing whitespace in region | 選択範囲の行末の空白を削除します |
| `M-x replace-string` | `replace-string` | Replace string from cursor to end | 現在位置から末尾まで文字列を置換します |
| `M-x replace-string-region` | `replace-string-region` | Replace string in selected region | 選択範囲内の文字列を置換します |

## Search (検索)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-s` | `isearch-forward` | Incremental search forward | 前方インクリメンタル検索を開始します |
| `C-r` | `isearch-backward` | Incremental search backward | 後方インクリメンタル検索を開始します |
| `M-%` | `query-replace` | Interactive search and replace | 対話的な文字列置換（y/n/!/q）を実行します |

## Windows & Buffers (ウィンドウ・バッファ)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `C-x 2` | `split-window-below` | Split window horizontally | ウィンドウを上下に分割します |
| `C-x 3` | `split-window-right` | Split window vertically | ウィンドウを左右に分割します |
| `C-x 0` | `delete-window` | Close the current window | 現在のウィンドウを閉じます |
| `C-x 1` | `delete-other-windows` | Close all other windows | 他のウィンドウを閉じます |
| `C-x o` | `other-window` | Switch focus to another window | 他のウィンドウに移動します |
| `C-x b` | `switch-to-buffer` | Switch to another buffer | バッファを切り替えます（補完候補あり） |
| `C-x C-b` | `list-buffers` | Show a list of all open buffers | バッファ一覧を表示します |
| `C-x k` | `kill-buffer` | Close the current buffer | バッファを閉じます |
| `f` (in Buffer List) | `buffer-menu-execute` | Switch to the buffer under cursor | カーソル位置のバッファに切り替えます（バッファ一覧にて） |
| `q` (in Buffer List) | `keyboard-quit` | Quit buffer list | バッファ一覧を閉じます |

## Preview & Web (プレビュー・Web)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x preview-html` | `preview-html` | Preview current HTML buffer | 現在のHTMLバッファをプレビューします |
| `M-x preview-markdown` | `preview-markdown` | Preview current Markdown buffer | 現在のMarkdownバッファをプレビューします |
| `M-x print-buffer` | `print-buffer` | Print active buffer | 現在のバッファを印刷します |

## Settings (設定)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x get-auto-save` | `get-auto-save` | Show auto-save status | オートセーブの状態を表示します |
| `M-x get-auto-save-interval` | `get-auto-save-interval` | Show auto-save interval | オートセーブの間隔を表示します |
| `M-x get-case-sensitive-search` | `get-case-sensitive-search` | Get case sensitive search status | 検索の大文字小文字区別の状態を表示します |
| `M-x get-current-directory` | `get-current-directory` | Show current working directory | カレントディレクトリを表示します |
| `M-x get-default-font` | `get-default-font` | Get default font | デフォルトフォントを表示します |
| `M-x get-encoding` | `get-encoding` | Get current buffer encoding | 現在のバッファのエンコーディングを表示します |
| `M-x get-font` | `get-font` | Get current buffer font | 現在のバッファのフォントを表示します |
| `M-x get-font-size` | `get-font-size` | Get font size | フォントサイズを表示します |
| `M-x get-line-terminator` | `get-line-terminator` | Get line terminator | 改行コードを表示します |
| `M-x set-auto-save` | `set-auto-save` | Toggle auto-save (yes/no) | オートセーブを有効/無効にします |
| `M-x set-auto-save-interval` | `set-auto-save-interval` | Set auto-save interval (min) | オートセーブの間隔(分)を設定します |
| `M-x set-case-sensitive-search` | `set-case-sensitive-search` | Set case sensitive search (on/off) | 検索の大文字小文字区別を設定します |
| `M-x set-current-directory` | `set-current-directory` | Change current working directory | カレントディレクトリを変更します |
| `M-x set-default-font` | `set-default-font` | Set the default display font | デフォルトのフォントを設定します |
| `M-x set-encoding` | `set-encoding` | Set file encoding for saving | 保存時のエンコーディングを設定します |
| `M-x set-font` | `set-font` | Set buffer local font | バッファ固有のフォントを設定します |
| `M-x set-font-size` | `set-font-size` | Set font size | フォントサイズを設定します |
| `M-x set-highlight-mode` | `set-highlight-mode` | Set major mode for current buffer | 現在のバッファのモードを設定します |
| `M-x set-line-terminator` | `set-line-terminator` | Set line terminator (CRLF/LF/CR) | 改行コードを設定します |

## Advanced (その他)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x` | `execute-extended-command` | Execute a command by name (with completion) | コマンド名を指定して実行します（補完候補あり） |

## Experimental (実験的)
| Command / コマンド | ID | Description (English) | 説明 (日本語) |
|:---|:---|:---|:---|
| `M-x navigate-url` | `navigate-url` | Open a URL in a preview buffer | 指定したURLをバッファ内で表示します |
