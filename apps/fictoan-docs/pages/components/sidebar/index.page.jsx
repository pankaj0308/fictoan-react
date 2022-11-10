//  EXTERNAL DEPS
import React from "react";

//  INTERFACE
import { CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

// COMPONENTS
import { SidebarDocsStyled } from "./SidebarDocs.styled";
import {
    sampleSidebar,
    sampleSidebarCollapse,
    sampleSidebarFooter,
    sampleSidebarStructure,
    sampleSidebarItem,
    sampleSidebarItemText,
    sampleSidebarItemIcon,
    sampleSidebarHeader,
    sampleSidebarTheming,
} from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const SidebarDocs = () => {
    useDocumentTitle("Sidebar — Fictoan");
    useScrollToTop();

    return (
        <SidebarDocsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">
                        Sidebar
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
                    {/*  SIDEBAR WRAPPER PROPS  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="div">
                        <Text weight="600" marginBottom="nano">
                            Sidebar Wrapper
                        </Text>
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
                                        <code>isCollapsed</code>
                                    </td>

                                    <td>An array of the individual tab objects</td>

                                    <td>object</td>

                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
                    </Element>

                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  SIDEBAR HEADER PROPS  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="div">
                        <Text weight="600" marginBottom="nano">
                            Sidebar Header
                        </Text>
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
                                        <code>isSticky</code>
                                    </td>

                                    <td>A Boolean value, which sticks header to top</td>

                                    <td>boolean</td>

                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
                    </Element>

                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  SIDEBAR ITEM PROPS  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="div">
                        <Text weight="600" marginBottom="nano">
                            Sidebar Item
                        </Text>
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
                                        <code>hasAlert</code>
                                    </td>

                                    <td>A Boolean value, which ...</td>

                                    <td>boolean</td>

                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
                    </Element>

                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  SIDEBAR ITEM TEXT PROPS  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="div">
                        <Text weight="600" marginBottom="nano">
                            Sidebar Item Text
                        </Text>
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
                                        <code>linkText</code>
                                    </td>

                                    <td>Title of the sidebar link</td>

                                    <td>string</td>

                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>weight</code>
                                    </td>

                                    <td>font-weight of the sidebar text</td>

                                    <td>
                                        <code>100</code> <code>200</code>
                                        <br />
                                        <code>300</code> <code>400</code>
                                        <br />
                                        <code>500</code> <code>600</code>
                                        <br />
                                        <code>700</code> <code>800</code>
                                        <br />
                                        <code>900</code>
                                        <br />
                                    </td>

                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>size</code>
                                    </td>

                                    <td>size of the sidebar text</td>

                                    <td>
                                        <code>tiny</code>
                                        <br />
                                        <code>small</code>
                                        <br />
                                        <code>medium</code>
                                        <br />
                                        <code>large</code>
                                        <br />
                                        <code>huge</code>
                                        <br />
                                    </td>

                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
                    </Element>

                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  SIDEBAR ITEM ICON PROPS  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="div">
                        <Text weight="600" marginBottom="nano">
                            Sidebar Item Icon
                        </Text>
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
                                        <code>iconType</code>
                                    </td>

                                    <td>Icon filled or stroke</td>

                                    <td>
                                        <code>stroked</code>
                                        <br />
                                        <code>filled</code>
                                    </td>

                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />
                    </Element>

                    <Heading as="h5" marginBottom="nano">
                        Shared props
                    </Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT SIDEBAR  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">
                            Default Sidebar
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>Sidebar</code> is a <code>aside</code> element that sits on the left of the
                            window, and is used primarily as a navigation section. Below is the markup for setting up
                            your page.
                        </Text>

                        <CodeBlock source={sampleSidebar} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display a layout similar to what you are seeing on this page.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT SETUP */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">
                            Basic setup
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarWrapper</code> acts as a parent for the other sidebar components inside of
                            it. The <code>SidebarHeader</code>, <code>SidebarItem</code> and <code>SidebarFooter</code>{" "}
                            form the immediate children of the wrapper.
                        </Text>

                        <CodeBlock source={sampleSidebarStructure} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  DEFAULT SIDEBAR HEADER */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">
                            Header
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarHeader</code> sits at the top of the wrapper and this is where you add your
                            logo or site name etc. It also accepts an optional prop called <code>isSticky</code>, which
                            makes it stick to the top once scrolling becomes available inside the sidebar.
                        </Text>

                        <CodeBlock source={sampleSidebarHeader} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  DEFAULT SIDEBAR ITEM */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">
                            Sidebar Item
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarItem</code> is a sibling of the header,footer. It has 2 children{" "}
                            <code>SidebarItemText</code> and <code>SidebarItemIcon</code>
                        </Text>

                        <Text marginBottom="micro">
                            If the <code>SidebarHeader</code> and the <code>SidebarFooter</code> are sticky, you will
                            need to set the top and bottom margin of the links wrapper in the theme file, so that they
                            don’t disappear underneath.
                        </Text>

                        <CodeBlock source={sampleSidebarItem} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  DEFAULT SIDEBAR ITEM TEXT */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">
                            Sidebar Item Text
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarItemText</code> is a child component of <code>SidebarItem</code>. The{" "}
                            <code>linkText</code> prop is for the text/title of the sidebar link. It also accepts 2
                            optional props <code>weight</code> and <code>size</code>.
                        </Text>

                        <CodeBlock source={sampleSidebarItemText} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  DEFAULT SIDEBAR ITEM ICON */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">
                            Sidebar Item Icon
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarItemIcon</code> is a child component of <code>SidebarItem</code>. The{" "}
                            <code>iconType</code> prop is for stroke and fill icon.
                        </Text>

                        <CodeBlock source={sampleSidebarItemIcon} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">
                            Footer
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarFooter</code> is a sibling of the header and the links wrapper, and sits at
                            the bottom. It also accepts the optional <code>isSticky</code> prop, to have it consistently
                            at the bottom.
                        </Text>

                        <CodeBlock source={sampleSidebarFooter} language="jsx" />
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
                        <Heading as="h3">Collapsing the sidebar</Heading>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Clicking on the header makes the sidebar collapse to just the icons, and makes way for more
                            content width. Here’s how it’s setup—
                        </Text>

                        <CodeBlock source={sampleSidebarCollapse} language="jsx" marginBottom="micro" />

                        <Text>
                            With <code>useState</code> and <code>onClick</code>, you can easily switch between the
                            default and collapsed states of the sidebar. In the collapsed state, only the icons are
                            visible, and the label is displayed on hover.
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

                        <CodeBlock source={sampleSidebarTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </SidebarDocsStyled>
    );
};

export default SidebarDocs;
