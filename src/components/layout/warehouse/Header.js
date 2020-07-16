import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">4FC-LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav>
                        <NavLink style={{marginRight:'30px'}} href="#"><i class="fa fa-phone-square" aria-hidden="true"></i> +91 999 999 9999</NavLink>
                        <NavLink style={{marginRight:'30px'}}>Blog</NavLink>
                        <Button variant='outline-dark'>Sign in/Create Account</Button>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;
