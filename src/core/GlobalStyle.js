import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        transition: 0.5s;
        background: ${({ theme }) => theme.color.site.background};
        color: ${({ theme }) => theme.color.site.text};
        font-family: 'Inter', sans-serif;
        
    }
    `;
