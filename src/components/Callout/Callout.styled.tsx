import transparentize from "polished/lib/color/transparentize";
import styled from "styled-components";

import { defaultColours } from "../../styles/DefaultColours";
import { globalVariables } from "../../styles/theme";

export const CalloutStyled = styled.div`
    display       : block;
    border-width  : 0 0 0 5px;
    word-break    : break-word;
    border-style  : solid;
    padding       : 16px;
    border-radius : ${globalVariables.borderRadius};

    &.info {
        background-color : ${transparentize(0.80, defaultColours.blue)};
        border-color     : ${defaultColours.blue};
    }

    &.success {
        background-color : ${transparentize(0.80, defaultColours.green)};
        border-color     : ${defaultColours.green};
    }

    &.warning {
        background-color : ${transparentize(0.80, defaultColours.amber)};
        border-color     : ${defaultColours.amber};
    }

    &.error {
        background-color : ${transparentize(0.80, defaultColours.red)};
        border-color     : ${defaultColours.red};
    }
`;
