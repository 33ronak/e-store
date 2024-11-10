import { React, useState } from "react";
import CartCounter from "./CartCounter";
import { Button, Offcanvas } from "react-bootstrap";

import CartDisplay from "./CartDisplay";

const Cart = () => {

    const [cartVisible, setIsCartVisible] = useState(false);

    const showCart = () => setIsCartVisible(true);
    const closeCart = () => setIsCartVisible(false);

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
                    <Offcanvas.Title
                        className="d-flex justify-content-center align-items-center"
                        style={{ padding: "20px 0" }}
                    >
                        CART
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CartDisplay />
                </Offcanvas.Body>
            </Offcanvas >
            <CartCounter />
        </div >
    );
}

export default Cart;
