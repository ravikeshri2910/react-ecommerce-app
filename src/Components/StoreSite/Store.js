import React from "react";
import { Button } from "react-bootstrap";
import './Store.css'

const Dummy_store = [
    {
        id: 's1',
        date: 'JUL16',
        tittle: 'DETROIT, MI',
        type: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        id: 's2',
        date: 'JUL16',
        tittle: 'DETROIT, MI',
        type: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        id: 's3',
        date: 'JUL16',
        tittle: 'DETROIT, MI',
        type: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        id: 's4',
        date: 'JUL16',
        tittle: 'DETROIT, MI',
        type: 'DTE ENERGY MUSIC THEATRE'
    },
    {
        id: 's5',
        date: 'JUL16',
        tittle: 'DETROIT, MI',
        type: 'DTE ENERGY MUSIC THEATRE'
    },
]



const Store = props => {

    const storeProduct = Dummy_store.map((item) => {
        return (
            <>
                <div className="storeDetails">
                    <div>{item.date}</div>
                    <div>{item.tittle}</div>
                    <div>{item.type}</div>
                    <div><Button variant="info">BUY TICKETS</Button>{' '}</div>
                </div><hr />
            </>
        )
    })
    return <diV className='store'>

        <div className="aboutHaed"><h3>TOURS</h3></div>
        <div>{storeProduct}</div>
    </diV>
}

export default Store