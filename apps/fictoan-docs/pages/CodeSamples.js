export const sampleFictoanCode = `<Row gutters="large">
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

export const cardComponentSample = `const clickHere = () => {
    window.load("/components/card");
}`;
