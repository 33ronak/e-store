import React from "react";
import Cart from "./Cart/Cart";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <div style={{ fontFamily: "serif" }} >
            <Navbar bg="black" expand="sm" variant="dark" >
                <Container fluid>
                    <Nav className="justify-content-center flex-grow-1">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="/">STORE</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
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