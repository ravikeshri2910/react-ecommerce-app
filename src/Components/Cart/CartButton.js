import React from "react";


import './CartButton.css'

const CartButton = (props) => {
    return (
        <>
            <button onClick={props.onClickCart} variant="dark" className="cart">
                cart
                <span className="cart-number">9</span>
            </button>
        </>
    )
}

export default CartButton