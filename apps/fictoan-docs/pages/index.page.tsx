// CORE ===============================================================================================================
import React from "react";
import Link from "next/link";

// INTERFACE ==========================================================================================================
import {
    Element,
    Row,
    Portion,
    Heading,
    Button,
    Text,
    HRule,
    Card,
    CodeBlock,
} from "fictoan-react";

// COMPONENTS =========================================================================================================
import { HomeStyled } from "styles/Home.styled";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";
import { ComponentsGrid } from "../components/ComponentsGrid/ComponentsGrid";
import { InteractiveBuilder } from "../components/InteractiveBuilder/InteractiveBuilder";

// CODE SAMPLES =======================================================================================================
import { sampleFictoanCode, cardComponentSample } from "./CodeSamples"

// ASSETS =============================================================================================================
import FictoanLogo from "../assets/images/logo.svg";

const Home = () => {
    useDocumentTitle("Home — Fictoan");
    useScrollToTop()

    return (
        <HomeStyled>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  INTRO  */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row>
                <Portion>
                    <Card padding="medium" borderColour="spring-20" bgColour="spring-20">
                        <Row sidePadding="small" marginTop="small">
                            <Portion desktopSpan="one-third">
                                <Heading as="h1" textColour="green-90" marginBottom="nano">
                                    FICTOAN
                                </Heading>
                                <Text id="fictoan-full-form" size="tiny">
                                    *Fuck, I Couldn’t Think Of A Name
                                </Text>

                                <Heading as="h4" weight="400" textColour="green-90" marginBottom="nano">
                                    A performant and intuitive framework for quickly iterating UI design with code
                                </Heading>

                                <Heading as="h4" textColour="green-60" marginBottom="micro">
                                    v0.43.1
                                </Heading>

                                <Element as="div" className="wrapping-list" marginBottom="micro">
                                    <a href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            kind="secondary"
                                            size="small"
                                            shape="rounded"
                                            shadow="hard"
                                            marginRight="nano"
                                            marginBottom="nano"
                                        >
                                            Github ↗
                                        </Button>
                                    </a>

                                    <a
                                        href="http://fictoan-storybook.s3-website.eu-central-1.amazonaws.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button kind="secondary" size="small" shape="rounded" shadow="hard">
                                            Storybook ↗
                                        </Button>
                                    </a>
                                </Element>
                            </Portion>
                        </Row>

                    </Card>
                </Portion>
            </Row>

            <InteractiveBuilder />

            <Row sidePadding="large" marginTop="small" marginBottom="none">
                <Portion>
                    <Portion>
                        <Heading as="h4" marginBottom="nano">
                            The idea
                        </Heading>
                    </Portion>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h6" weight="400" marginBottom="nano">
                        Fictoan focuses on code readability, and is primed for ease and speed of iteration.
                    </Heading>

                    <Heading as="h6" weight="400" marginBottom="nano">
                        Props, attributes and values are all plain English.
                    </Heading>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h6" weight="400" marginBottom="nano">
                        We want designers also to be able to contribute in code&mdash;they can focus on layout, theming
                        and pixel-perfection while engineers can focus on the integration&mdash;this saves time and
                        headaches.
                    </Heading>

                    <Link href="/manifesto">Read the manifesto &rarr;</Link>
                </Portion>

                <Portion>
                    <CodeBlock source={sampleFictoanCode} language="jsx" marginTop="micro" marginBottom="micro" />

                    <Text marginTop="nano">How simple is that markup?</Text>
                </Portion>
            </Row>

            <HRule kind="primary" sideMargin="large" />

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  COMPONENTS GRID */}
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <ComponentsGrid />

            <HRule sideMargin="large" bgColour="black" marginTop="micro" marginBottom="micro" />

            <Row sidePadding="large">
                <Portion>
                    <Text>&copy; {new Date().getFullYear()} Fictoan</Text>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
export default Home;
