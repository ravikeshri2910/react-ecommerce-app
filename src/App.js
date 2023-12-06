import React from 'react';

import './App.css';
import NavbarComponent from './Components/Navbar/NavbarComponent'
import FooterComponet from './Components/Footer/FooterComponet';
import ProductDetails from './Components/Product/ProductDetails';
import { Button, Navbar } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <header>
        <NavbarComponent></NavbarComponent>
        <p className='headline'>The Generics</p>
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
  );
}

export default App;
