import React from "react";

const ItemContext = React.createContext({
    cart: [],
    addItemToCart:  (obj) => {},
});

export default ItemContext;