import React, { useState } from "react";

import CartContext from "./CartContext";

const CartProvider = props =>{

    const [items, setItems] = useState([])


    const addItemHandler = (newItems) =>{
        setItems((items) => {
            const index = items.findIndex((i) => i.id == newItems.id)

            // console.log('items'+ items)
            if (index >= 0) {
                items[index].quantity += Number(newItems.quantity)
                return [...items]
            }
            else {
                return [...items, newItems]
            }
        })
    }

    const removeItemHandler =(id)=>{

        setItems((items) => {
            const index = items.findIndex((i) => i.id == id)

            const updatedItems = [...items];
            updatedItems.splice(index, 1);
            return updatedItems;
        })
    }


    const cartcntx = {
        items: items,
        addItems : addItemHandler,
        removeItems : removeItemHandler
    }


    return(
        <CartContext.Provider value={cartcntx}>
              {console.log("Inside cartContext.provoder:", cartcntx)}
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider

