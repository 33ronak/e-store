import React, { useState } from "react";
import ItemContext from "./item-context";

const ItemProvider = ({ children }) => {
    const [cart, setCart] = useState([]);



    const addItemToCart = (item) => {

        const cartCheck = cart.find(product => product.id === item.id);

        if(cartCheck == undefined) {
            setCart((prevCart) => [...prevCart, item]);
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity: item.quantity + 1}]);
            console.log(item.quantity);
        }     
        console.log(cartCheck);
        
    };

    const cartContextValue = { cart, addItemToCart };

    return (
        <ItemContext.Provider value={cartContextValue}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
