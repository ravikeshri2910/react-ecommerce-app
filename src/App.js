import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
// import NavbarComponent from './Components/Navbar/NavbarComponent'
// import FooterComponet from './Components/Footer/FooterComponet';
// import ProductDetails from './Components/Product/ProductDetails';
import About from './Components/About/About';
import Home from './Pages/Home'
import RootLayout from './Pages/Root';
import CartProvider from './Components/Store/CartProvider';
// import Model from './Components/UI/Model';
// import { Button, Navbar } from 'react-bootstrap';
// import CartProvider from './Components/Store/CartProvider';


const router = createBrowserRouter([

  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
    ]
  }
]);


function App() {
  return (
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
