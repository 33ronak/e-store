import React from "react";
import CartCounter from "./CartCounter";
import { Button } from "react-bootstrap";

const Cart = () => {
    return (
        <div className="position-relative d-inline-block">
            <Button variant="outline-info">
                Cart
            </Button>
            <CartCounter />
        </div>
    );
}

export default Cart;
