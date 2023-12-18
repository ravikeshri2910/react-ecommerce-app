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

import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Home from './Pages/Home';
import CartProvider from './Components/Store/CartProvider';
import Store from './Components/StoreSite/Store';
import ContactUs from './Pages/ContactUs';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import FooterComponet from './Components/Footer/FooterComponet';
import ProductDetails from './Pages/ProductDetailsPage';
import LoginPage from './Pages/LoginPage';
import AuthContext from './Components/Store/AuthContext';

function App() {

  const authCntx = useContext(AuthContext)
  return (
    <div className='App'>
      <CartProvider>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>

            <Route path='/login'>
              <LoginPage />
            </Route>

            {
              authCntx.isLoggedIn &&
              <Route path='/store'>
                <Store />
              </Route>
            }
            <Route path='/contactUs'>
              <ContactUs />
            </Route>
            {
              authCntx.isLoggedIn &&
              <Route path='/' exact>
                <Home />
              </Route>
            }
            {
              authCntx.isLoggedIn &&
              <Route path='/products/:id'>
                <ProductDetails />
              </Route>
            }

            <Route path='*'>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </main>
        <FooterComponet />
      </CartProvider>
    </div>
  );
}

export default App;
