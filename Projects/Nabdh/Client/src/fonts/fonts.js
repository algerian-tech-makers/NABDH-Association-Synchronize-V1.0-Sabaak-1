import { createGlobalStyle } from "styled-components";
import lateef from "./Lateef/Lateef-Regular.ttf";
import Ruqaa from "./Ruqaa/ArefRuqaa-Regular.ttf";
import RuqaaBold from "./Ruqaa/ArefRuqaa-Bold.ttf";
export default createGlobalStyle`
    @font-face {
        font-family: 'lateef';
        src: url(${lateef}) format("opentype");
    }
    @font-face {
        font-family: 'Ruqaa';
        src: url(${Ruqaa}) format("opentype");
    }
    @font-face {
        font-family: 'Ruqaa-bold';
        src: url(${RuqaaBold}) format("opentype");
    }
`;
