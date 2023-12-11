import React, { useContext, useEffect, useState } from "react";

import './Cartitem.css'
import CartDetails from "./CartDetails";
import CartContext from "../Store/CartContext";

// const cartElements = [

//     {

//         id: 'c1',
//         title: 'Colors',

//         price: 100,

//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

//         quantity: 2,

//     },

//     {
//         id: 'c2',
//         title: 'Black and white Colors',

//         price: 50,

//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

//         quantity: 3,

//     },

//     {
//         id: 'c3',
//         title: 'Yellow and Black Colors',

//         price: 70,

//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

//         quantity: 2,

//     }

// ]

const Cartitem = (props) => {

    const [totalPrice , setTotalPrice] = useState(0)

    const cartcntx = useContext(CartContext)

    console.log( 'cartcntxHaer' , cartcntx)

    useEffect(()=>{
        // calculating total price


        const totalPrice = cartcntx.items.reduce((total , item)=>{
            const price = parseInt(item.price)
            const quantity = parseInt(item.quantity)
            return total + (price * quantity)
        },0)
        setTotalPrice(totalPrice)
    },[cartcntx.items])


    let items = cartcntx.items.map((item) => {

        return (

            <>
                {console.log('inside cartItems')}
                <CartDetails
                    key={item.id}
                    id={item.id}
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