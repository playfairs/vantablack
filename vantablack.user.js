// ==UserScript==
// @name         Vantablack Theme for GitHub
// @namespace    https://github.com/playfairs/vantablack
// @version      1.0.3
// @description  An ultra-black theme for GitHub.
// @author       playfairs
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @grant        GM_addStyle
// @updateURL    https://github.com/playfairs/vantablack/raw/refs/heads/master/vantablack.user.js
// @downloadURL  https://github.com/playfairs/vantablack/raw/refs/heads/master/vantablack.user.js
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
        --fgColor-link: #ffffff !important;
        --fgColor-onEmphasis: #ffffff !important;

        --borderColor-default: #111111 !important;
        --borderColor-muted: #080808 !important;
        --borderColor-accent-muted: #111111 !important;
        --borderColor-accent-emphasis: #ffffff !important;

        --bgColor-accent-emphasis: #050505 !important;
        --bgColor-accent-muted: #080808 !important;

        --fgColor-success: #ffffff !important;
        --bgColor-success-emphasis: #050505 !important;
        --bgColor-success-muted: #080808 !important;
        --borderColor-success-emphasis: #ffffff !important;
        --borderColor-success-muted: #111111 !important;

        --fgColor-open: #ffffff !important;
        --bgColor-open-emphasis: #050505 !important;
        --bgColor-open-muted: #080808 !important;
        --borderColor-open-emphasis: #ffffff !important;
        --borderColor-open-muted: #111111 !important;

        --fgColor-done: #ffffff !important;
        --bgColor-done-emphasis: #050505 !important;
        --bgColor-done-muted: #080808 !important;
        --borderColor-done-emphasis: #ffffff !important;
        --borderColor-done-muted: #111111 !important;

        --fgColor-closed: #ffffff !important;
        --bgColor-closed-emphasis: #050505 !important;
        --bgColor-closed-muted: #080808 !important;
        --borderColor-closed-emphasis: #ffffff !important;
        --borderColor-closed-muted: #111111 !important;

        --fgColor-danger: #ffffff !important;
        --bgColor-danger-emphasis: #050505 !important;
        --bgColor-danger-muted: #080808 !important;
        --borderColor-danger-emphasis: #ffffff !important;
        --borderColor-danger-muted: #111111 !important;

        --fgColor-attention: #ffffff !important;
        --bgColor-attention-emphasis: #050505 !important;
        --bgColor-attention-muted: #080808 !important;
        --borderColor-attention-emphasis: #ffffff !important;
        --borderColor-attention-muted: #111111 !important;

        --fgColor-severe: #ffffff !important;
        --bgColor-severe-emphasis: #050505 !important;
        --bgColor-severe-muted: #080808 !important;
        --borderColor-severe-emphasis: #ffffff !important;
        --borderColor-severe-muted: #111111 !important;

        --fgColor-sponsors: #ffffff !important;
        --bgColor-sponsors-emphasis: #050505 !important;
        --bgColor-sponsors-muted: #080808 !important;
        --borderColor-sponsors-emphasis: #ffffff !important;
        --borderColor-sponsors-muted: #111111 !important;
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
    .btn,
    button {
        background: #050505 !important;
        background-image: none !important;
        border-color: #111 !important;
        color: #fff !important;
    }

    .Button:hover,
    .btn:hover,
    button:hover {
        background: #0a0a0a !important;
        background-image: none !important;
        border-color: #222 !important;
        color: #fff !important;
    }

    .Button svg,
    .Button svg *,
    .btn svg,
    .btn svg *,
    button svg,
    button svg * {
        color: #fff !important;
        fill: currentColor !important;
        stroke: currentColor !important;
    }

    .btn-primary,
    .btn-primary:hover,
    .bgColor-accent-emphasis,
    .bgColor-accent-emphasis:hover,
    .bgColor-success-emphasis,
    .bgColor-success-emphasis:hover,
    .bgColor-open-emphasis,
    .bgColor-open-emphasis:hover,
    .bgColor-done-emphasis,
    .bgColor-done-emphasis:hover,
    .bgColor-closed-emphasis,
    .bgColor-closed-emphasis:hover {
        background: #050505 !important;
        background-image: none !important;
        border-color: #111 !important;
        color: #fff !important;
    }

    .btn-primary svg,
    .btn-primary svg *,
    .bgColor-accent-emphasis svg,
    .bgColor-accent-emphasis svg *,
    .bgColor-success-emphasis svg,
    .bgColor-success-emphasis svg *,
    .bgColor-open-emphasis svg,
    .bgColor-open-emphasis svg *,
    .bgColor-done-emphasis svg,
    .bgColor-done-emphasis svg *,
    .bgColor-closed-emphasis svg,
    .bgColor-closed-emphasis svg * {
        color: #fff !important;
        fill: #fff !important;
        stroke: #fff !important;
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