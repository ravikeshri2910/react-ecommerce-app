import React, { useState } from 'react';

import './App.css';
import NavbarComponent from './Components/Navbar/NavbarComponent'
import FooterComponet from './Components/Footer/FooterComponet';
import ProductDetails from './Components/Product/ProductDetails';
import Cart from './Components/Cart/Cart';
import Model from './Components/UI/Model';
import { Button, Navbar } from 'react-bootstrap';
import CartProvider from './Components/Store/CartProvider';




function App() {

  const [cartOpen, setCartOpen] = useState(false)

  const closeCartHandler = () => {
    setCartOpen(false)
  }
  const openCartHandler = () => {
    setCartOpen(true)
  }

  return (
    <CartProvider>
      <div className="App">
        {cartOpen && <Model onCartClose={closeCartHandler} />}
        <header>
          <NavbarComponent onCartOpen={openCartHandler}></NavbarComponent>
          <p className='headline'>The Generics</p>
          {/* <Cart></Cart> */}
        </header>
        <section>
          <ProductDetails></ProductDetails>
        </section>
        <section className='addToCart'>
          <Button variant="secondary">Add To Cart</Button>{' '}
        </section>
        <footer>
          <FooterComponet></FooterComponet>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
