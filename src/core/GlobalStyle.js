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
        background-color: ${({ theme }) => theme.color.whiteLilac};
        font-family: 'Inter', sans-serif;
    }
    `;
