import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,*::after, *::before, html, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-family: "Roboto",sans-serif
    }
`;
