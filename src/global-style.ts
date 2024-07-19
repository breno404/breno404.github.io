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

#sobre{
    scroll-margin-top: 4rem;
}

#competencias{
    scroll-margin-top: 4rem;
}

#projetos{
    scroll-margin-top: 4rem;
}

`;



export default GlobalStyle;
