//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import {
	CodeBlock,
	Element,
	Heading,
	HRule,
	Portion,
	Row,
	Spinner,
	Table,
	Text,
} from "fictoan-react";

// COMPONENTS
import { SpinnerDocsStyled } from "./Spinner.styled";
import { sampleSpinner, sampleSpinnerTheme } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const SidebarDocs = () => {
	useDocumentTitle("Spinner — Fictoan");
	useScrollToTop();

	return (
		<SpinnerDocsStyled>
			<Row sidePadding="huge" marginTop="medium" marginBottom="small">
				<Portion>
					<Heading as="h2" className="text-hue">
						Spinner
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
					{/*  SPINNER PROPS  */}
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
										<code>size</code>
									</td>

									<td>size of the spinner</td>

									<td>
										<code>tiny</code> <code>small</code> <code>medium</code>{" "}
										<code>large</code> <code>huge</code>
									</td>

									<td>
										<code>medium</code>
									</td>
								</tr>
							</tbody>
						</Table>

						<HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
					</Element>
				</Portion>
			</Row>

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  DEFAULT SPINNER  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="default">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Default Spinner
						</Heading>

						<Text marginBottom="micro">
							The <code>Spinner</code> is a element thats shows loading state.
						</Text>

						<CodeBlock source={sampleSpinner} language="jsx" />

						<Text marginTop="micro" marginBottom="micro">
							The above code will display the default <code>Spinner</code>,
							which looks like this&mdash;
						</Text>

						<Spinner />
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

						<CodeBlock source={sampleSpinnerTheme} language="css" />
					</Portion>
				</Row>
			</Element>
		</SpinnerDocsStyled>
	);
};

export default SidebarDocs;
