import React from "react";
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css'

const ProductDetails = props =>{

    const params = useParams()

    const title = params.title
    const imageUrl = 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
    // const imageUrl = params.imageUrl

    console.log('product' + imageUrl)
    return <>
     <Card>
        <Card.Body>
          <Card.Text>
           {title}
          </Card.Text>
        </Card.Body>
        <img className="imageDiv" variant="bottom" alt="Product Image" src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' />
        {/* <Card.Img variant="bottom" alt="Product Image" src='https://prasadyash2411.github.io/ecom-website/img/Album%202.png' /> */}
      </Card>
    </>
}

export default ProductDetails