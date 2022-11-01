//  External deps
import React, { useState } from "react";
import Link from "next/link";

//  Internal deps
import {
    Element,
    Row,
    Portion,
    Heading,
    Button,
    Text,
    HRule,
    Card,
    NotificationItem,
    Select,
    Table,
    CodeBlock,
    Callout,
    ProgressBar,
    BreadcrumbItem,
    BreadcrumbsWrapper,
    InputField,
    RadioButton,
    CheckBox,
    Switch,
    Badge,
} from "../../dist/cjs/index";

//  Local components
import { HomeStyled } from "styles/Home.styled";
import { useDocumentTitle, useScrollToTop } from "hooks/customHooks";

//  Local assets
import FictoanLogo from "../assets/images/logo.svg";

function Home() {
    useDocumentTitle("Home — Fictoan");
    useScrollToTop();

    const sampleCode = `<Row gutters="large">
    <Portion desktopSpan="half" mobileSpan="two-third">
        <Heading as="h4" marginBottom="micro">Profile</Heading>
        
        <Card
            shape="rounded" padding="micro"
            bgColour="slate-10" borderColour="red-90"
        >
            <Text weight="600">{user.name}</Text>
            <Text marginBottom="nano">{user.location.city}</Text>
            
            <Button
                kind="primary" shadow="soft"
                onClick={() => setShowUserDetails(true)}
            >
                Open profile
            </Button>
        </Card>
    </Portion>
</Row>`;

    const [, setShowNotification1] = useState(true);

    const cardComponentSample = `const clickHere = () => {
    window.load("/components/card");
}`;

    return (
        <HomeStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large" marginTop="small" marginBottom="none">
                <Portion desktopSpan="half">
                    <FictoanLogo />
                    {/* <Text
                        id="fictoan-full-form"
                        size="tiny"
                    >
                        *Fuck, I Couldn’t Think Of A Name
                    </Text> */}
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h4" marginBottom="micro">
                        A performant and intuitive framework for quickly iterating UI design with code
                    </Heading>
                    <Heading as="h4" textColour="grey-40" marginBottom="micro">
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

            <HRule kind="primary" sideMargin="large" />

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
                    <CodeBlock source={sampleCode} language="jsx" marginTop="micro" marginBottom="micro" />

                    <Text marginTop="nano">How simple is that markup?</Text>
                </Portion>
            </Row>

            <HRule kind="primary" sideMargin="large" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large" marginBottom="medium">
                <Portion>
                    <Heading as="h4">Components</Heading>
                </Portion>

                <Portion>
                    <Element as="div" id="grid-wrapper">
                        <Element as="div" className="grid-item">
                            <Link href="/components/button">
                                <Card
                                    id="button-card"
                                    className="component-card"
                                    padding="micro"
                                    shape="rounded"
                                    isFullHeight
                                >
                                    <Button
                                        kind="custom"
                                        shape="rounded"
                                        bgColour="violet-40"
                                        textColour="violet"
                                        marginBottom="nano"
                                    >
                                        Click me
                                    </Button>

                                    <Button
                                        kind="custom"
                                        shape="rounded"
                                        bgColour="amber-40"
                                        textColour="amber"
                                        isLoading
                                        isFullWidth
                                    >
                                        Load
                                    </Button>
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="type-card">
                            <Link href="/typography">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Heading as="h1">Hi.</Heading>
                                    <Text weight="600">I’m just your type</Text>
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="notification-card">
                            <Link href="/components/notification">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <NotificationItem
                                        show
                                        kind="info"
                                        onCloseCallback={() => setShowNotification1(false)}
                                    >
                                        I am here to notify you that...um, wait, I forgot.
                                    </NotificationItem>
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="progress-card">
                            <Link href="/components/progress-bar">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <ProgressBar
                                        value="60"
                                        max="100"
                                        unit="%"
                                        label="Loading..."
                                        barBg="green-20"
                                        barFill="green-90"
                                        height="8px"
                                        shape="rounded"
                                    />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="input-card">
                            <Link href="/components/input-field">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <InputField label="Enter" placeholder="here" />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="select-card">
                            <Link href="/components/select">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Select
                                        options={[
                                            {
                                                name: "What’s your pick?",
                                                value: "select-an-option",
                                                disabled: true,
                                                selected: true,
                                            },
                                            {
                                                name: "Pick me!",
                                                value: "option-1",
                                            },
                                            {
                                                name: "Mee!",
                                                value: "option-2",
                                            },
                                        ]}
                                    />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="table-card">
                            <Link href="/components/table">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Table padding="small" isStriped bordersFor="both">
                                        <thead>
                                            <tr>
                                                <th>Yes,</th>
                                                <th>I</th>
                                                <th>would</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>very</td>
                                                <td>much</td>
                                                <td>like</td>
                                            </tr>

                                            <tr>
                                                <td>a</td>
                                                <td>table</td>
                                                <td>with</td>
                                            </tr>

                                            <tr>
                                                <td>the</td>
                                                <td>ocean</td>
                                                <td>view</td>
                                            </tr>

                                            <tr>
                                                <td>please.</td>
                                                <td>Thank</td>
                                                <td>you.</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="breadcrumbs-card">
                            <Link href="/components/breadcrumbs">
                                <Card id="" className="component-card" shape="rounded" isFullHeight>
                                    <BreadcrumbsWrapper>
                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">A</Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">long</Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">trail</Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">of</Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">crumbs</Link>
                                        </BreadcrumbItem>
                                    </BreadcrumbsWrapper>
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="radio-card">
                            <Link href="/components/radio-button">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Element as="div" marginBottom="micro">
                                        <RadioButton id="radio-1" name="choices-1" value="yes" label="This" />
                                    </Element>

                                    <RadioButton id="radio-2" name="choices-1" value="no" label="That" />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="checkbox-card">
                            <Link href="/components/checkbox">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Element as="div" marginBottom="micro">
                                        <CheckBox
                                            id="checkbox-1"
                                            value="checkbox-1"
                                            name="checkbox-1"
                                            label="Check me"
                                        />
                                    </Element>

                                    <Switch id="switch-1" value="switch-1" name="switch-1" label="Toggle me" />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="code-card">
                            <Link href="/components/code-block">
                                <Card id="" className="component-card" shape="rounded" isFullHeight>
                                    <CodeBlock
                                        source={cardComponentSample}
                                        language="jsx"
                                        marginTop="micro"
                                        marginBottom="micro"
                                    />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="colour-card">
                            <Card className="component-card" shape="rounded" isFullHeight>
                                <Link href="/colour">
                                    <Card id="gradient-card" shape="rounded" borderColour="transparent" isFullHeight>
                                        <Text textColour="white">Colour</Text>
                                    </Card>
                                </Link>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="badge-card">
                            <Link href="/components/badge">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Element as="div" id="badge-wrapper">
                                        <Badge bgColour="red-20" textColour="red-90" shape="curved" margin="nano">
                                            A
                                        </Badge>

                                        <Badge
                                            bgColour="green-20"
                                            textColour="green"
                                            shape="curved"
                                            size="large"
                                            margin="nano"
                                        >
                                            BADGE
                                        </Badge>

                                        <Badge bgColour="amber-20" textColour="orange" shape="rounded" margin="nano">
                                            of
                                        </Badge>

                                        <Badge
                                            bgColour="purple-20"
                                            textColour="purple"
                                            shape="rounded"
                                            size="medium"
                                            margin="nano"
                                        >
                                            HONOUR
                                        </Badge>
                                    </Element>
                                </Card>
                            </Link>
                        </Element>
                        <Element as="div" className="grid-item" id="callout-card">
                            <Link href="/components/callout">
                                <Card className="component-card" padding="micro" shape="rounded" isFullHeight>
                                    <Callout kind="success">
                                        I’d also just like to call out that FICTOAN is awesome.
                                    </Callout>
                                </Card>
                            </Link>
                        </Element>
                    </Element>
                </Portion>

                <Portion>
                    <Text>...and many more.</Text>
                </Portion>
            </Row>

            <HRule sideMargin="large" bgColour="black" marginTop="micro" marginBottom="micro" />

            <Row sidePadding="large">
                <Portion>
                    <Text>&copy; 2022 Fictoan</Text>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
export default Home;
