import React, { useEffect } from "react";

import './ProductDetails.css'
import ProductIcon from "./ProductIcon";
import { Card , ListGroup} from "react-bootstrap";

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

const ProductDetails = props => {

    function fetchDataHandler(){
        fetch(`https://swapi.dev/api/films/`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log('data' , data.results)

            const transformedData = data.results.map(newData =>{
               
            })
        })
    }

    useEffect(()=>{
        fetchDataHandler()
    },[])

    const products = Dummy_Products.map((product) => {
        return (
            <>
                <ProductIcon
                        key = {product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        product={product}
                    />
            </>
        )
    })


    return (
        <div className="details">
            {products}
        </div>
    )
}

export default ProductDetails