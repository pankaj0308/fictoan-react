import React from "react";
import { useState } from "react";
import { isEqual } from "lodash-es";
import { v4 as uuid } from "uuid";

import {
	Button,
	Row,
	Portion,
	Card,
	SidebarFooter,
	SidebarHeader,
	SidebarItem,
	SidebarItemIcon,
	SidebarItemText,
	SidebarWrapper,
	Tabs,
	Text,
	Select,
} from "fictoan-react";

// ASSETS
import ThemeSwitchIcon from "../../assets/icons/theme.svg";
import FictoanLogo from "../../assets/images/logo.svg";
import FictoanIcon from "../../assets/images/logomark.svg";

// COMPONENTS
import { PlayGroundStyled } from "./playground.styled";
import { sidebarComponents } from "./sidebarData";
import {
	ComponentsObj,
	PropTypes,
	UpdatedComponentsobj,
} from "./playground.types";
import {
	addChildreninUI,
	getPropsValue,
	renderjsx,
	updatePropsinUI,
} from "./operations";
import { fictoanComponentProps } from "./propsData";

function PlayGround() {
	const [renderUI, setRenderUI] = useState([]);
	const [selectedComponent, setSelectedComponent] = useState(null);

	const buildUI = {
		Row: (id: string, children: UpdatedComponentsobj[], props: PropTypes[]) => {
			const allProps = props.reduce((result, current) => {
				result[current.name] = current.value;
				return result;
			}, {});
			return (
				<Row
					borderColor="red"
					padding="nano"
					id={id}
					{...allProps}
					onClick={(e) => {
						e.stopPropagation();
						setSelectedUIComponent({ name: "Row", id: id });
					}}
				>
					{typeof children === "object" && renderjsx(buildUI, children)}
				</Row>
			);
		},
		Portion: (
			id: string,
			children: UpdatedComponentsobj[],
			props: PropTypes[]
		) => {
			const allProps = props.reduce((result, current) => {
				result[current.name] = current.value;
				return result;
			}, {});
			return (
				<Portion
					borderColor="green"
					padding="nano"
					id={id}
					isHorizontal
					{...allProps}
					onClick={(e) => {
						e.stopPropagation();
						setSelectedUIComponent({ name: "Portion", id: id });
					}}
				>
					{typeof children === "object" && renderjsx(buildUI, children)}
				</Portion>
			);
		},
		Button: (id: string, children: UpdatedComponentsobj[]) => (
			<Button
				kind="primary"
				size="small"
				onClick={(e) => {
					e.stopPropagation();
					setSelectedUIComponent({ name: "Button", id: id });
				}}
			>
				s
			</Button>
		),
		Card: (id: string, children: UpdatedComponentsobj[]) => (
			<Card
				margin="nano"
				padding="small"
				onClick={(e) => {
					e.stopPropagation();
					setSelectedUIComponent({ name: "Card", id: id });
				}}
			>
				{typeof children === "object" && renderjsx(buildUI, children)}
			</Card>
		),
	};

	const [selectedUIComponent, setSelectedUIComponent] =
		useState<ComponentsObj>(null);

	const componentsOnClick = {
		Row: () => {
			setSelectedComponent("Row");
			if (selectedUIComponent) {
				const cloneObj = addChildreninUI(
					structuredClone(renderUI),
					{ name: "Row", id: uuid(), children: [], props: [] },
					selectedUIComponent?.id
				);
				setRenderUI(cloneObj);
				return;
			}
			setRenderUI((prev) => [
				...prev,
				{ name: "Row", id: uuid(), children: [], props: [] },
			]);
		},
		Portion: () => {
			setSelectedComponent("Portion");
			if (selectedUIComponent) {
				const cloneObj = addChildreninUI(
					structuredClone(renderUI),
					{ name: "Portion", id: uuid(), children: [], props: [] },
					selectedUIComponent.id
				);
				setRenderUI(cloneObj);
				return;
			}
			setRenderUI((prev) => [
				...prev,
				{ name: "Portion", id: uuid(), children: [], props: [] },
			]);
		},

		Button: () => {
			setSelectedComponent("Button");
			if (selectedUIComponent) {
				const cloneObj = addChildreninUI(
					structuredClone(renderUI),
					{ name: "Button", id: uuid(), children: [], props: [] },
					selectedUIComponent.id
				);
				setRenderUI(cloneObj);
				return;
			}
			setRenderUI((prev) => [
				...prev,
				{ name: "Button", id: uuid(), children: [], props: [] },
			]);
		},

		Card: () => {
			setSelectedComponent("Card");
			if (selectedUIComponent) {
				const cloneObj = addChildreninUI(
					renderUI,
					{ name: "Card", id: uuid(), children: [], props: [] },
					selectedUIComponent.id
				);
				setRenderUI(cloneObj);
				return;
			}
			setRenderUI([
				...renderUI,
				{ name: "Card", id: uuid(), children: [], props: [] },
			]);
		},
	};

	const componentsCustomProps = (component: { name: string; id: string }) => {
		const componentProp = fictoanComponentProps?.[component?.name];
		return (
			<>
				{componentProp?.map((item) => {
					if (Array.isArray(item.value)) {
						return (
							<>
								<Select
									label={item.name}
									key={item.name}
									onChange={(e) => {
										const cloneObj = updatePropsinUI(
											structuredClone(renderUI),
											{ name: item.name, value: e.currentTarget.value },
											selectedUIComponent?.id
										);
										setRenderUI(cloneObj);
									}}
									value={
										getPropsValue(
											renderUI,
											selectedUIComponent?.id,
											item.name
										) || item.value[0]
									}
									options={item.value.map((items) => ({
										name: items,
										value: items,
									}))}
								/>
							</>
						);
					}
				})}
				Custom
			</>
		);
	};
	return (
		<PlayGroundStyled>
			<SidebarWrapper
				id="docs-sidebar"
				// className={`${sidebarState === "collapsed" ? "collapsed" : ""} `}
			>
				<SidebarHeader isSticky>
					<div className="header-logo">
						<FictoanLogo />
					</div>

					<div className="header-icon">
						<FictoanIcon />
					</div>
				</SidebarHeader>
				{sidebarComponents.map((item) => (
					<SidebarItem
						key={item.title}
						onClick={() => componentsOnClick[item.title]()}
					>
						<SidebarItemIcon iconType="stroked">
							{/* <HomeIcon /> */}
						</SidebarItemIcon>
						<SidebarItemText weight="400" linkText={item.title} />
					</SidebarItem>
				))}

				{/*  FOOTER  =================================================  */}
				<SidebarFooter>
					<SidebarItem>
						<SidebarItemIcon iconType="stroked">
							<ThemeSwitchIcon />
						</SidebarItemIcon>

						<SidebarItemText weight="400" linkText="Theme" />
					</SidebarItem>
				</SidebarFooter>
			</SidebarWrapper>

			<section className="main">{renderjsx(buildUI, renderUI)}</section>
			<section>
				<SidebarWrapper id="properties-sidebar">
					<Tabs
						tabs={[
							{
								key: "tab1",
								label: "Custom props",
								content: selectedUIComponent
									? componentsCustomProps(selectedUIComponent)
									: "NONE",
							},
							{
								key: "tab2",
								label: "Shared props",
								content: <>Shared</>,
							},
						]}
					/>
				</SidebarWrapper>
			</section>
		</PlayGroundStyled>
	);
}

export default PlayGround;
