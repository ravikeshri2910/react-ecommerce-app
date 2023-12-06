import React from "react";
import './ProductIcon.css'

import { Card, Button } from "react-bootstrap";


const ProductIcon = (props) => {
    return (
        <div className="carddiv">


            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body >
                <div className="image-container">
                <Card.Img className="zoom-image" variant="top" src={props.imageUrl} />
                </div>
                <div className="buttonDiv mt-3 px-2" >
                    <div>
                        <p href="#">Rs {props.price}</p>
                    </div>
                    <div>
                        <Button variant="primary">Add To Cart</Button>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default ProductIcon