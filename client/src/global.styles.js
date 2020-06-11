import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Oswald', sans-serif;
        padding: 20px 60px;
        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    * {
        box-sizing: border-box;
    }

    // .logo {
    //     width: 50px;
    //     height: 50px;
    // }
`