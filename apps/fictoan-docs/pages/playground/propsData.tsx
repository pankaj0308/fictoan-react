import { Button, Card, Portion, Row } from "fictoan-react";
import { PropTypes, UpdatedComponentsobj } from "./playground.types";

export const RowProps: PropTypes[] = [
	{
		name: "sidePadding",
		value: ["nano", "micro", "tiny", "small", "medium", "large", "huge"],
	},
	{ name: "gutters", value: false },
	{ name: "retainLayoutOnTabletLandscape", value: false },
	{ name: "retainLayoutOnTabletPortrait", value: false },
	{ name: "retainLayoutOnMobile", value: false },
	{ name: "retainLayoutAlways", value: false },
];

export const SpanTypes = [
	"one-twelfth",
	"one-eighth",
	"one-sixth",
	"one-fourth",
	"one-third",
	"five-twelfth",
	"half",
	"seven-twelfth",
	"two-third",
	"three-fourth",
	"five-sixth",
	"seven-eighth",
	"eleven-twelfth",
	"whole",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
];

export const PortionProps: PropTypes[] = [
	{ name: "desktopSpan", value: SpanTypes },
	{ name: "tabletLandscapeSpan", value: SpanTypes },
	{ name: "tabletPortraitSpan", value: SpanTypes },
	{ name: "mobileSpan", value: SpanTypes },
	// isHorizontal        : false,
];

export const fictoanComponentProps = {
	Row: RowProps,
	Portion: PortionProps,
};

