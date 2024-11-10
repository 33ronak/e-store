import React from "react";
import Items from "./Item";
import { Container, Row, Col } from "react-bootstrap";

import album1 from "../../assets/album_1-radius.jpg";
import album2 from "../../assets/album_2-snow-bulb.jpg";
import album3 from "../../assets/album_3-tender.jpg";
import album4 from "../../assets/album_4-waves.jpg";

const ProductItems = () => {
    const productsArr = [
        {
            id: 1,
            title: "Radius",
            price: 100,
            image: album1,
        },
        {
            id: 2,
            title: "Shadows",
            price: 50,
            image: album2,
        },
        {
            id: 3,
            title: "Tender",
            price: 70,
            image: album3,
        },
        {
            id: 4,
            title: "Waves",
            price: 100,
            image: album4,
        }
    ];

    const productPairs = [];
    for (let i = 0; i < productsArr.length; i += 2) {
        productPairs.push(productsArr.slice(i, i + 2));
    }

    return (
        <Container className="my-5" fluid="md">
            <p className="display-6 d-flex align-items-center justify-content-center"
                style={{ height: "100px" }}
            >
                Music Albums
            </p>

            {productPairs.map((pair, index) => (
                <Row className="d-flex justify-content-center" key={index}>
                    {pair.map((product) => (
                        <Col xs={4} key={product.id}>
                            <Items
                                id={product.id}
                                name={product.title}
                                image={product.image}
                                price={product.price}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
};

export default ProductItems;
