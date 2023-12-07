import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './NavbarComponent.css'
import CartButton from "../Cart/CartButton";

const NavbarComponent = (props) => {
    return (
        <Navbar bg="dark" className="mt-3" data-bs-theme="dark">
            <div className="navContainer">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Store</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
            </div>
            <div>
                <CartButton onClickCart={props.onCartOpen}></CartButton>
            </div>

        </Navbar>
    )
}

export default NavbarComponent