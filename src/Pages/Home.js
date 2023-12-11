import React, { useState } from 'react';


// import './App.css';
// import NavbarComponent from './Components/Navbar/NavbarComponent'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
import FooterComponet from '../Components/Footer/FooterComponet';
import ProductDetails from '../Components/Product/ProductDetails';
// import About from './Components/About/About';
import Model from '../Components/UI/Model';
import { Button, Navbar } from 'react-bootstrap';
import CartProvider from '../Components/Store/CartProvider';




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
