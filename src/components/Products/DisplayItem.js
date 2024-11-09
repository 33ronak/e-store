import React from "react";
import { Container, Button, Image, Stack } from "react-bootstrap";

const DisplayItem = (props) => {
    return (
        <>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ height: "400px", width: "400px" }}
            >
                <Stack className="d-flex justify-content-center align-items-center" gap={2} >
                    <h3>{props.title}</h3>
                    <Image
                        src={props.image}
                        style={{ width: "250px" }}
                        fluid
                    />
                    <Stack direction="horizontal" gap={3}>
                        <h5>₹ {props.price}</h5>
                        <Button variant="primary" style={{ marginLeft: "auto" }} > ADD TO CART </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default DisplayItem;