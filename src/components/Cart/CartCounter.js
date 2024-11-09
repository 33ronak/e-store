import React from "react";
import { Badge } from "react-bootstrap";

const CartCounter = () => {
    return (
        <>
            <Badge
                bg="black"
                className="position-absolute top-0 start-100 translate-middle"
                text="info"
            >
                4
            </Badge>
        </>
    )
}

export default CartCounter;