import React from "react";
import DisplayItemImage from "./DisplayItemImage";

import album1 from "../../assets/album_1-radius.jpg";
import album2 from "../../assets/album_2-snow-bulb.jpg";
import album3 from "../../assets/album_3-tender.jpg";
import album4 from "../../assets/album_4-waves.jpg";

const ProductItems = () => {
    const productsArr = [
        {
            id: Math.random() * 10000000,
            title: "Radius",
            price: 100,
            image: album1,
        },
        {
            id: Math.random * 10000000,
            title: "Snow Bulb",
            price: 50,
            image: album2,
        },
        {
            id: Math.random * 10000000,
            title: "Tender",
            price: 70,
            image: album3,
        },
        {
            id: Math.random * 10000000,
            title: "Waves",
            price: 100,
            image: album4,
        }
    ];

    return (
        <>
            <DisplayItemImage image={productsArr[0].image} />
            <DisplayItemImage image={productsArr[1].image} />
            <DisplayItemImage image={productsArr[2].image} />
            <DisplayItemImage image={productsArr[3].image} />
        </>
    );
}

export default ProductItems;
