import React, { useState } from "react";
import ItemContext from "./item-context";

const ItemProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    

    const addItemToCart = (item) => {

        

        const result = cart.filter(product => product.id === item.id).length > 0;

        if (result) {
            console.log(`Increase Quatity of  ${item.title} `);

            console.log(item);
            

            

        } else {
            const qunatity = 1;
            setCart((prevCart) => [...prevCart, {...item, qunatity}]);
        }        
        
    };

    const cartContextValue = { cart, addItemToCart };

    return (
        <ItemContext.Provider value={cartContextValue}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
