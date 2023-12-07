

import React from "react";


const CartContext = React.createContext({
    items : [],
    addItems : (items) =>{},
    removeItem : (id) =>{}
})

export default CartContext