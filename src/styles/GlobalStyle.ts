import { createGlobalStyle } from "styled-components";
import Handwriting from "../fonts/Handwriting.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Handwriting";
        src : local('Handwriting'), local('Handwriting');
        font-style: normal;
        src: url(${Handwriting}) format('truetype')
    }
    body {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
        font-family: Handwriting;
    }
`;

export default GlobalStyle;
