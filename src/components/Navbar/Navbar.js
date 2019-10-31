import React from 'react';
import './Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


const NavbarMenu = () => {
    return (
        <Navbar id="navbar" bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="text-left">
                    <Nav.Link className="NavLink" href="#home">Forside</Nav.Link>
                    <Nav.Link className="NavLink" href="#home">Min konto</Nav.Link>
                    <Nav.Link className="NavLink" href="#link">Mine rejser</Nav.Link>
                    <Nav.Link className="NavLink" href="#link">Indstillinger</Nav.Link>
                    <Nav.Link className="LogUd text-center mt-5" href="#link">Log ud</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarMenu;