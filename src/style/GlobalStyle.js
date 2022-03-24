import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: #d4e6b0; */
    }

    *:focus {
        outline: none;
    }
`;
