import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Aesop';
    src: url('../static/fonts/Aesop-Light.woff2') format('woff2'),
    url('../static/fonts/Aesop-Light.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Aesop';
    src: url('../static/fonts/Aesop-Medium.woff2') format('woff2'),
    url('../static/fonts/Aesop-Medium.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Aesop';
    src: url('../static/fonts/Aesop-Bold.woff2') format('woff2'),
    url('../static/fonts/Aesop-Bold.woff') format('woff');
    font-weight: 900;
  }


  body {
    margin: 0;
    padding: 1rem;
    background: #eef3f7;
    font-family: "Aesop", -apple-system, BlinkMacSystemFont, "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }

  html {
    /* Coral */
    --color-coral-35: hsl(3, 96%, 35%);
    --color-coral-40: hsl(3, 96%, 40%);
    --color-coral-55: hsl(3, 96%, 55%);
    --color-coral-65: hsl(3, 96%, 65%);

    /* Denim */
    --color-denim-10: hsl(213, 68%, 10%);
    --color-denim-15: hsl(213, 68%, 15%);
    --color-denim-25: hsl(213, 68%, 25%);
    --color-denim-30: hsl(213, 68%, 30%);
    --color-denim-35: hsl(213, 68%, 35%);
    --color-denim-45: hsl(213, 68%, 45%);
    --color-denim-65: hsl(213, 68%, 65%);

    /* London */
    --color-london-10: hsl(202, 35%, 10%);
    --color-london-15: hsl(202, 35%, 15%);
    --color-london-20: hsl(202, 35%, 20%);
    --color-london-25: hsl(202, 35%, 25%);
    --color-london-35: hsl(202, 35%, 35%);
    --color-london-45: hsl(202, 35%, 45%);
    --color-london-75: hsl(202, 35%, 75%);
    --color-london-80: hsl(202, 35%, 80%);
    --color-london-90: hsl(202, 35%, 90%);
    --color-london-95: hsl(202, 35%, 95%);

    /* White */
    --color-white-0: hsl(0, 0%, 0%);
    --color-white-10: hsl(0, 0%, 10%);
    --color-white-30: hsl(0, 0%, 30%);
    --color-white-35: hsl(0, 0%, 35%);
    --color-white-40: hsl(0, 0%, 40%);
    --color-white-45: hsl(0, 0%, 45%);
    --color-white-65: hsl(0, 0%, 65%);
    --color-white-85: hsl(0, 0%, 85%);
    --color-white-90: hsl(0, 0%, 90%);
    --color-white-95: hsl(0, 0%, 95%);
    --color-white-100: hsl(0, 0%, 100%);

    --color-success-15: hsl(160, 100%, 15%);
    --color-success-30: hsl(160, 100%, 30%);

    /* Validation */
    --color-validation-error: hsl(3, 96%, 35%);
    --color-validation-warning: hsl(45, 100%, 50%);
    --color-validation-success: var(--color-success-30);
  }
`