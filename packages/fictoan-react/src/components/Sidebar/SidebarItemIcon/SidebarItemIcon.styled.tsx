import styled from "styled-components";

import { SidebarItemIconProps } from "./SidebarItemIcon";


export const SidebarItemIconStyled = styled.div`
    display      : grid;
    width        : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.size};
    height       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.size};
    align-self   : center;
    justify-self : center;

    // LINE ICON  =============================================================
    &.icon-stroked svg {
        fill         : none;
        stroke       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.stroked.default.line};
        stroke-width : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.stroked.thickness};
    }

    &:hover.icon-stroked svg {
        fill         : none;
        stroke       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.stroked.onHover.line};
    }

    // FILL ICON  =============================================================
    &.icon-filled svg {
        stroke : none;
        fill   : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.filled.default.bg};
    }

    &:hover.icon-filled svg {
        stroke : none;
        fill   : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.filled.onHover.bg};
    }
`;
