// import React, { useState } from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import './App.css';
// import About from './Components/About/About';
// import Home from './Pages/Home'
// import CartProvider from './Components/Store/CartProvider';
// import RootLayout from './Pages/Root';
// import Store from './Components/StoreSite/Store';
// import ContactUs from './Pages/ContactUs';



// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/store', element: <Store /> },
//       { path: '/contactUs', element: <ContactUs/> },
//     ]
//   }
// ]);


// function App() {
//   return (
//     <div className='App'>
//     <CartProvider>
//       <RouterProvider router={router} />
//     </CartProvider>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Home from './Pages/Home';
import CartProvider from './Components/Store/CartProvider';
import Store from './Components/StoreSite/Store';
import ContactUs from './Pages/ContactUs';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import FooterComponet from './Components/Footer/FooterComponet';
import ProductDetails from './Pages/ProductDetailsPage';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/store'>
              <Store />
            </Route>
            <Route path='/contactUs'>
              <ContactUs />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/products/:title/:imageUrl'>
              <ProductDetails/>
            </Route>
          </Switch>
        </main>
        <FooterComponet />
      </CartProvider>
    </div>
  );
}

export default App;
