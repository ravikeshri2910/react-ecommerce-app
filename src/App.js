import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Home from './Pages/Home'
import CartProvider from './Components/Store/CartProvider';
import RootLayout from './Pages/Root';
import Store from './Components/StoreSite/Store';



const router = createBrowserRouter([

  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/store', element: <Store /> }
    ]
  }
]);


function App() {
  return (
    <div className='App'>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </div>
  );
}

export default App;
