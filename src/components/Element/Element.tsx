import React, { HTMLProps } from "react";

import { createClassName } from "src/utils/classNames";

import { ElementProps } from "./constants";

export const Element = <K extends {}>({
    as: Component,
    baseClassName,
    className,
    size,
    fullWidth,
    fullHeight,
    bgColor,
    textColor,
    hideOnMobile,
    showOnlyOnMobile,
    hideOnTabPT,
    showOnlyOnTabPT,
    hideOnTabLS,
    showOnlyOnTabLS,
    hideOnDesktop,
    showOnlyOnDesktop,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    ...props
}: ElementProps<K>) => (
        <Component {...props} className={
            createClassName([
                baseClassName,
                className,
                size && `size-${size}`,
                fullWidth && "full-width",
                fullHeight && "full-height",
                bgColor && `bg-${bgColor}`,
                textColor && `text-${textColor}`,
                hideOnMobile && "hide-on-mobile",
                showOnlyOnMobile && "show-only-on-mobile",
                showOnlyOnTabPT && "hide-on-tab-pt",
                showOnlyOnTabPT && "show-only-on-tab-pt",
                showOnlyOnTabLS && "hide-on-tab-ls",
                showOnlyOnTabLS && "show-only-on-tab-ls",
                hideOnDesktop && "hide-on-desktop",
                showOnlyOnDesktop && "show-only-on-desktop",
                marginTop && `margin-top-${marginTop}`,
                marginRight && `margin-right-${marginRight}`,
                marginBottom && `margin-bottom-${marginBottom}`,
                marginLeft && `margin-left-${marginLeft}`,
                margin && `margin-all-${margin}`,
                paddingTop && `padding-top-${paddingTop}`,
                paddingRight && `padding-right-${paddingRight}`,
                paddingBottom && `padding-bottom-${paddingBottom}`,
                paddingLeft && `padding-left-${paddingLeft}`,
                padding && `padding-all-${padding}`,
            ])
        } />
    );