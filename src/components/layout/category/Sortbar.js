import React, { Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Sortbar = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{minHeight: '4rem', width: '100%'}}>
                    <Navbar.Brand>
                        Loaded 0 Warehouse Results
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"/>
                        <Nav>
                            <div className='nav-link' style={{marginRight:'6rem'}}>
                                Options1
                            </div>
                            <div className='nav-link' style={{marginRight:'6rem'}}>
                                Options2
                            </div>
                            <div className='nav-link' style={{marginRight:'6rem'}}>
                                Options3
                            </div>
                            <div className='nav-link' style={{marginRight:'20rem'}}>
                                Options4
                            </div>
                            <div className='nav-link' style={{marginRight:'30px'}}>
                                SortBy : Relevance
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Fragment>
    )
}

export default Sortbar
