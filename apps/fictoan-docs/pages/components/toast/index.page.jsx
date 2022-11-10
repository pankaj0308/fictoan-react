//  EXTERNAL DEPS
import React, { useState } from "react";

//  INTERFACE
import {
    Element,
    Button,
    CodeBlock,
    Heading,
    HRule,
    Portion,
    Row,
    Table,
    Text,
    ToastsWrapper,
    ToastItem,
} from "fictoan-react";

// COMPONENTS
import { ToastDocsStyled } from "./Toast.styled";
import {
    sampleToast,
    sampleToastsPosition,
    sampleToastShow,
    sampleToastTimeout,
    sampleToastTheme,
} from "./CodeSamples";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

const ToastDocs = () => {
    useDocumentTitle("Toast — Fictoan");
    useScrollToTop();

    const [showTopToast, setShowTopToast] = useState(false);

    return (
        <ToastDocsStyled>
            <ToastsWrapper position="top">
                <ToastItem show={showTopToast} onCloseCallback={() => setShowTopToast(false)} shadow="soft">
                    <Text>Hello there, folks!</Text>
                </ToastItem>
            </ToastsWrapper>

            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">
                        Toast
                    </Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">
                        Props
                    </Heading>

                    <Heading as="h5" marginBottom="nano">
                        Custom props — ToastsWrapper
                    </Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth marginBottom="micro">
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
                                    <code>position</code>
                                </td>

                                <td>Horizontal alignment of the wrapper.</td>

                                <td>
                                    <code>top</code>
                                    <br />
                                    <code>bottom</code>
                                </td>

                                <td>
                                    <code>&mdash;</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Heading as="h5" marginBottom="nano">
                        Custom props — ToastItem
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
                                    <code>show</code>
                                </td>

                                <td>Trigger the toast</td>

                                <td>boolean</td>

                                <td>
                                    <Text>&mdash;</Text>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>showFor</code>
                                </td>

                                <td>Milliseconds after which to remove the toast</td>

                                <td>integer</td>

                                <td>
                                    <code>4000</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">
                        Shared props
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
                                    <code>bgColour</code> / <code>bgColor</code>
                                </td>

                                <td>Background colour</td>

                                <td>
                                    Any colour from <code>defaultColours</code>.
                                </td>

                                <td>
                                    <code>slate10</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>borderColour</code> / <code>borderColor</code>
                                </td>

                                <td>Border colour</td>

                                <td>
                                    Any colour from <code>defaultColours</code>.
                                </td>

                                <td>
                                    <code>slate</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shadow</code>
                                </td>

                                <td>Box shadow</td>

                                <td>
                                    <code>mild</code>
                                    <br />
                                    <code>hard</code>
                                    <br />
                                    <code>soft</code>
                                </td>

                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shape</code>
                                </td>

                                <td>Corner radius</td>

                                <td>
                                    <code>rounded</code>
                                    <br />
                                    <code>curved</code>
                                </td>

                                <td>&mdash;</td>
                            </tr>
                        </tbody>
                    </Table>
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
                            Default toast
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>ToastsWrapper</code> acts as a container for all your <code>Toast</code> elements
                            to appear inside of.
                        </Text>

                        <CodeBlock source={sampleToast} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display a toast that appears on the top centre of the page, which you
                            can test using this button&mdash;
                        </Text>

                        <Button
                            kind="primary"
                            shape="rounded"
                            shadow="mild"
                            size="small"
                            marginBottom="nano"
                            marginRight="nano"
                            onClick={() => setShowTopToast(true)}
                        >
                            Show hello toast
                        </Button>

                        <Text marginTop="micro" marginBottom="micro">
                            Of course, this is just a sample implementation, feel free to use your own logic for
                            displaying notifications. The entire markup is wrapped in the <code>ToastsWrapper</code>,
                            with individual <code>ToastItem</code> children inside it.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="wrapper-props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props — ToastsWrapper</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  POSITION  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">
                            Position
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>position</code> prop determines if you want the toasts on the <code>top</code> or
                            the <code>bottom</code> of the page.
                        </Text>

                        <CodeBlock source={sampleToastsPosition} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />
            </Element>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="item-props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props — Toast</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  POSITION  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">
                            Show
                        </Heading>

                        <Text marginBottom="micro">
                            The <code>show</code> props is what triggers the toast to be displayed. You can use it with
                            a <code>useState</code> hook.
                        </Text>

                        <CodeBlock source={sampleToastShow} language="jsx" marginBottom="micro" />

                        <Text marginTop="micro">
                            The <code>onCloseCallback</code> takes care of dismissing the toast after the default period
                            of four seconds.
                        </Text>
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />

                {/*  =============================================================================================  */}
                {/*  TIMEOUT  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">
                            Show for
                        </Heading>

                        <Text marginBottom="micro">
                            You can also add a <code>showFor</code> prop with a millisecond duration value to keep the
                            toast on-screen for that long.
                        </Text>

                        <CodeBlock source={sampleToastTimeout} language="jsx" marginBottom="micro" />
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

                            <CodeBlock source={sampleToastTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </ToastDocsStyled>
    );
};

export default ToastDocs;
