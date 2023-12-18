import React from "react";
import {Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css'

const Dummy_Products = [
  {

      id:'m1',
      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  },

  {
      id:'m2',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },
  {
      id:'m3',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  },
  {
      id:'m4',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },
  {
      id:'m5',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  },
  {
      id:'m6',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },
  {
      id:'m7',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',


  },
  {
      id:'m8',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  },

  {
      id:'m9',
      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  }
]

const ProductDetails = props =>{

    const params = useParams()

    const id = params.id

    const product  = Dummy_Products.find((item)=>item.id === id)
   
    // const imageUrl = params.imageUrl

    console.log('product' + product)
    return <>
     <Card>
        <Card.Body>
          <Card.Text><b>
           {product.title}
           </b></Card.Text>
        </Card.Body>
        <img className="imageDiv" variant="bottom" alt="Product Image" src={product.imageUrl} />
      </Card>
    </>
}

export default ProductDetails