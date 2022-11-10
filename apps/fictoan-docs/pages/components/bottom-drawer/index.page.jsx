//  EXTERNAL DEPS
import React, { useState } from "react";

//  INTERFACE
import {
	Element,
	Row,
	Portion,
	Badge,
	CodeBlock,
	Heading,
	HRule,
	Table,
	Text,
	BottomDrawer,
	Button,
} from "fictoan-react";

// COMPONENTS
import { BottomDrawerStyled } from "./BottomDrawer.styled";
import { sampleBottomDrawer, sampleBadgeSibling } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const BottomDrawerDocs = () => {
	useDocumentTitle("CheckBox — Fictoan");
	useScrollToTop();

	return (
		<BottomDrawerStyled>
			<Row sidePadding="huge" marginTop="medium" marginBottom="small">
				<Portion>
					<Heading as="h2" className="text-hue">
						BottomDrawer
					</Heading>
				</Portion>
			</Row>

			<Row sidePadding="huge">
				<Portion>
					<Heading as="h3" marginBottom="micro">
						Props
					</Heading>

					<Heading as="h5" marginBottom="nano">
						Custom props
					</Heading>
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
									<code>isOpen</code>
								</td>

								<td>State of BottomDrawer</td>

								<td>
									<code>boolean</code>
								</td>

								<td>
									<code>false</code>
								</td>
							</tr>

							<tr>
								<td>
									<code>overlayOpacity</code>
								</td>

								<td>some content ...</td>

								<td>
									<code>number</code>
								</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>overlayColour</code>
								</td>

								<td>some content ...</td>

								<td>
									<code>string</code>
								</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>closeOnClickOutside</code>
								</td>

								<td>Should it close on Click Outside</td>

								<td>
									<code>boolean</code>
								</td>

								<td>
									<code>false</code>
								</td>
							</tr>

							<tr>
								<td>
									<code>onCloseCallback</code>
								</td>

								<td>Callback function to call when close</td>

								<td>Callback function</td>

								<td>&mdash;</td>
							</tr>
						</tbody>
					</Table>
				</Portion>
			</Row>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  DEFAULT CHECKBOX */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="default">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Default BottomDrawer
						</Heading>

						<Text marginBottom="micro">
							The <code>BottomDrawer</code> is a something ....
						</Text>

						<CodeBlock
							source={sampleBottomDrawer}
							language="jsx"
							marginBottom="micro"
						/>

						<Text marginBottom="micro">
							The above code will render a simple BottomDrawer like so&mdash;
						</Text>
					</Portion>
				</Row>
			</Element>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  THEMING  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="theming">
				<Row sidePadding="huge" marginBottom="small">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Theming
						</Heading>

						<Text>Nothing here.</Text>
					</Portion>
				</Row>
			</Element>
		</BottomDrawerStyled>
	);
};

export default BottomDrawerDocs;
