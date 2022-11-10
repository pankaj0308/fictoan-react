//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import {
    CodeBlock,
    Element,
    ExpandableContent,
    Heading,
    HRule,
    Portion,
    Row,
    Table,
    Text,
} from "fictoan-react";

// COMPONENTS
import { ExpandableContentStyled } from "./ExpandableContent.styled";
import { sampleExpandableContent, sampleOpenExpandableContent } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const ExpandableContentDocs = () => {
    useDocumentTitle("Expandable Content — Fictoan");
    useScrollToTop();

    return (
        <ExpandableContentStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">
                        Expandable Content
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
                                    <code>open</code>
                                </td>

                                <td>some dummy text</td>

                                <td>
                                    <Text>boolean</Text>
                                </td>

                                <td>False</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>summary</code>
                                </td>

                                <td>heading content</td>

                                <td>
                                    <Text></Text>
                                </td>

                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>children</code>
                                </td>

                                <td>some dummy text</td>

                                <td>string</td>

                                <td>&mdash;</td>
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
                            Default Expandable Content
                        </Heading>

                        <Text marginBottom="micro">
                            Some <code>dummy</code> is a <code>aside</code> dummy text
                        </Text>

                        <CodeBlock source={sampleExpandableContent} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>Expandable Content</code>, which looks like
                            this&mdash;
                        </Text>
                        <ExpandableContent summary={<Text weight="600">This is heading</Text>}>
                            <Text>This is content</Text>
                        </ExpandableContent>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS EXPLAINATION  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">
                        Open
                    </Heading>

                    <Text marginBottom="micro">
                        The default is <code>false</code>, which does not keep the component expanded bydefault.
                    </Text>

                    <Text marginTop="micro" marginBottom="micro">
                        When <code>open</code> prop is given, the component is expanded bydefault.
                    </Text>

                    <CodeBlock source={sampleOpenExpandableContent} language="jsx" />

                    <Text marginTop="micro" marginBottom="micro">
                        The above code will display the <code>Expandable Content</code>, which looks like this&mdash;
                    </Text>
                    <ExpandableContent open summary={<Text weight="600">This is heading (expanded bydefault)</Text>}>
                        <Text>This is content</Text>
                    </ExpandableContent>
                </Portion>
            </Row>

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
        </ExpandableContentStyled>
    );
};

export default ExpandableContentDocs;
