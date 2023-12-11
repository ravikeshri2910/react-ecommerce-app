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
            <Navbar bg="dark" className="mt-3" data-bs-theme="dark">
                <div className="navContainer">
                    <Link to="/">Home</Link>
                    <Link to="/store">Store</Link>
                    <Link to='/about'>About</Link>
                </div>
                <div>
                    <CartButton onClickCart={openCartHandler}></CartButton>
                </div>
            </Navbar>
            <p className='headline'>The Generics</p>
        </>
    )
}

export default NavbarComponent