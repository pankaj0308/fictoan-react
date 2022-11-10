//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import {
	Button,
	CodeBlock,
	Element,
	Heading,
	HRule,
	Portion,
	Row,
	Spinner,
	Table,
	Text,
	Tooltip,
} from "fictoan-react";

// COMPONENTS
import { TooltipDocsStyled } from "./Tooltip.styled";
import { sampleTooltip } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const SidebarDocs = () => {
	useDocumentTitle("Tooltip — Fictoan");
	useScrollToTop();

	return (
		<TooltipDocsStyled>
			<Row sidePadding="huge" marginTop="medium" marginBottom="small">
				<Portion>
					<Heading as="h2" className="text-hue">
						Tooltip
					</Heading>
				</Portion>
			</Row>

			<Row sidePadding="huge">
				<Portion>
					<Heading as="h3" marginBottom="micro">
						Props
					</Heading>

					<Heading as="h5" marginBottom="micro">
						Custom props
					</Heading>

					{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
					{/*  TOOLTIP PROPS  */}
					{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
					<Element as="div">
						<Table bordersFor="both" padding="tiny" isFullWidth>
							<thead className="bg-slate-70">
								<tr>
									<td className="weight-600">Prop</td>
									<td className="weight-600">Description</td>
									<td className="weight-600">Values</td>
									<td className="weight-600">Default</td>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>
										<code>label</code>
									</td>

									<td>label of Tooltip</td>

									<td>
										<code>string</code>
									</td>

									<td>&mdash;</td>
								</tr>

								<tr>
									<td>
										<code>position</code>
									</td>

									<td>position of the Tooltip</td>

									<td>
										<code>top</code> <code>bottom</code> <code>left</code>{" "}
										<code>right</code>
									</td>

									<td>
										<code>bottom</code>
									</td>
								</tr>

								<tr>
									<td>
										<code>children</code>
									</td>

									<td>children of the Tooltip</td>

									<td>any component</td>

									<td>&mdash;</td>
								</tr>
							</tbody>
						</Table>

						<HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
					</Element>
				</Portion>
			</Row>

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  DEFAULT TOOLTIP  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="default">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Default Tooltip
						</Heading>

						<Text marginBottom="micro">
							The <code>Tooltip</code> is a element thats shows when hover over
							a component or element.
						</Text>

						<CodeBlock source={sampleTooltip} language="jsx" />

						<Text marginTop="micro" marginBottom="micro">
							The above code will display the default <code>Tooltip</code>,
							which looks like this&mdash;
						</Text>

						<Tooltip label="This is Tooltip">
							<Button kind="secondary">Hover on me!</Button>
						</Tooltip>

						<Text marginTop="small">
							Note: Children of <code>Tooltip</code> can be any element or
							component.
						</Text>
					</Portion>
				</Row>
			</Element>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  THEMING  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="theming">
				<Row sidePadding="huge" marginBottom="small">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Theming
						</Heading>

						<Text>None</Text>
					</Portion>
				</Row>
			</Element>
		</TooltipDocsStyled>
	);
};

export default SidebarDocs;
