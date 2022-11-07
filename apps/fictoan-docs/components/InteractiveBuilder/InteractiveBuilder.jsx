//  External dependencies
import React, { useState } from "react";

//  Internal dependencies
import {
    Element,
    Row,
    Portion,
    Text, Button, Card, Heading, CheckBox, RadioButton, HRule, listOfColourNames, Tabs
} from "fictoan-react";

//  Local components
import { InteractiveBuilderStyled } from "./InteractiveBuilder.styled";
import { FictoanLightTheme } from "../../styles/Fictoan.light.theme";

//  Local assets


export const InteractiveBuilder = () => {
    const [cardPadding, setCardPadding] = useState("none");
    const [cardShape, setCardShape] = useState("none");
    const [cardBGColour, setCardBGColour] = useState("transparent");
    const [cardBorderColour, setCardBorderColour] = useState("slate-20");

    const [buttonKind, setButtonKind] = useState("primary");
    const [buttonShape, setButtonShape] = useState("none");
    const [buttonBGColour, setButtonBGColour] = useState("transparent");
    const [buttonBorderColour, setButtonBorderColour] = useState("transparent");
    const [buttonShadow, setButtonShadow] = useState("none");

    return (
        <InteractiveBuilderStyled>
            <Row sidePadding="micro" marginTop="micro">
                <Portion desktopSpan="one-third">
                    <Card
                        id="guinea-pig-card"
                        shape={cardShape}
                        padding={cardPadding}
                        bgColour={cardBGColour}
                        borderColour={cardBorderColour}
                    >
                        <Heading as="h4">Heading</Heading>

                        <Text>Some text here</Text>

                        <Button
                            kind={buttonKind}
                            shape={buttonShape}
                            bgColour={buttonBGColour}
                            borderColour={buttonBorderColour}
                            shadow={buttonShadow}
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
                                                    <Text weight="600" marginBottom="nano">Padding</Text>
                                                    <code>{`<Card ${cardPadding === "none" ? "" : `padding="${cardPadding}"`}>`}</code>
                                                </Portion>

                                                <Portion desktopSpan="two-third">
                                                    <RadioButton
                                                        id="card-padding-none" name="card-padding-choices" value="card-padding-none" label="None" defaultChecked
                                                        onChange={() => setCardPadding("none")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-nano" name="card-padding-choices" value="card-padding-nano" label="Nano"
                                                        onChange={() => setCardPadding("nano")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-micro" name="card-padding-choices" value="card-padding-micro" label="Micro"
                                                        onChange={() => setCardPadding("micro")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-tiny" name="card-padding-choices" value="card-padding-tiny" label="Tiny"
                                                        onChange={() => setCardPadding("tiny")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-small" name="card-padding-choices" value="card-padding-small" label="Small"
                                                        onChange={() => setCardPadding("small")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-medium" name="card-padding-choices" value="card-padding-medium" label="Medium"
                                                        onChange={() => setCardPadding("medium")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-large" name="card-padding-choices" value="card-padding-large" label="Large"
                                                        onChange={() => setCardPadding("large")}
                                                    />

                                                    <RadioButton
                                                        id="card-padding-huge" name="card-padding-choices" value="card-padding-huge" label="Huge"
                                                        onChange={() => setCardPadding("huge")}
                                                    />
                                                </Portion>
                                            </Row>

                                            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                                            {/* SHAPE ============================================================= */}
                                            <Row marginBottom="none">
                                                <Portion desktopSpan="one-third">
                                                    <Text weight="600" marginBottom="nano">Shape</Text>
                                                    <code>{`<Card ${cardShape === "none" ? "" : `shape="${cardShape}"`}>`}</code>
                                                </Portion>

                                                <Portion desktopSpan="two-third">
                                                    <RadioButton
                                                        id="card-shape-none" name="card-shape-choices" value="card-shape-none" label="None"
                                                        onChange={() => setCardShape("none")}
                                                    />

                                                    <RadioButton
                                                        id="card-shape-rounded" name="card-shape-choices" value="card-shape-rounded" label="Rounded"
                                                        onChange={() => setCardShape("rounded")}
                                                    />

                                                    <RadioButton
                                                        id="card-shape-curved" name="card-shape-choices" value="card-shape-curved" label="Curved"
                                                        onChange={() => setCardShape("curved")}
                                                    />
                                                </Portion>
                                            </Row>

                                            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                                            {/* BG COLOUR ========================================================= */}
                                            <Row marginBottom="none">
                                                <Portion desktopSpan="one-third">
                                                    <Text weight="600" marginBottom="nano">Background colour</Text>
                                                    <code>{`<Card ${cardBGColour === "none" ? "" : `bgColour="${cardBGColour}"`}>`}</code>
                                                </Portion>

                                                <Portion desktopSpan="two-third">
                                                    <Card className="colours-list-wrapper" padding="micro" shape="rounded">
                                                        {listOfColourNames.slice(3).map((colour, index) => {
                                                            return (
                                                                <Card
                                                                    key={index}
                                                                    className="is-clickable"
                                                                    padding="nano" bgColour={colour} borderColour="transparent"
                                                                    onClick={() => setCardBGColour(colour)}
                                                                />
                                                            )
                                                        })}
                                                    </Card>
                                                </Portion>
                                            </Row>

                                            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                                            {/* BORDER COLOUR ===================================================== */}
                                            <Row marginBottom="none">
                                                <Portion desktopSpan="one-third">
                                                    <Text weight="600" marginBottom="nano">Border colour</Text>
                                                    <code>{`<Card ${cardBorderColour === "none" ? "" : `borderColour="${cardBorderColour}"`}>`}</code>
                                                </Portion>

                                                <Portion desktopSpan="two-third">
                                                    <Card className="colours-list-wrapper" padding="micro" shape="rounded">
                                                        {listOfColourNames.slice(3).map((colour, index) => {
                                                            return (
                                                                <Card
                                                                    key={index}
                                                                    className="is-clickable"
                                                                    padding="nano" bgColour={colour} borderColour="transparent"
                                                                    onClick={() => setCardBorderColour(colour)}
                                                                />
                                                            )
                                                        })}
                                                    </Card>
                                                </Portion>
                                            </Row>
                                        </>
                                    ),
                                },
                                {
                                    key : "tab2",
                                    label : "Text",
                                    content : (
                                        <></>
                                    )
                                },
                                {
                                    key : "tab3",
                                    label : "Button",
                                    content : (
                                        <>
                                            {/* PADDING ============================================================ */}
                                            <Row marginBottom="none">
                                                <Portion desktopSpan="one-third">
                                                    <Text weight="600" marginBottom="nano">Kind</Text>
                                                    <code>{`<Button ${buttonKind === "custom" ? "" : `kind="${buttonKind}"`}>`}</code>
                                                </Portion>

                                                <Portion desktopSpan="two-third">
                                                    <RadioButton
                                                        id="button-kind-primary" name="button-kind-choices" value="button-kind-primary" label="Primary" defaultChecked
                                                        onChange={() => setButtonKind("primary")}
                                                    />

                                                    <RadioButton
                                                        id="button-kind-secondary" name="button-kind-choices" value="button-kind-secondary" label="Secondary"
                                                        onChange={() => setButtonKind("secondary")}
                                                    />

                                                    <RadioButton
                                                        id="button-kind-tertiary" name="button-kind-choices" value="button-kind-tertiary" label="Tertiary"
                                                        onChange={() => setButtonKind("tertiary")}
                                                    />

                                                    <RadioButton
                                                        id="button-kind-custom" name="button-kind-choices" value="button-kind-custom" label="Custom"
                                                        onChange={() => setButtonKind("custom")}
                                                    />
                                                </Portion>
                                            </Row>

                                            {buttonKind === "custom" && (
                                                <>
                                                    <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                                                    {/* SHAPE ============================================================= */}
                                                    <Row marginBottom="none">
                                                        <Portion desktopSpan="one-third">
                                                            <Text weight="600" marginBottom="nano">Shape</Text>
                                                            <code>{`<Button ${buttonShape === "none" ? "" : `shape="${buttonShape}"`}>`}</code>
                                                        </Portion>

                                                        <Portion desktopSpan="two-third">
                                                            <RadioButton
                                                                id="button-shape-none" name="button-shape-choices" value="button-shape-none" label="None"
                                                                onChange={() => setButtonShape("none")}
                                                            />

                                                            <RadioButton
                                                                id="button-shape-rounded" name="button-shape-choices" value="button-shape-rounded" label="Rounded"
                                                                onChange={() => setButtonShape("rounded")}
                                                            />

                                                            <RadioButton
                                                                id="button-shape-curved" name="button-shape-choices" value="button-shape-curved" label="Curved"
                                                                onChange={() => setButtonShape("curved")}
                                                            />
                                                        </Portion>
                                                    </Row>

                                                    <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                                                    {/* BG COLOUR ========================================================= */}
                                                    <Row marginBottom="none">
                                                        <Portion desktopSpan="one-third">
                                                            <Text weight="600" marginBottom="nano">Background colour</Text>
                                                            <code>{`<Button ${buttonBGColour === "none" ? "" : `bgColour="${buttonBGColour}"`}>`}</code>
                                                        </Portion>

                                                        <Portion desktopSpan="two-third">
                                                            <Card className="colours-list-wrapper" padding="micro" shape="rounded">
                                                                {listOfColourNames.slice(3).map((colour, index) => {
                                                                    return (
                                                                        <Card
                                                                            key={index}
                                                                            className="is-clickable"
                                                                            padding="nano" bgColour={colour} borderColour="transparent"
                                                                            onClick={() => setButtonBGColour(colour)}
                                                                        />
                                                                    )
                                                                })}
                                                            </Card>
                                                        </Portion>
                                                    </Row>

                                                    <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                                                    {/* BORDER COLOUR ===================================================== */}
                                                    <Row marginBottom="none">
                                                        <Portion desktopSpan="one-third">
                                                            <Text weight="600" marginBottom="nano">Border colour</Text>
                                                            <code>{`<Button ${buttonBorderColour === "none" ? "" : `borderColour="${buttonBorderColour}"`}>`}</code>
                                                        </Portion>

                                                        <Portion desktopSpan="two-third">
                                                            <Card className="colours-list-wrapper" padding="micro" shape="rounded">
                                                                {listOfColourNames.slice(3).map((colour, index) => {
                                                                    return (
                                                                        <Card
                                                                            key={index}
                                                                            className="is-clickable"
                                                                            padding="nano" bgColour={colour} borderColour="transparent"
                                                                            onClick={() => setButtonBorderColour(colour)}
                                                                        />
                                                                    )
                                                                })}
                                                            </Card>
                                                        </Portion>
                                                    </Row>
                                                </>
                                            )}
                                        </>
                                    )
                                }
                            ]}
                        />
                    </Card>
                </Portion>
            </Row>
        </InteractiveBuilderStyled>
    );
}
