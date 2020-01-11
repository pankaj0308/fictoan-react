import styled from "styled-components";

export const FormItemGroupStyled = styled.div`
    display        : flex;
    flex-direction : row;
    flex-wrap      : wrap;
    width          : 100%;

    input { align-self : flex-end; }

    & > .ff-form-unit {
        flex           : 1 1 0;
        flex-direction : row;
        margin-bottom  : 24px;
    }

    & > label {
        flex  : 1 1 100%;
        order : -1;
    }

    & > .ff-form-unit:not(:last-of-type) { margin-right : 24px; }

    @media screen and (max-width: 520px) {
        &:not(.retain-layout) > .ff-form-unit {
            flex         : 1 1 auto;
            margin-right : 0 !important;
        }

        &:not(.retain-layout) > .ff-form-unit:not(:last-child) { margin-bottom : 16px; }
    }

    & > .ff-form-question {
        flex       : 1 0 0;
        align-self : flex-start;
    }

    & > .ff-form-answers { flex : 3 1 0; }

    /* .ff-form .ff-form-unit, */
    /* .ff-form .ff-input-group { margin-bottom : 40px; } */

    /* .ff-input-group > .ff-form-unit, */
    /* .ff-form > .ff-input-group:last-of-type:not(:only-of-type) { margin-bottom : 0; } */
`