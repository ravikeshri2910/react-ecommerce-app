import React from "react";
import { Button } from "react-bootstrap";

import './CartDetails.css'

const CartDetails = (props) => {

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
            <Button variant="danger">Remove</Button>{' '}
        </div>
        <hr /> {/* Horizontal line */}
        
    </div>
    </>
}

export default CartDetails