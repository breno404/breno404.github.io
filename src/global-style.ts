import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`

*{
    margin: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

html{
    scroll-behavior: smooth;
}
`;

export const dark = {}
export const light = {}

export default GlobalStyle;
