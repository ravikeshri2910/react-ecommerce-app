import React from "react";
import { Button, CloseButton } from "react-bootstrap";
import './Cart.css'
import Cartitem from "./Cartitem";


const Cart = (props) => {
    return (
        <div className="backdrop">
            <div className="cartContainer">

                <div className="closeBut">
                    <CloseButton onClick={props.onClickClose} />
                </div>
                <div className="cartHead">
                    <h1>Cart</h1>
                </div>
                <div className="cartdetails">
                    <div>

                        <h3>ITEM</h3><hr />
                    </div>
                    <div>

                        <h3>PRICE</h3><hr />
                    </div>
                    <div>

                        <h3>QUANTITY</h3><hr />
                    </div>

                </div>
                <Cartitem />
                <section className="purchaseButton">
                    <Button variant="info">Purchase</Button>{' '}

                </section>
            </div>
        </div>
    )
}

export default Cart