import React, { useContext, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavbarComponent.css'
import CartButton from "../Cart/CartButton";
import Model from '../UI/Model'
import AuthContext from "../Store/AuthContext";

const NavbarComponent = (props) => {

    const [cartOpen, setCartOpen] = useState(false)

    const authCntx = useContext(AuthContext)

    console.log('authCntx.isLoggedIn', authCntx.isLoggedIn)

    const closeCartHandler = () => {
        setCartOpen(false)
    }
    const openCartHandler = () => {
        setCartOpen(true)
    }
    const logoutHandler = () => {
        // setCartOpen(true)
        authCntx.logout()
        console.log("here")
    }

    return (
        <>
            {cartOpen && <Model onCartClose={closeCartHandler} />}
            <Navbar className="navbar" bg="dark" fixed="top" data-bs-theme="dark">
                <div className="navContainer">
                    {authCntx.isLoggedIn && <Link className="link" to="/">Home</Link>}

                   <Link className="link" to="/contactUs">Contact</Link>
                    {authCntx.isLoggedIn && <Link className="link" to="/store">Store</Link>}
                    <Link className="link" to='/about'>About</Link>
                    {!authCntx.isLoggedIn && <Link className="link" to='/login'>Log In</Link>}
                    {authCntx.isLoggedIn && <Link onClick= {logoutHandler} className="link" to='/login'>Log out</Link>}

                </div>
                {/* <div>
                    <button onClick={logOutHandler}>LogOut</button>
                </div> */}
                <div>
                    {authCntx.isLoggedIn && <CartButton onClickCart={openCartHandler}></CartButton>}
                </div>
            </Navbar>
            <h4 className='head'>The Generics</h4>
        </>
    )
}

export default NavbarComponent