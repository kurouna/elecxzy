# elecxzy

[![Zenn](https://img.shields.io/badge/Zenn-kurouna-blue)](https://zenn.dev/kurouna)
[![X](https://img.shields.io/badge/X-elecxzy-black)](https://x.com/elecxzy)

**A lightweight, Lisp-free text editor with Emacs keybindings.**
Lisp非搭載・設定最小限。迷わず書ける、Emacs操作の軽量エディタ。

<p align="center">
  <img src="./assets/main-screenshot.gif" height="400" alt="elecxzy Screenshot">
</p>

> [!WARNING]
> **🚧 Project Status: Pre-release (Alpha) / 開発中（アルファ版）**
>
> This software is currently in an **early alpha stage**. Features are under active development, and some functions may be incomplete or unstable. Use with caution.
>
> 本ソフトウェアは現在、**開発初期のプレリリース（アルファ）版**です。すべての機能が完全に動作する状態ではなく、挙動が不安定な場合があります。あらかじめご了承ください。

[English](#english) | [日本語](#japanese)

---

<a name="english"></a>
## English

`elecxzy` is a modern text editor built from the ground up to reconstruct the powerful and beloved Emacs user experience using contemporary web technologies. It is designed for those who value the Emacs workflow but seek a streamlined, lightweight, and efficient environment, allowing you to start coding or writing immediately with the familiar keybindings you've mastered, without the burden of complex configuration.

### 🚀 Key Features

- **Lisp-free & Lightweight**: No heavy script engine overhead. Just the essential text editing features you need.
- **Ready-to-Use Defaults**: Comes with sensible default settings so you can start coding or writing immediately after installation without tedious configuration.
- **Emacs-inspired Workflow**: Familiar keybindings (C-f, C-b, C-n, C-p, C-a, C-e, etc.) and command structures for power users.
- **Flexible Window Management**: Support for recursive window splitting (vertical/horizontal) with `C-x 2`, `C-x 3`. Adjust sizes with intuitive, Emacs-style commands (`C-x ^`, `C-x }`).
- **Major Modes & Syntax Highlighting**: Specialized modes for TypeScript, JavaScript, C/C++, Python, Go, Rust, SQL, YAML, and more.
- **Real-time Previews**: Instant preview modes for Markdown and HTML to bridge the gap between editing and publishing.
- **Interactive Search & Replace**: Powerful `isearch` (incremental search) and `query-replace` for fast navigation and editing.
- **High-Performance Buffer Engine**: Uses a **Piece Table** data structure for efficient handling of large files and infinite undo history.
- **Appearance Customization**: Adjust colors and fonts (Global or Buffer-local) via simple JSON configuration or M-x commands.
- **Seamless Japanese IME Support**: Optimized for smooth Japanese typing with dedicated focus handling. (Toggle with `C-\` or `C-]`)

<p align="center">
  <img src="./assets/ime-screenshot.png" height="400" alt="elecxzy IME Screenshot">
</p>

### 🛠 Tech Stack

- **Framework**: Electron (Node.js)
- **Frontend**: React, TypeScript (Custom rendering engine)
- **Styling**: Vanilla CSS (Simple and distraction-free design)
- **Syntax Highlighting**: Highlight.js integrated

### 📖 Commands

For a full list of available commands and keybindings, please refer to:
👉 **[COMMANDLIST.md](./COMMANDLIST.md)**

### 📥 Downloads

Binaries for Windows are available on the GitHub Releases page.
Source code is currently private.

👉 **[Download the latest version](https://github.com/kurouna/elecxzy/releases)**

---

<a name="japanese"></a>
## 日本語

`elecxzy` は、長年愛されてきた Emacs の強力なユーザー体験を、最新の Web 技術（Electron）を用いてゼロから再構築したテキストエディタです。

Emacs の伝統的なキーバインドやワークフローを最大限に尊重しつつ、現代的な軽快さと使いやすさを両立。煩雑な環境構築に時間を取られることなく、あのお馴染みの操作感ですぐに創作活動を開始できる「スピード」と「シンプルさ」を追求しています。

### 🚀 主な機能

- **Lisp非搭載の軽快さ**: 複雑な処理系を持たないため、起動が速く、動作も軽量です。
- **「即戦力」の初期設定**: インストール後、すぐに使い始められるような初期設定を内蔵しており、直後からコーディングや執筆を行うことができます。
- **Emacs風の操作体系**: C-x、M-x、C-s などの慣れ親しんだキーバインドをフルサポート。
- **柔軟な画面分割とリサイズ**: `C-x 2` / `C-x 3` による再帰的なウィンドウ分割と、`C-x ^` / `C-x }` 等による直感的なサイズ調整。
- **多様なメジャーモード**: TypeScript, JavaScript, C/C++, Python, Go, Rust, SQL, YAML など、多数の言語のシンタックスハイライトに対応。
- **リアルタイム・プレビュー**: Markdown や HTML の書き換えを即座に確認できるプレビューモードを搭載。
- **対話的な検索と置換**: インクリメンタル検索 (isearch) や、一箇所ずつ確認しながら置換できる query-replace。
- **Piece Tableエンジン**: 大容量ファイルも軽快に扱え、高速な履歴管理（Undo/Redo）を可能にするバッファエンジン。
- **外観・フォントの調整**: `M-x set-font` によるバッファごとのフォント設定や、JSONによる配色カスタマイズが可能。
- **高精度な日本語IME対応**: Webベースエディタの課題であるIMEの挙動を最適化し、ストレスのない入力を実現。(`C-\` または `C-]` でON/OFF切り替え)

<p align="center">
  <img src="./assets/ime-screenshot.png" height="400" alt="elecxzy Screenshot">
</p>

### 🛠 技術スタック

- **フレームワーク**: Electron (Node.js)
- **フロントエンド**: React, TypeScript
- **スタイリング**: Vanilla CSS (シンプルで集中しやすいデザイン)
- **シンタックスハイライト**: Highlight.js 搭載

### 📖 操作・コマンド一覧

すべてのコマンドとキーバインドの詳細については、以下を参照してください。
👉 **[COMMANDLIST.md](./COMMANDLIST.md)**

### 📥 ダウンロード

Windows用のバイナリは、GitHubのリリースページからダウンロード可能です。
（ソースコードは現在非公開です）

👉 **[最新版をダウンロードする](https://github.com/kurouna/elecxzy/releases)**

---

## FAQ

### English
**Q: Horizontal scrolling with my mouse tilt-wheel doesn't work.**
A: In some environments using mouse utility software (e.g., Logi Options), the horizontal scroll signal (deltaX) may be blocked for unrecognized applications. In such cases, you can horizontally scroll by rotating the wheel while holding the **Shift** key.

### 日本語
**Q: マウスのチルトホイールを倒しても水平スクロールが動作しません。**
A: 一部のマウスユーティリティソフト（例：Logi Options）がインストールされている環境では、ソフト側が「未知のアプリ」への水平スクロール信号をブロックする場合があります。その場合は、**Shiftキーを押しながらホイールを回転**させることで、水平方向へスクロールが可能です。

---

## License / ライセンス

This software is released under the [MIT License](./LICENSE). 
本ソフトウェアは [MITライセンス](./LICENSE) のもとで公開されています。

## Acknowledgements / 謝辞

This application is inspired by the legendary editors **GNU Emacs** and **xyzzy**, and was developed from scratch to carry on their spirit:

- **GNU Emacs**
  - Copyright (C) 1985-2024 Free Software Foundation, Inc.
  - Created by Richard Stallman

- **xyzzy**
  - Copyright (c) 1996-2005 Tetsuya Kamei
  - Copyright (c) 2012-2014 xyzzy Project

Special thanks to the original authors for their pioneering work in the editor ecosystem.
