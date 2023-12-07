import React, { useContext } from "react";


import './CartButton.css'
import CartContext from "../Store/CartContext";

const CartButton = (props) => {

    const cartcntx = useContext(CartContext)
    return (
        <>
            <button onClick={props.onClickCart} variant="dark" className="cart">
                cart
                <span className="cart-number">{cartcntx.items.length}</span>
            </button>
        </>
    )
}

export default CartButton