import React, { useContext } from "react";
import { Container, Button, Image, Stack } from "react-bootstrap";
import ItemContext from "../../store/item-context";

const Items = (props) => {
    
    const { addItemToCart } = useContext(ItemContext);

    let qty = 1;

    const addItemObj = {
        id: props.id,
        title: props.name,
        image: props.image,
        price : props.price,
        quantity: qty,
    }

    const addToCartHandler = (event) => {
        event.preventDefault();
        addItemToCart(addItemObj);    
    };

    return (
        <>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ height: "400px", width: "400px" }}
            >
                <Stack className="d-flex justify-content-center align-items-center" gap={2} >
                    <h3>{props.name}</h3>
                    <Image
                        src={props.image}
                        style={{ width: "250px" }}
                        fluid
                    />
                    <Stack direction="horizontal" gap={3}>
                        <h5>₹ {props.price}</h5>
                        <Button
                            variant="primary"
                            style={{ marginLeft: "auto" }}
                            onClick={addToCartHandler}
                        > ADD TO CART </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default Items;
