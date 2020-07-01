import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <Link to='/' className='link'>4FC-LOGO</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav>
                        <NavLink style={{marginRight:'30px'}}>
                            <i className="fa fa-phone mr-2" aria-hidden="true"></i> 
                            <Link to='/contact' className='link'>+91 987-654-3210</Link>
                        </NavLink>
                        <NavLink style={{marginRight:'30px'}}>
                            <Link to='/blog' className='link'>Blog</Link>
                        </NavLink>
                        <Link to='/register' className='link-button'>
                            <Button variant='outline-dark'>Sign in/Create Account</Button>
                        </Link>    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default NavigationBar