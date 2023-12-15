import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './ProductIcon.css'

import { Card, Button } from "react-bootstrap";
import CartContext from "../Store/CartContext";


const ProductIcon = (props) => {

    const cartcntx = useContext(CartContext)

    const addToCardHandler = () =>{
        cartcntx.addItems({...props.product,quantity : 1})
        //    cartcntx.items.push(props.product) // update cart items
        console.log('cartcntx', cartcntx)
    }

    const x= 2

    return (
        <div className="carddiv">


            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body >
                <div className="image-container">
                <Link to = {`/products/${props.product.title}/${props.product.imageUrl}`}><Card.Img className="zoom-image" variant="top" src={props.imageUrl} /></Link>
                </div>
                <div className="buttonDiv mt-3 px-2" >
                    <div>
                        <p href="#">Rs {props.price}</p>
                    </div>
                    <div>
                        <Button onClick={addToCardHandler} variant="primary">Add To Cart</Button>
                    </div>
                </div>
                </Card>
        </div>

    )
}

export default ProductIcon