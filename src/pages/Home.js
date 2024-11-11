import { Stack, Button, Container } from "react-bootstrap";
import React from "react";

const Homepage = () => {
    return (
        <Container className=" d-flex justify-content-center align-items-center " >
            <Stack gap={3}>
                <div className="p-1">First item <Button variant="primary">Primary</Button> </div>
                <div className="p-1">Second item <Button variant="primary">Primary</Button> </div>
                <div className="p-1">Third item <Button variant="primary">Primary</Button> </div>
            </Stack>

        </Container>
    )
}

export default Homepage;