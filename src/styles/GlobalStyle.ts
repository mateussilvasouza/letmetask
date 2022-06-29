import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        font-family: Roboto, Poppins, sans-serif
    }
    
    
`
export default GlobalStyle;