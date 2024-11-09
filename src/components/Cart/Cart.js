import { React, useState } from "react";
import CartCounter from "./CartCounter";
import { Button, Offcanvas, Table, Stack } from "react-bootstrap";

import album1 from "../../assets/album_1-radius.jpg";
import album2 from "../../assets/album_2-snow-bulb.jpg";
import album3 from "../../assets/album_3-tender.jpg";
import album4 from "../../assets/album_4-waves.jpg";

const Cart = () => {

    const [cartVisible, setIsCartVisible] = useState(false);

    const showCart = () => setIsCartVisible(true);
    const closeCart = () => setIsCartVisible(false);

    const cartElements = [
        {
            id: Math.random() * 10000000,
            title: "Radius",
            price: 100,
            image: album1,
        },
        {
            id: Math.random() * 10000000,
            title: "Shadows",
            price: 50,
            image: album2,
        },
        {
            id: Math.random() * 10000000,
            title: "Tender",
            price: 70,
            image: album3,
        },
        {
            id: Math.random() * 10000000,
            title: "Waves",
            price: 100,
            image: album4,
        }
    ];

    const totalPrice = cartElements.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);

    return (
        <div className="position-relative d-inline-block">
            <Button variant="outline-info" onClick={showCart}>
                Cart
            </Button>
            <Offcanvas
                show={cartVisible}
                onHide={closeCart}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartElements.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td> ₹ {item.price}</td>
                                    <td>
                                        <Stack direction="horizontal" gap={3}>
                                            <span className="d-inline-block">
                                                <Button
                                                    variant="outline-dark"
                                                    disabled
                                                    style={{ margin: "auto", pointerEvents: 'none' }}
                                                >
                                                    1
                                                </Button>
                                            </span>
                                            <Button variant="danger" style={{ marginLeft: "auto" }}>
                                                REMOVE
                                            </Button>
                                        </Stack>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><strong>Total:</strong></td>
                                <td> ₹ {totalPrice} </td>
                            </tr>
                        </tbody>
                    </Table>
                </Offcanvas.Body>
            </Offcanvas>
            <CartCounter />
        </div>
    );
}

export default Cart;
