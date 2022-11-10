//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import {
	CodeBlock,
	Element,
	Heading,
	HRule,
	Portion,
	RadioButton,
	RadioGroup,
	Row,
	Table,
	Text,
} from "fictoan-react";

// COMPONENTS
import { RadioComponentDocsStyled } from "./RadioComponent.styled";
import {
	sampleRadioButton,
	sampleRadioButtonTheming,
	sampleRadioGroup,
} from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const RadioButtonDocs = () => {
	useDocumentTitle("Radio Component — Fictoan");
	useScrollToTop();

	return (
		<RadioComponentDocsStyled>
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  RADIO BUTTON PROPS  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}

			<Row sidePadding="huge" marginTop="medium" marginBottom="small">
				<Portion>
					<Heading as="h2" className="text-hue">
						Radio Button
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
					<Table bordersFor="both" padding="tiny" isfullwidth>
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
									<code>id</code>
								</td>

								<td>Unique string for differentiating</td>

								<td>string</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>label</code>
								</td>

								<td>Input label</td>

								<td>string</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>name</code>
								</td>

								<td>Required to make a group of Radio Buttons</td>

								<td>string</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>value</code>
								</td>

								<td>Radio Buttons value</td>

								<td>string</td>

								<td>&mdash;</td>
							</tr>
						</tbody>
					</Table>

					<HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

					<Heading as="h5" marginBottom="nano">
						Shared props
					</Heading>

					<Text>
						All props of <code>Input Field</code>
					</Text>
				</Portion>
			</Row>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  RADIO GROUP PROPS  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}

			<Row sidePadding="huge" marginTop="nano" marginBottom="small">
				<Portion>
					<Heading as="h2" className="text-hue">
						Radio Group
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
					<Table bordersFor="both" padding="tiny" isfullwidth>
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
									<code>id</code>
								</td>

								<td>Unique id of the Radio Group</td>

								<td>string</td>

								<td>text</td>
							</tr>

							<tr>
								<td>
									<code>options</code>
								</td>

								<td>Props for each Radio Button inside the Radio Group</td>

								<td>Array of Objects</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>label</code>
								</td>

								<td>Radio Group label</td>

								<td>string</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>name</code>
								</td>

								<td>Radio Group name</td>

								<td>string</td>

								<td>&mdash;</td>
							</tr>
						</tbody>
					</Table>

					<HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

					<Heading as="h5" marginBottom="nano">
						Shared props
					</Heading>

					<Text>
						All props of <code>Input Field</code>
					</Text>
				</Portion>
			</Row>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  DEFAULT RADIO BUTTON */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="default">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Default radio button
						</Heading>

						<Text marginBottom="micro">
							The <code>RadioButton</code> is a modified default{" "}
							<code>Input type=&quot;radio&quot;</code> element to allow for
							better usability and styling.
						</Text>

						<CodeBlock source={sampleRadioButton} language="jsx" />

						<Text marginTop="micro" marginBottom="micro">
							The above code will display the default <code>RadioButton</code>,
							which looks like this&mdash;
						</Text>

						<RadioButton id="radio-1" name="choices" value="yes" label="Yes" />

						<RadioButton id="radio-2" name="choices" value="no" label="No" />

						<RadioButton
							id="radio-3"
							name="choices"
							value="maybe"
							label="Maybe"
						/>
					</Portion>
				</Row>
			</Element>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  DEFAULT RADIO GROUP */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="default">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3" marginBottom="tiny">
							Default Radio Group
						</Heading>

						<Text marginBottom="micro">
							The <code>RadioGroup</code> is a modified default{" "}
							<code>RadioButton</code> element to allow group Radio Buttons
						</Text>

						<CodeBlock source={sampleRadioGroup} language="jsx" />

						<Text marginTop="micro" marginBottom="micro">
							The above code will display the default <code>RadioGroup</code>,
							which looks like this&mdash;
						</Text>
						<RadioGroup
							id="radio-group"
							name="group"
							label="Options"
							options={[
								{
									id: "radio-1",
									label: "Option A",
									value: "Option A",
								},
								{
									id: "radio-2",
									label: "Option B",
									value: "Option B",
								},
							]}
						/>
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

						<CodeBlock source={sampleRadioButtonTheming} language="css" />
					</Portion>
				</Row>
			</Element>
		</RadioComponentDocsStyled>
	);
};

export default RadioButtonDocs;
