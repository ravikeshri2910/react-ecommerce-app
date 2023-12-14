import React,{useState} from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavbarComponent.css'
import CartButton from "../Cart/CartButton";
import Model from '../UI/Model'

const NavbarComponent = (props) => {

    const [cartOpen, setCartOpen] = useState(false)

    const closeCartHandler = () => {
        setCartOpen(false)
    }
    const openCartHandler = () => {
        setCartOpen(true)
    }

    return (
        <>
             {cartOpen && <Model onCartClose={closeCartHandler} />}
            <Navbar className="navbar" bg="dark" fixed="top" data-bs-theme="dark">
                <div className="navContainer">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/contactUs">Contact</Link>
                    <Link className="link" to="/store">Store</Link>
                    <Link className="link" to='/about'>About</Link>
                </div>
                <div>
                    <CartButton onClickCart={openCartHandler}></CartButton>
                </div>
            </Navbar>
            <h4 className='head'>The Generics</h4>
        </>
    )
}

export default NavbarComponent