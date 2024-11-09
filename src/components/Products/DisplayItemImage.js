import React from "react";
import { Container, Card, Image } from "react-bootstrap";

const DisplayItemImage = (props) => {
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: "50vh", width: "20hh" }}>
                <Card style={{ width: "200px", height: "200px" }}>
                    <Image
                        src={props.image}
                        alt="Thumbnail"
                        fluid
                        style={{ height: "100%", objectFit: "cover" }}
                    />
                </Card>
            </Container>
        </>
    )
}

export default DisplayItemImage;