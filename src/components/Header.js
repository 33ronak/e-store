import React from "react";
import Cart from "./Cart/Cart";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style={{ fontFamily: "serif" }} >
            <Navbar bg="black" expand="sm" variant="dark" >
                <Container fluid>
                    <Nav className="justify-content-center flex-grow-1">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/store">STORE</Nav.Link>
                        <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                        <Nav.Link as={Link} to="/contactus">CONTACT US</Nav.Link>
                    </Nav>
                    <Cart />
                </Container>
            </Navbar>
            <Container fluid className="p-3 mb-2 bg-secondary text-white" style={{ height: '200px' }}>
                <span className="display-1 d-flex align-items-center justify-content-center"
                    style={{ height: "100%" }}>
                    The Generics
                </span>
            </Container>
        </div>
    );
}

export default Header;