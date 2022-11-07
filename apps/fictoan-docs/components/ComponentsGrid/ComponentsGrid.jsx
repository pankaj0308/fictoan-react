//  External dependencies
import React, { useState } from "react";
import Link from "next/link";

//  Internal dependencies
import {
    Element,
    Row,
    Portion,
    Text,
    Heading,
    Card,
    Button,
    NotificationItem,
    ProgressBar,
    InputField,
    Select,
    Table,
    BreadcrumbsWrapper,
    BreadcrumbItem, RadioButton, CheckBox, Switch, CodeBlock, Badge, Callout
} from "fictoan-react";

//  Local components
import { ComponentsGridStyled } from "./ComponentsGrid.styled";

//  Local assets
import { cardComponentSample } from "../../pages/CodeSamples";


export const ComponentsGrid = () => {
    const [, setShowNotification1] = useState(true);

    return (
        <ComponentsGridStyled>
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
        </ComponentsGridStyled>
    );
}
