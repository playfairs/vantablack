// ==UserScript==
// @name         Vantablack Theme for GitHub
// @namespace    https://github.com/playfairs/vantablack
// @version      1.0.0
// @description  An ultra-black GitHub theme
// @author       playfairs
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/playfairs/Vantablack/main/vantablack.user.js
// @downloadURL  https://raw.githubusercontent.com/playfairs/Vantablack/main/vantablack.user.js
// ==/UserScript==

GM_addStyle(`
    :root {
        --bgColor-default: #000000 !important;
        --bgColor-muted: #030303 !important;
        --bgColor-neutral-muted: #050505 !important;
        --bgColor-inset: #000000 !important;

        --fgColor-default: #ffffff !important;
        --fgColor-muted: #888888 !important;
        --fgColor-accent: #ffffff !important;

        --borderColor-default: #111111 !important;
        --borderColor-muted: #080808 !important;

        --bgColor-accent-muted: #111111 !important;
        --borderColor-accent-emphasis: #ffffff !important;

        --fgColor-success: #ffffff !important;
        --bgColor-success-muted: #080808 !important;
        --borderColor-success-emphasis: #ffffff !important;

        --fgColor-open: #ffffff !important;
        --bgColor-open-muted: #080808 !important;
        --borderColor-open-emphasis: #ffffff !important;

        --fgColor-done: #ffffff !important;
        --bgColor-done-muted: #080808 !important;
        --borderColor-done-emphasis: #ffffff !important;
    }

    body {
        background: #000 !important;
        color: #fff !important;
    }

    main,
    .Layout,
    .Layout-main,
    .Layout-sidebar {
        background: #000 !important;
    }

    .AppHeader {
        background: #000 !important;
        border-bottom: 1px solid #080808 !important;
    }

    .Box,
    .Box-header,
    .Box-row {
        background: #000 !important;
        border-color: #111 !important;
    }

    .react-directory,
    .react-directory-row,
    .Box-row {
        background: #000 !important;
    }

    .react-directory-row:hover,
    .Box-row:hover {
        background: #050505 !important;
    }

    .Button,
    .btn {
        background: #050505 !important;
        border-color: #111 !important;
        color: #fff !important;
    }

    .Button:hover,
    .btn:hover {
        background: #0a0a0a !important;
        border-color: #222 !important;
    }

    .bgColor-accent-emphasis,
    .bgColor-success-emphasis,
    .bgColor-open-emphasis,
    .btn-primary {
        background-color: #fff !important;
        border-color: #fff !important;
        color: #000 !important;
    }

    .bgColor-accent-emphasis:hover,
    .bgColor-success-emphasis:hover,
    .bgColor-open-emphasis:hover,
    .btn-primary:hover {
        background-color: #ccc !important;
        border-color: #ccc !important;
        color: #000 !important;
    }

    input,
    textarea,
    select {
        background: #000 !important;
        border-color: #111 !important;
        color: #fff !important;
    }

    input:focus,
    textarea:focus,
    select:focus {
        border-color: #fff !important;
        box-shadow: 0 0 0 1px #fff !important;
    }

    pre,
    code {
        background: #000 !important;
    }

    a {
        color: #fff !important;
    }

    a:hover {
        color: #aaa !important;
    }

    .Link--primary,
    .Link--secondary,
    .color-fg-accent,
    .color-fg-success,
    .color-fg-open,
    .color-fg-done {
        color: #fff !important;
    }

    .borderColor-accent-emphasis,
    .borderColor-success-emphasis,
    .borderColor-open-emphasis {
        border-color: #fff !important;
    }

    .State--open,
    .State--merged,
    .State--success {
        color: #fff !important;
        border-color: #fff !important;
    }

    .Progress-item {
        background-color: #fff !important;
    }

    [data-level="0"] {
        background-color: #000 !important;
        border-color: #111 !important;
    }

    [data-level="1"] {
        background-color: #333 !important;
        border-color: #444 !important;
    }

    [data-level="2"] {
        background-color: #777 !important;
        border-color: #888 !important;
    }

    [data-level="3"] {
        background-color: #bbb !important;
        border-color: #ccc !important;
    }

    [data-level="4"] {
        background-color: #fff !important;
        border-color: #fff !important;
    }

    .blob-code-addition,
    .blob-code-addition-line,
    .diff-table .blob-code-addition {
        background-color: #0d0d0d !important;
    }

    .blob-code-addition .blob-code-inner,
    .blob-code-addition-line .blob-code-inner {
        color: #fff !important;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #000;
    }

    ::-webkit-scrollbar-thumb {
        background: #111;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #1a1a1a;
    }

    ::selection {
        background: #fff;
        color: #000;
    }
`);