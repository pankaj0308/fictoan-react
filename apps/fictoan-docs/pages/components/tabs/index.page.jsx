//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import { CodeBlock, Element, Heading, HRule, Portion, Row, Table, Tabs, Text } from "fictoan-react";

// COMPONENTS
import { TabsStyled } from "./Tabs.styled";
import { sampleTabsTabs, sampleTabsTheme, sampleTabs } from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

// ASSETS
import SpanishInquisition from "../../../assets/images/spanish-inquisition.jpeg";


const TabsDocs = () => {
    useDocumentTitle("Tabs — Fictoan");
    useScrollToTop();

    const tabOneContent = () => <Text>Content for tab 1</Text>;

    const tabTwoContent = () => <Text>Some other content for the next tab</Text>;

    const tabThreeContent = () => (
        <Element as="img" src={SpanishInquisition.src} alt="Nobody expects the Spanish Inquisition!" />
    );

    return (
        <TabsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">
                        Tabs
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
                                    <code>tabs</code>
                                </td>

                                <td>An array of the individual tab objects</td>

                                <td>object</td>

                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>tabs.key</code>
                                </td>

                                <td>Unique identifier of a tab</td>

                                <td>string</td>

                                <td></td>
                            </tr>

                            <tr>
                                <td>
                                    <code>tabs.label</code>
                                </td>

                                <td>Text that’s displayed on the tab label</td>

                                <td />

                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>tabs.content</code>
                                </td>

                                <td>Content to be displayed when its corresponding tab is active</td>

                                <td></td>

                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>hasAlert</code>
                                </td>

                                <td>Adds a small red dot to the label</td>

                                <td>boolean</td>

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
                            Default tabs
                        </Heading>

                        <CodeBlock source={sampleTabs} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>Tab</code>, which looks like this&mdash;
                        </Text>

                        <Tabs
                            tabs={[
                                {
                                    key: "tab1",
                                    label: "Tab 1",
                                    content: tabOneContent(),
                                },
                                {
                                    key: "tab2",
                                    label: "Tab 2",
                                    content: tabTwoContent(),
                                    hasAlert:true,
                                },
                                {
                                    key: "tab3",
                                    label: "Tab 3",
                                    content: tabThreeContent(),
                                },
                            ]}
                        />
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
                            Tabs
                        </Heading>

                        <Text marginBottom="micro">
                            The Tabs component accepts basically one custom prop—<code>tabs</code>.
                        </Text>

                        <CodeBlock source={sampleTabsTabs} language="jsx" marginBottom="micro" />

                        <Text marginTop="micro">
                            The prop accepts an array of individual elements with <code>key</code>, <code>label</code>,
                            <code>content</code> and <code>hasAlert</code> values. The first two are strings, the <code>content</code> {" "} should point to a
                            React component and last one is boolean.
                        </Text>
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />
            </Element>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row sidePadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">
                            Theming
                        </Heading>

                        <CodeBlock source={sampleTabsTheme} language="css" />
                    </Portion>
                </Row>
            </Element>
        </TabsStyled>
    );
};

export default TabsDocs;
