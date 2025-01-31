import { ElementType, HTMLProps } from "react";

import { defaultColourProps } from "../../styles/DefaultColourProps";
import { customColours, FictoanTheme } from "../../styles/theme";

// TODO: Remove once https://github.com/microsoft/TypeScript/pull/40002 ships with TS 4.1.0
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>;
};
export type ThemeType = DeepPartial<typeof FictoanTheme>;

// prettier-ignore
export interface ThemeProps {
    theme ? : ThemeType;
}

// prettier-ignore
export type SpacingTypes    = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export type ShadowTypes     = "none" | "mild" | "soft" | "hard";
export type ShapeTypes      = "rounded" | "curved";
export type OpacityTypes    = "00" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
export type WeightTypes     = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export type ColourPropTypes = typeof defaultColourProps[number] | keyof typeof customColours | "";

// prettier-ignore
export interface CommonProps extends ThemeProps {
    // STYLING ================================================================
    bgColor      ? : ColourPropTypes;
    bgColour     ? : ColourPropTypes;
    textColor    ? : ColourPropTypes;
    textColour   ? : ColourPropTypes;
    borderColor  ? : ColourPropTypes;
    borderColour ? : ColourPropTypes;
    fillColor    ? : ColourPropTypes;
    fillColour   ? : ColourPropTypes;
    strokeColor  ? : ColourPropTypes;
    strokeColour ? : ColourPropTypes;
    shadow       ? : ShadowTypes;
    shape        ? : ShapeTypes;
    opacity      ? : OpacityTypes;

    // LAYOUT =================================================================
    marginTop              ? : SpacingTypes;
    marginRight            ? : SpacingTypes;
    marginBottom           ? : SpacingTypes;
    marginLeft             ? : SpacingTypes;
    margin                 ? : SpacingTypes;
    paddingTop             ? : SpacingTypes;
    paddingRight           ? : SpacingTypes;
    paddingBottom          ? : SpacingTypes;
    paddingLeft            ? : SpacingTypes;
    padding                ? : SpacingTypes;
    horizontallyCentreThis ? : boolean;
    horizontallyCenterThis ? : boolean;
    verticallyCentreItems  ? : boolean;
    verticallyCenterItems  ? : boolean;
    pushItemsToEnds        ? : boolean;
    isFullWidth            ? : boolean;
    isFullHeight           ? : boolean;

    // RESPONSIVENESS =========================================================
    hideOnMobile              ? : boolean;
    showOnlyOnMobile          ? : boolean;
    hideOnTabletPortrait      ? : boolean;
    showOnlyOnTabletPortrait  ? : boolean;
    hideOnTabletLandscape     ? : boolean;
    showOnlyOnTabletLandscape ? : boolean;
    hideOnDesktop             ? : boolean;
    showOnlyOnDesktop         ? : boolean;

    // TEXT ===================================================================
    weight ? : WeightTypes;

    // MISC ===================================================================
    classNames ? : string[];
}

export interface CommonAndHTMLProps<T extends {}>
    extends CommonProps, Omit<HTMLProps<T>, "as" | "size" | "ref" | "shape"> {}

// prettier-ignore
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref" | "shape"> {
    as          : ElementType;
    className ? : string;
}
