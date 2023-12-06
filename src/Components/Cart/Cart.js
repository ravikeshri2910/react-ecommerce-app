import React from "react";
import { Button, Badge } from "react-bootstrap";

import './Cart.css'

const Cart = (props) => {
    return (
        <>
            <button variant="dark" className="cart">
                cart
                <span className="cart-number">9</span>
            </button>
        </>
    )
}

export default Cart