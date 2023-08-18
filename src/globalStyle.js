import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
    }
    


    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => {return props.$tertiaryColor}};
        height: 100vh;
        transition: background-color 0.5s ease-in-out;
        font-family: 'Poppins', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    }
`