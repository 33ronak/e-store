import React, {useContext} from "react";
import ItemContext from "../../store/item-context";

import { Button, Container, Row, Col, Stack, Image } from "react-bootstrap";


const CartDisplay = () => {
    
    const {cart} = useContext(ItemContext);

    const totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);

    return (
        <Container>
            <div className="text-center" >
                <Row className="fw-bold ">
                    <Col md="4"  >Item</Col>
                    <Col md="4" >Price</Col>
                    <Col md="4" >Quantity</Col>
                </Row>
                <hr className="my-2" />
            </div>

            {cart.map((item, index) => (
                <div className="text-center" >
                    <Row key={item.id} >
                        <Col md="4" >
                            <Stack className="text-center" >
                                <p>{item.title}</p>
                                <Image className="text-center" src={item.image} style={{ width: "75px" }} />
                            </Stack>
                        </Col>

                        <Col md="4">₹ {item.price}</Col>

                        <Col md="4" >
                            <Stack direction="horizontal" gap={1}>
                                <span className="d-inline-block">
                                    <Button
                                        variant="outline-dark"
                                        disabled
                                        style={{ margin: "auto", pointerEvents: 'none' }}
                                    >
                                        1
                                    </Button>
                                </span>
                                <Button variant="danger" size="sm" >
                                    REMOVE
                                </Button>
                            </Stack>
                        </Col>
                    </Row>
                    <hr className="my-1" />
                </div>
            ))}

            <Row className="fw-bold mt-4">
                <Col md="5"><strong>Total:</strong></Col>
                <Col md="7">₹ {totalPrice}</Col>
            </Row>
        </Container>

    )



}

export default CartDisplay;



