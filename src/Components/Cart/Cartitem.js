import React, { useEffect, useState } from "react";

import './Cartitem.css'
import CartDetails from "./CartDetails";

const cartElements = [

    {

        id: 'c1',
        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {
        id: 'c2',
        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {
        id: 'c3',
        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 2,

    }

]

const Cartitem = (props) => {

    const [totalPrice , setTotalPrice] = useState(0)

    useEffect(()=>{
        // calculating total price

        const totalPrice = cartElements.reduce((total , item)=>{
            const price = parseInt(item.price)
            const quantity = parseInt(item.quantity)
            return total + (price * quantity)
        },0)
        setTotalPrice(totalPrice)
    },[cartElements])

    let items = cartElements.map((item) => {

        return (

            <>
                <CartDetails
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    quantity={item.quantity}

                />
            </>
        )

    })
    return (
        <div className="details">
            {items}
            <div className="totalPrice">
                <h3>Total</h3>
                <h4>{totalPrice}</h4>
            </div>
        </div>
    )

}

export default Cartitem