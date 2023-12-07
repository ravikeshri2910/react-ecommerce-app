import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import './CartDetails.css'
import CartContext from "../Store/CartContext";


const CartDetails = (props) => {

    const cartcntx = useContext(CartContext)

    const id = props.id

    const removeCartElementHandler = () =>{

        cartcntx.removeItems(id)
        console.log(cartcntx.removeItems)
    }

    return<>
     <div className="cardDetailsContainer">
        <div className="title">
            <img className="imgContainer" src={props.imageUrl} />
            <h4>{props.title}</h4>
        </div>
        <hr /> {/* Horizontal line */}
        <div className="price">
            <h4>Rs {props.price}</h4>
        </div>
        <hr /> {/* Horizontal line */}
        <div className="quantity">
            <input defaultValue={props.quantity}></input>
            <Button onClick={removeCartElementHandler} variant="danger">Remove</Button>{' '}
        </div>
        <hr /> {/* Horizontal line */}
        
    </div>
    </>
}

export default CartDetails