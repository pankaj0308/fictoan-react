import React, { HTMLProps, ElementType } from "react";

import { createClassName } from "src/utils/classNames";

import { BaseProps } from "./typings";

export interface BaseComponentProps extends BaseProps {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};

export const BaseComponent = <K extends {}>({
    Element = "div",
    baseClassName,
    className,
    // size,
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
    ...props
}: HTMLProps<K> & BaseComponentProps) => (
        <Element {...props} className={
            createClassName([
                baseClassName,
                className,
                // size && `size-${size}`,
                hideOnMobile,
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
            ])
        }
        />
    );
