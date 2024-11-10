import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import ItemContext from "../../store/item-context";

const CartCounter = () => {

    const {cart} = useContext(ItemContext);
    const cartLength = cart.length;

    return (
        <>
            <Badge
                bg="black"
                className="position-absolute top-0 start-100 translate-middle"
                text="info"
            >
                {cartLength}
            </Badge>
        </>
    )
}

export default CartCounter;