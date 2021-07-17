import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }
    body {
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: ${theme.colors.mainBg};
      color: #FFFFFF;
    }

`

export default GlobalStyles
