//  External deps
import React from "react";

//  Internal deps
import { CodeBlock, Element, Heading, HRule, Portion, RadioButton, Row, Table, Text } from "fictoan-react";

// Local components
import { RadioButtonDocsStyled } from "./RadioButton.styled";
import { sampleRadioButton, sampleRadioButtonTheming } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const RadioButtonDocs = () => {
    useDocumentTitle("Radio button — Fictoan");
    useScrollToTop();

    return (
        <RadioButtonDocsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">
                        Radio button
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
                    <Text>None</Text>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">
                        Shared props
                    </Heading>
                    <Text>None</Text>
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
                            Default radio button
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>RadioButton</code> is a modified default <code>input type=&quot;radio&quot;</code> element
                            to allow for better usability and styling.
                        </Text>

                        <CodeBlock source={sampleRadioButton} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            Of the above attributes, the <code>name</code> needs to match all the radio buttons you want
                            as a group.
                        </Text>

                        <RadioButton id="radio-1" name="choices-1" value="yes" label="Yes" />

                        <RadioButton id="radio-2" name="choices-1" value="no" label="No" />

                        <RadioButton id="radio-3" name="choices-1" value="maybe" label="Maybe" />
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
        </RadioButtonDocsStyled>
    );
};

export default RadioButtonDocs;
