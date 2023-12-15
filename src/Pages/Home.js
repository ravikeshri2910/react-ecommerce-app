import React, { useState } from 'react';


// import './App.css';
// import NavbarComponent from './Components/Navbar/NavbarComponent'

import ProductDetails from '../Components/Product/ProductDetails';
// import About from './Components/About/About';

import { Button, Navbar } from 'react-bootstrap';





function Home() {

  

  return (
    
    // <CartProvider>
      <div className="App">
        <section>
          <ProductDetails></ProductDetails>
        </section>
        <section className='addToCart'>
          <Button variant="secondary">Add To Cart</Button>{' '}
        </section>
      </div>
    // </CartProvider>
   
  );
}

export default Home;
