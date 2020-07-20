import React, { Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Sortbar = ({ warehouses: { warehouses } }) => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{minHeight: '4rem', width: '100%'}}>
                    <Navbar.Brand>
                        Loaded {warehouses.length} Warehouse Results
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"/>
                        <Nav>
                            <div className='nav-link mr-3'>
                                <div className="dropdown">
                                    <Button variant='outline-dark' className="btn btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dock Placement
                                    </Button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item" href="#">One Side</div>
                                        <div className="dropdown-item" href="#">Both Sides</div>
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------ */}
                            <div className='nav-link mr-3'>
                                <div className="dropdown">
                                    <Button variant='outline-dark' className="btn btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Flooring Type
                                    </Button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item" href="#">FM-2 Grade</div>
                                        <div className="dropdown-item" href="#">Others</div>

                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------ */}
                            <div className='nav-link mr-3'>
                                <div className="dropdown">
                                    <Button variant='outline-dark' className="btn btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        WarehouseType
                                    </Button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item" href="#">Warehouse</div>
                                        <div className="dropdown-item" href="#">Part of Warehouse</div>
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------ */}
                            <div className='nav-link mr-3'>
                                <div className="dropdown">
                                    <Button variant='outline-dark' className="btn btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        No. of docks
                                    </Button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item" href="#">00-10</div>
                                        <div className="dropdown-item" href="#">10-20</div>
                                        <div className="dropdown-item" href="#">20-40</div>
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------ */}
                            <div className='nav-link mr-3'>
                                <div className="dropdown">
                                    <Button variant='outline-dark' className="btn btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort By
                                    </Button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item" href="#">Relevance</div>
                                        <div className="dropdown-item" href="#">Price: Low to High</div>
                                        <div className="dropdown-item" href="#">Price: High to Low</div>
                                    </div>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------ */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Fragment>
    )
}

export default Sortbar
