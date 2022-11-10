//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import {
	Element,
	Row,
	Portion,
	Heading,
	Text,
	HRule,
	InputField,
	Table,
	CodeBlock,
	FileUpload,
	PinInputField,
} from "fictoan-react";

// COMPONENTS
import { CardDocsStyled } from "./PinInputField.styled";
import {
	samplePinInput,
	samplePinInputMaskProp,
	sampleInputSpacingProps,
	samplePinInputOtpProp,
} from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const InputFieldDocs = () => {
	useDocumentTitle("PinInput field — Fictoan");
	useScrollToTop();

	return (
		<CardDocsStyled>
			<Row sidePadding="huge" marginTop="medium" marginBottom="small">
				<Portion>
					<Heading as="h2" className="text-hue">
						PinInput field
					</Heading>
				</Portion>
			</Row>

			<Row sidePadding="huge">
				<Portion>
					<Heading as="h3" marginBottom="micro">
						Props
					</Heading>

					{/*  CUSTOM PROPS  ///////////////////////////////////  */}
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
									<code>numberOfFields</code>
								</td>

								<td>Number of input fields</td>

								<td>number</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>mask</code>
								</td>

								<td>To mask the inputs</td>

								<td>boolean</td>

								<td>
									<code>false</code>
								</td>
							</tr>

							<tr>
								<td>
									<code>otp</code>
								</td>

								<td>If the Pin Input is OTP</td>

								<td>boolean</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>autoFocus</code>
								</td>

								<td>Autofocus...</td>

								<td>boolean</td>

								<td>&mdash;</td>
							</tr>

							<tr>
								<td>
									<code>spacing</code>
								</td>

								<td>Spacing between input fields</td>

								<td>Regular spacing types</td>

								<td>
									<code>small</code>
								</td>
							</tr>

							<tr>
								<td>
									<code>onChange</code>
								</td>

								<td>Callback function to execute when ...</td>

								<td>function</td>

								<td>&mdash;</td>
							</tr>
						</tbody>
					</Table>

					<HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
				</Portion>
			</Row>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  DEFAULT PIN INPUT FIELD  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="default">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3" marginBottom="nano">
							Default PinInput Field
						</Heading>

						<Text marginBottom="micro">
							The <code>PinInputField</code> component is a simple, pin input
							element with some added features.
						</Text>

						<CodeBlock source={samplePinInput} language="jsx" />

						<Text marginTop="micro" marginBottom="micro">
							The above code will display the default <code>PinInputField</code>
							, which looks like this&mdash;
						</Text>

						<PinInputField numberOfFields={4} />

						<Text marginTop="micro">
							It defaults to a text input, with a border that changes colour and
							width when active. The input takes the full-width of the parent
							container.
						</Text>
					</Portion>
				</Row>
			</Element>

			<HRule sideMargin="huge" />

			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			{/*  PROPS EXPLAINATION  */}
			{/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
			<Element as="section" id="props">
				<Row sidePadding="huge">
					<Portion>
						<Heading as="h3">Props</Heading>
					</Portion>
				</Row>

				<Row sidePadding="huge">
					<Portion>
						<Heading as="h5" marginBottom="nano">
							Mask
						</Heading>

						<Text marginBottom="micro">
							For the inputs to be masked, use <code>mask</code> prop
						</Text>

						<CodeBlock
							source={samplePinInputMaskProp}
							language="jsx"
							marginBottom="micro"
						/>

						<PinInputField numberOfFields={4} mask />
					</Portion>
				</Row>

				<HRule kind="secondary" sideMargin="huge" />

				<Row sidePadding="huge">
					<Portion>
						<Heading as="h5" marginBottom="nano">
							OTP
						</Heading>

						<Text marginBottom="micro">
							some content ..., use <code>otp</code> prop
						</Text>

						<CodeBlock
							source={samplePinInputOtpProp}
							language="jsx"
							marginBottom="micro"
						/>

						<PinInputField numberOfFields={4} otp />
					</Portion>
				</Row>

				<HRule kind="secondary" sideMargin="huge" />

				<Row sidePadding="huge">
					<Portion>
						<Heading as="h5" marginBottom="nano">
							Spacing
						</Heading>

						<Text marginBottom="micro">
							To have space between input fields, use the <code>spacing</code>{" "}
							prop.
						</Text>

						<Text marginBottom="micro">
							Values for the prop are regular spacing types.
						</Text>

						<CodeBlock
							source={sampleInputSpacingProps}
							language="jsx"
							marginBottom="micro"
						/>

						<PinInputField numberOfFields={4} spacing="medium" />
					</Portion>
				</Row>

				<HRule kind="secondary" sideMargin="huge" />

				{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
				{/*  THEMING  */}
				{/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
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
			</Element>
		</CardDocsStyled>
	);
};

export default InputFieldDocs;
