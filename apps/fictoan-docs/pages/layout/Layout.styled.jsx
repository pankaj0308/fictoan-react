//  EXTERNAL DEPS
import styled from "styled-components";


export const LayoutStyled = styled.article`
    .screen-desktop {
        position      : relative;
        border-radius : 8px;
        height        : 300px;
        overflow      : hidden;

        @media all and (max-width : 900px) {
            overflow-y : scroll;
        }
    }

    .screen-short { height : 160px; }
    .screen-tall  { height : 600px; }
    .screen-extra-tall  { height : auto; }

    .free-size { height : auto; }

    .title-bar {
        position : sticky;
        top      : 0;
        left     : 0;
        width    : 100%;
        height   : 32px;
        display  : flex;
        padding  : 2px 8px;

        * {
            align-self    : center;
            line-height   : 0;
            margin-bottom : 4px;
        }
    }

    .demo-parent-row {
        position : relative;
    }

    .demo-row {
        position : absolute;
        top      : 120px;
    }
`;
