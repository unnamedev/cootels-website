import {createGlobalStyle} from "styled-components"

/* Creating a global style that will be applied to the entire document. */
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Google Sans";
    src: url("/assets/fonts/GoogleSans/GoogleSans-Bold.woff2") format("woff2"),
    url("/assets/fonts/GoogleSans/GoogleSans-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Google Sans";
    src: url("/assets/fonts/GoogleSans/GoogleSans-Medium.woff2") format("woff2"),
    url("/assets/fonts/GoogleSans/GoogleSans-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Google Sans";
    src: url("/assets/fonts/GoogleSans/GoogleSans-Regular.woff2") format("woff2"),
    url("/assets/fonts/GoogleSans/GoogleSans-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  // 💡 Reset
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  ol,
  ul {
    list-style: none;
  }

  p {
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -ms-hyphenate-limit-chars: 6 3 3;
    -ms-hyphenate-limit-lines: 2;
    -ms-hyphenate-limit-zone: 8%;
    hyphens: auto;
    hyphenate-limit-chars: 6 3 3;
    hyphenate-limit-lines: 2;
    hyphenate-limit-last: always;
    hyphenate-limit-zone: 8%;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  textarea {
    white-space: revert;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html,
  .page {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  // 💡 Variables
  :root {
    --base-font-family: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    --base-color: #848FAC;
    --base-color-1: #192252;
    --base-color-2: #0E1734;
  }

  // 💡 Globals
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100%;
    position: relative;
    overflow-x: hidden;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    line-height: 24px;
    font-family: var(--base-font-family);
    font-weight: 400;
    color: var(--base-color);

    @media (min-width: 992px) {
      font-size: 18px;
      line-height: 27px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--base-color-1);
  }
`