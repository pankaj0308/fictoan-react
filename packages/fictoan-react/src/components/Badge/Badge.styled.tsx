import styled from "styled-components";

import { BadgeProps } from "./Badge";
import { globalVariables } from "../../styles/theme";

export const BadgeStyled = styled.mark`
    position            : relative;
    font-family         : ${(props : BadgeProps) => props.theme.button.font};
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    text-decoration     : none;
    transition          : all 0.2s ease-in-out;
    background-position : center;
    user-select         : none;
    width               : fit-content;
    height              : fit-content;

    // To make sure a button’s children
    // don’t style themselves like a douchebag
    > * {
        all : unset;
    }

    &.shape-rounded { border-radius : ${globalVariables.borderWidth}; }

    &.shape-curved { border-radius : 5000px; }

    &[class*="border-"] { border-width : ${globalVariables.borderWidth}; }

    &.border-none { border-width : 0 !important; }

    //  DIFFERENT SIZES  //////////////////////////////////////////////////////
    &.size-tiny {
        padding   : 2px 8px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -2)}em;
    }

    &.size-small {
        padding   : 3px 10px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -1)}em;
    }

    &.size-medium {
        padding   : 4px 12px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 1)}em;
    }

    &.size-large {
        padding   : 6px 16px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 2)}em;
    }

    &.size-huge {
        padding   : 8px 20px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 4)}em;
    }
`;
