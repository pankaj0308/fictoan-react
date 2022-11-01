import styled from "styled-components";

export const SidebarStyled = styled.div`
     .active-link {
        position : relative;
    }

    .active-link::before {
        display                     : block;
        position                    : absolute;
        width                       : 4px;
        height                      : 100%;
        top                         : 0px;
        left                        : 0px;
        content                     : "";
        border-top-right-radius     : 4px;
        border-bottom-right-radius  : 4px;
        background-color            : ${(props) => props.theme.sidebar.isCollapsed.label.bg};
    }
    .active-link p{
        color   : ${(props) => props.theme.sidebar.isCollapsed.label.bg};
    }
    .active-link svg {
        stroke : ${(props) => props.theme.sidebar.icons.stroked.isActive.line};
    }
`