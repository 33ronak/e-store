import React from "react";

import album1 from "../../assets/album_1-radius.jpg";
import album2 from "../../assets/album_2-snow-bulb.jpg";
import album3 from "../../assets/album_3-tender.jpg";
import album4 from "../../assets/album_4-waves.jpg";

const CartItems = () => {

    const cartElements = [
        {
            id: Math.random() * 10000000,
            title: "Radius",
            price: 100,
            image: album1,
        },
        {
            id: Math.random * 10000000,
            title: "Shadows",
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



}

export default CartItems;