import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* master reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
`