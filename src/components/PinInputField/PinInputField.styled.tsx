import styled from "styled-components";

export const PinInputStyled = styled.div`
    display        : flex;
    flex-direction : row;

    &.spacing-none   { gap :    0; }
    &.spacing-nano   { gap :  2px; }
    &.spacing-micro  { gap :  4px; }
    &.spacing-tiny   { gap :  6px; }
    &.spacing-small  { gap :  8px; }
    &.spacing-medium { gap : 12px; }
    &.spacing-large  { gap : 16px; }
    &.spacing-huge   { gap : 24px; }

    input { font-weight : bold; }

    & > div {
        margin-bottom : 0 !important;
        align-items   : center;
    }

    .pin-input-field { text-align : center; }
`;
