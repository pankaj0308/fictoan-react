import{_ as e}from"../../external/Element.js";import t,{useState as o}from"react";import{Card as r}from"../Card/Card.js";import{TooltipStyled as n}from"./Tooltip.styled.js";import"../Card/Card.styled.js";import"styled-components";import"../../external/theme.js";import"../../external/DefaultColours.js";const a=/*#__PURE__*/t.forwardRef(((a,s)=>{var{label:l,position:i="bottom",children:m}=a,p=e(a,["label","position","children"]);const[d,c]=o(!1);/*#__PURE__*/
return t.createElement(n,{onMouseOver:()=>{c(!0)},onMouseOut:()=>{c(!1)}},l&&d&&/*#__PURE__*/t.createElement(r,Object.assign({className:`tooltip ${i}`,paddingLeft:"nano",paddingRight:"nano",borderColor:"transparent",ref:s},p),l),m)}));export{a as Tooltip};
//# sourceMappingURL=Tooltip.js.map
