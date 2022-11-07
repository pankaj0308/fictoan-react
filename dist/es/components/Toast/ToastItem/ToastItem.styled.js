import t from"styled-components";import{ToastsWrapperStyled as e}from"../ToastsWrapper/ToastsWrapper.styled.js";import"../../Sidebar/SidebarWrapper/SidebarWrapper.styled.js";import"../../Sidebar/SidebarHeader/SidebarHeader.styled.js";import"../../Sidebar/SidebarItem/SidebarItem.styled.js";import"../../Sidebar/SidebarItemText/SidebarItemText.styled.js";import"../../Sidebar/SidebarItemIcon/SidebarItemIcon.styled.js";import"../../Sidebar/SidebarFooter/SidebarFooter.styled.js";import"../../ContentWrapper/ContentWrapper.styled.js";const r=t.div.withConfig({displayName:"ToastItemStyled",componentId:"-13j8mod"})`position:relative;display:flex;width:fit-content;height:fit-content;border-radius:${t=>t.theme.inputField.default.borderRadius};background-color:${t=>t.theme.toast.bg};transition:all 0.4s;padding:8px 16px;p{color:${t=>t.theme.toast.text};}${e}.top &{transform:translateY(-8vh);}${e}.top &.visible{transform:translateY(8vh);}${e}.bottom &{transform:translateY(8vh);}${e}.bottom &.visible{transform:translateY(-8vh);}`;export{r as ToastItemStyled};
//# sourceMappingURL=ToastItem.styled.js.map
