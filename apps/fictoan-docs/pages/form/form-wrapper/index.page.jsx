//  External deps
import React from "react";

//  Internal deps
import { CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

// Local components
import { FormDocsStyled } from "./Form.styled";
import { sampleFormWrapper, sampleFormWrapperSpacing } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const FormDocs = () => {
    useDocumentTitle("Form wrapper — Fictoan");
    useScrollToTop();

    return (
        <FormDocsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">
                        Form wrapper
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
                    <Table bordersFor="both" padding="tiny">
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
                                    <code>spacing</code>
                                </td>

                                <td>Margin bottom for the individual form items.</td>

                                <td>
                                    <code>none</code>
                                    <br />
                                    <code>nano</code>
                                    <br />
                                    <code>micro</code>
                                    <br />
                                    <code>tiny</code>
                                    <br />
                                    <code>small</code>
                                    <br />
                                    <code>medium</code>
                                    <br />
                                    <code>large</code>
                                    <br />
                                    <code>huge</code>
                                </td>

                                <td>
                                    <code>small</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">
                        Shared props
                    </Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">
                            Default form
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>Form</code> uses a native <code>form</code> element that you can extend with props
                            and events.
                        </Text>

                        <CodeBlock source={sampleFormWrapper} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The form wrapper acts as a simple container within which you can add individual form items,
                            and also attach the <code>action</code> attribute to.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  KIND  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">
                            Spacing
                        </Heading>

                        <Text marginBottom="micro">
                            The FormWrapper component accepts basically one custom prop—<code>spacing</code>.
                        </Text>

                        <CodeBlock source={sampleFormWrapperSpacing} language="jsx" marginBottom="micro" />

                        <Text marginTop="micro">
                            This controls the margin bottom of each individual <code>FormItem</code> inside this
                            wrapper.
                        </Text>
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

                            <Text>
                                Nothing for the <code>FormWrapper</code>, sorry.
                            </Text>
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </FormDocsStyled>
    );
};

export default FormDocs;
