import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *,*::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0 auto;
        width: 80%;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }

`;
