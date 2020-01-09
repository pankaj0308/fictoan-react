import styled from "styled-components";

export const SidebarSublinkGroupStyled = styled.div`
    margin           : 0;
    background-color : rgba($colorSlate-10, 0.64);
    box-shadow       : inset 0 2px 2px -2px rgba(0, 0, 0, 0.16);

    a.active { display : block; }

    .sidebar-sublink {
        color       : rgba($colorShade, 1);
        font-weight : 400;
        margin      : 4px 0 0 24px;
    }
`