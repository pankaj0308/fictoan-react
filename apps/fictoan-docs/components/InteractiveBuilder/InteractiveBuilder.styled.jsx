import styled from "styled-components";


export const InteractiveBuilderStyled = styled.div`
    #guinea-pig-card {
        transition : all 0.4s cubic-bezier(1, 0, 0, 1);
        position   : sticky;
        top        : 16px;
    }

    .colours-list-wrapper {
        display               : grid;
        grid-template-columns : repeat(10, 1fr);
        grid-gap              : 2px;
        height                : 120px;
        overflow              : scroll;

        &:hover {
            height     : fit-content;
            box-shadow : 0 6px 6px rgba(0, 0, 0, 0.024),
            0 24px 18px rgba(0, 0, 0, 0.040),
            0 100px 80px rgba(0, 0, 0, 0.072);

        }

        & > div {
            border-radius : 8px;
            height        : 24px;
        }
    }
`;
