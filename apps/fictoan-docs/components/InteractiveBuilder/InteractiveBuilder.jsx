//  EXTENRAL DEPS
import React, { useState } from "react";

// INTERFACE
import {
	Row,
	Portion,
	Text,
	Button,
	Card,
	Heading,
	HRule,
	listOfColourNames,
	Tabs,
	RadioGroup,
} from "fictoan-react";

//  COMPONENTS
import { InteractiveBuilderStyled } from "./InteractiveBuilder.styled";

//  ASSETS

export const InteractiveBuilder = () => {
	{/* prettier-ignore */}
	const [cardStates, setCardStates] = useState({
		padding: "none",
		shape: "none",
		bgColour: "transparent",
		borderColour: "slate-20",
	});

	{/* prettier-ignore */}
	const [buttonStates, setButtonStates] = useState({
		kind: "primary",
		shape: "none",
		bgColour: "transparent",
		borderColour: "transparent",
		shadow: "none",
	});

	return (
		<InteractiveBuilderStyled>
			<Row sidePadding="micro" marginTop="micro">
				<Portion desktopSpan="one-third">
					<Card
						id="guinea-pig-card"
						shape={cardStates.shape}
						padding={cardStates.padding}
						bgColour={cardStates.bgColour}
						borderColour={cardStates.borderColour}
					>
						<Heading as="h4">Heading</Heading>

						<Text>Some text here</Text>

						<Button
							kind={buttonStates.kind}
							shape={buttonStates.shape}
							bgColour={buttonStates.bgColour}
							borderColour={buttonStates.borderColour}
							shadow={buttonStates.shadow}
						>
							Open profile
						</Button>
					</Card>
				</Portion>

				<Portion desktopSpan="two-third">
					<Card shape="rounded" padding="micro">
						<Tabs
							tabs={[
								{
									key: "tab1",
									label: "Card",
									content: (
										<>
											{/* PADDING ============================================================ */}
											<Row marginBottom="none">
												<Portion desktopSpan="one-third">
													<Text weight="600" marginBottom="nano">
														Padding
													</Text>

													<code>{`<Card ${
														cardStates.padding === "none"
															? ""
															: `padding="${cardStates.padding}"`
													}>`}</code>
												</Portion>

												<Portion desktopSpan="two-third">
													{/* prettier-ignore */}
													<RadioGroup
                                                        id="card-padding-group"
                                                        name="card-padding-choices"
                                                        options={[
                                                            {
                                                                label          : "None",
                                                                id             : "card-padding-none",
                                                                value          : "card-padding-none",
                                                                checked        : cardStates.padding === "none",
                                                                defaultChecked : true,
                                                                onChange       : () => setCardStates(prev=>({...prev, padding:"none"})),
                                                            },
                                                            {
                                                                label    : "Nano",
                                                                id       : "card-padding-nano",
                                                                value    : "card-padding-nano",
                                                                checked  : cardStates.padding === "nano",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"nano"})),
                                                            },
                                                            {
                                                                label    : "Micro",
                                                                id       : "card-padding-micro",
                                                                value    : "card-padding-micro",
                                                                checked  : cardStates.padding === "micro",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"micro"})),
                                                            },
                                                            {
                                                                label    : "Tiny",
                                                                id       : "card-padding-tiny",
                                                                value    : "card-padding-tiny",
                                                                checked  : cardStates.padding === "tiny",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"tiny"})),
                                                            },
                                                            {
                                                                label    : "Small",
                                                                id       : "card-padding-small",
                                                                value    : "card-padding-small",
                                                                checked  : cardStates.padding === "small",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"small"})),
                                                            },
                                                            {
                                                                label    : "Medium",
                                                                id       : "card-padding-medium",
                                                                value    : "card-padding-medium",
                                                                checked  : cardStates.padding === "medium",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"medium"})),
                                                            },
                                                            {
                                                                label    : "Large",
                                                                id       : "card-padding-large",
                                                                value    : "card-padding-large",
                                                                checked  : cardStates.padding === "large",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"large"})),
                                                            },
                                                            {
                                                                label    : "Huge",
                                                                id       : "card-padding-huge",
                                                                value    : "card-padding-huge",
                                                                checked  : cardStates.padding === "huge",
                                                                onChange : () => setCardStates(prev=>({...prev, padding:"huge"})),
                                                            },
                                                        ]}
                                                        />
												</Portion>
											</Row>

											<HRule
												kind="tertiary"
												marginTop="micro"
												marginBottom="micro"
											/>

											{/* SHAPE ============================================================= */}
											<Row marginBottom="none">
												<Portion desktopSpan="one-third">
													<Text weight="600" marginBottom="nano">
														Shape
													</Text>
													<code>{`<Card ${
														cardStates.shape === "none"
															? ""
															: `shape="${cardStates.shape}"`
													}>`}</code>
												</Portion>

												<Portion desktopSpan="two-third">
													{/* prettier-ignore */}
													<RadioGroup
                                                        id="card-shape-group"
                                                        name="card-shape-choices"
                                                        options={[
                                                            {
                                                                label          : "None",
                                                                id             : "card-shape-none",
                                                                value          : "card-shape-none",
                                                                checked        : cardStates.shape === "none",
                                                                defaultChecked : true,
                                                                onChange       : () => setCardStates(prev=>({...prev, shape:"none"})),
                                                            },
                                                            {
                                                                label    : "Rounded",
                                                                id       : "card-shape-rounded",
                                                                value    : "card-shape-rounded",
                                                                checked  : cardStates.shape === "rounded",
                                                                onChange : () => setCardStates(prev=>({...prev, shape:"rounded"})),
                                                            },
                                                            {
                                                                label    : "Curved",
                                                                id       : "card-shape-curved",
                                                                value    : "card-shape-curved",
                                                                checked  : cardStates.shape === "curved",
                                                                onChange : () => setCardStates(prev=>({...prev, shape:"curved"})),
                                                            },
                                                        ]}
                                                    />
												</Portion>
											</Row>

											<HRule
												kind="tertiary"
												marginTop="micro"
												marginBottom="micro"
											/>

											{/* BG COLOUR ========================================================= */}
											<Row marginBottom="none">
												<Portion desktopSpan="one-third">
													<Text weight="600" marginBottom="nano">
														Background colour
													</Text>
													<code>{`<Card ${
														cardStates.bgColour === "none"
															? ""
															: `bgColour="${cardStates.bgColour}"`
													}>`}</code>
												</Portion>

												<Portion desktopSpan="two-third">
													<Card
														className="colours-list-wrapper"
														padding="micro"
														shape="rounded"
													>
														{listOfColourNames.slice(3).map((colour, index) => {
															return (
																<Card
																	key={index}
																	className="is-clickable"
																	padding="nano"
																	bgColour={colour}
																	borderColour="transparent"
																	onClick={() =>
																		setCardStates((prev) => ({
																			...prev,
																			bgColour: colour,
																		}))
																	}
																/>
															);
														})}
													</Card>
												</Portion>
											</Row>

											<HRule
												kind="tertiary"
												marginTop="micro"
												marginBottom="micro"
											/>

											{/* BORDER COLOUR ===================================================== */}
											<Row marginBottom="none">
												<Portion desktopSpan="one-third">
													<Text weight="600" marginBottom="nano">
														Border colour
													</Text>
													<code>{`<Card ${
														cardStates.borderColour === "none"
															? ""
															: `borderColour="${cardStates.borderColour}"`
													}>`}</code>
												</Portion>

												<Portion desktopSpan="two-third">
													<Card
														className="colours-list-wrapper"
														padding="micro"
														shape="rounded"
													>
														{listOfColourNames.slice(3).map((colour, index) => {
															return (
																<Card
																	key={index}
																	className="is-clickable"
																	padding="nano"
																	bgColour={colour}
																	borderColour="transparent"
																	onClick={() =>
																		setCardStates((prev) => ({
																			...prev,
																			borderColour: colour,
																		}))
																	}
																/>
															);
														})}
													</Card>
												</Portion>
											</Row>
										</>
									),
								},
								{
									key: "tab2",
									label: "Text",
									content: <></>,
								},
								{
									key: "tab3",
									label: "Button",
									content: (
										<>
											{/* PADDING ============================================================ */}
											<Row marginBottom="none">
												<Portion desktopSpan="one-third">
													<Text weight="600" marginBottom="nano">
														Kind
													</Text>
													<code>{`<Button ${
														buttonStates.kind === "custom"
															? ""
															: `kind="${buttonStates.kind}"`
													}>`}</code>
												</Portion>

												<Portion desktopSpan="two-third">
													{/* prettier-ignore */}
													<RadioGroup
														id="button-kind-group"
														name="button-kind-choices"
														options={[
															{
																id             : "button-kind-primary",
																label          : "Primary",
																value          : "button-kind-primary",
																checked        : buttonStates.kind === "primary",
                                                                defaultChecked : true,
																onChange       : () => setButtonStates(prev=>({...prev, kind:"primary"})),
															},
															{
																id       : "button-kind-secondary",
																label    : "Secondary",
																value    : "button-kind-secondary",
																checked  : buttonStates.kind === "secondary",
																onChange : () => setButtonStates(prev=>({...prev, kind:"secondary"})),
															},
															{
																id       : "button-kind-tertiary",
																label    : "Tertiary",
																value    : "button-kind-tertiary",
																checked  : buttonStates.kind === "tertiary",
																onChange : () => setButtonStates(prev=>({...prev, kind:"tertiary"})),
															},
															{
																id       : "button-kind-custom",
																label    : "Custom",
																value    : "button-kind-custom",
																checked  : buttonStates.kind === "custom",
																onChange : () => setButtonStates(prev=>({...prev, kind:"custom"})),
															},
														]}
													/>
												</Portion>
											</Row>

											{buttonStates.kind === "custom" && (
												<>
													<HRule
														kind="tertiary"
														marginTop="micro"
														marginBottom="micro"
													/>

													{/* SHAPE ============================================================= */}
													<Row marginBottom="none">
														<Portion desktopSpan="one-third">
															<Text weight="600" marginBottom="nano">
																Shape
															</Text>

															<code>{`<Button ${
																buttonStates.shape === "none"
																	? ""
																	: `shape="${buttonStates.shape}"`
															}>`}</code>
														</Portion>

														<Portion desktopSpan="two-third">
															{/* prettier-ignore */}
															<RadioGroup
																id="button-radio-group"
																name="button-group"
																options={[
																	{
																		id       : "button-shape-none",
																		label    : "None",
																		value    : "button-shape-none",
																		checked  : buttonStates.shape === "none",
																		onChange : () => setButtonStates(prev=>({...prev, shape:"none"})),
																	},
																	{
																		id       : "button-shape-rounded",
																		label    : "Rounded",
																		value    : "button-shape-rounded",
																		checked  : buttonStates.shape === "rounded",
																		onChange : () => setButtonStates(prev=>({...prev, shape:"rounded"})),
																	},
																	{
																		id       : "button-shape-curved",
																		label    : "Curved",
																		value    : "button-shape-curved",
																		checked  : buttonStates.shape === "curved",
																		onChange : () => setButtonStates(prev=>({...prev, shape:"curved"})),
																	},
																]}
															/>
														</Portion>
													</Row>

													<HRule
														kind="tertiary"
														marginTop="micro"
														marginBottom="micro"
													/>

													{/* BG COLOUR ========================================================= */}
													<Row marginBottom="none">
														<Portion desktopSpan="one-third">
															<Text weight="600" marginBottom="nano">
																Background colour
															</Text>

															<code>{`<Button ${
																buttonStates.bgColour === "none"
																	? ""
																	: `bgColour="${buttonStates.bgColour}"`
															}>`}</code>
														</Portion>

														<Portion desktopSpan="two-third">
															<Card
																className="colours-list-wrapper"
																padding="micro"
																shape="rounded"
															>
																{listOfColourNames
																	.slice(3)
																	.map((colour, index) => {
																		return (
																			<Card
																				key={index}
																				className="is-clickable"
																				padding="nano"
																				bgColour={colour}
																				borderColour="transparent"
																				onClick={() =>
																					setButtonStates((prev) => ({
																						...prev,
																						bgColour: colour,
																					}))
																				}
																			/>
																		);
																	})}
															</Card>
														</Portion>
													</Row>

													<HRule
														kind="tertiary"
														marginTop="micro"
														marginBottom="micro"
													/>

													{/* BORDER COLOUR ===================================================== */}
													<Row marginBottom="none">
														<Portion desktopSpan="one-third">
															<Text weight="600" marginBottom="nano">
																Border colour
															</Text>

															<code>{`<Button ${
																buttonStates.borderColour === "none"
																	? ""
																	: `borderColour="${buttonStates.borderColour}"`
															}>`}</code>
														</Portion>

														<Portion desktopSpan="two-third">
															<Card
																className="colours-list-wrapper"
																padding="micro"
																shape="rounded"
															>
																{listOfColourNames
																	.slice(3)
																	.map((colour, index) => {
																		return (
																			<Card
																				key={index}
																				className="is-clickable"
																				padding="nano"
																				bgColour={colour}
																				borderColour="transparent"
																				onClick={() =>
																					setButtonStates((prev) => ({
																						...prev,
																						borderColour: colour,
																					}))
																				}
																			/>
																		);
																	})}
															</Card>
														</Portion>
													</Row>
												</>
											)}
										</>
									),
								},
							]}
						/>
					</Card>
				</Portion>
			</Row>
		</InteractiveBuilderStyled>
	);
};
