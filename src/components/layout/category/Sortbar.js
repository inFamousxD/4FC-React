import React, { Fragment } from 'react'
import { Form,Nav, Navbar } from 'react-bootstrap';

const Sortbar = props => {
    const { warehouses: { warehouses } } = props;
    console.log(props)
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
                            <Form.Control as="select" name='dockPlacement' onChange={(event) => (props.onChange(event.target.value))}>
                                <option style={{ fontSize: '18px' }}>Dock: One Side</option>
                                <option style={{ fontSize: '18px' }}>Dock: Both Sides</option>
                            </Form.Control>
                        </div>
                        {/* ------------------------------------------------------------------------------ */}
                        <div className='nav-link mr-3'>
                            <Form.Control as="select" name='flooring' onChange={(event) => (props.onChange(event.target.value))}>
                                <option style={{ fontSize: '18px' }}>Flooring: FM-2 Grade</option>
                                <option style={{ fontSize: '18px' }}>Flooring: Others</option>
                            </Form.Control>
                        </div>
                        {/* ------------------------------------------------------------------------------ */}
                        <div className='nav-link mr-3'>
                            <Form.Control as="select" name='warehouseType' onChange={(event) => (props.onChange(event.target.value))}>
                                <option style={{ fontSize: '18px' }}>Type: Warehouse</option>
                                <option style={{ fontSize: '18px' }}>Type: Part of Warehouse</option>
                            </Form.Control>
                        </div>
                        {/* ------------------------------------------------------------------------------ */}
                        <div className='nav-link mr-3'>
                            <Form.Control as="select" name='dockCount' onChange={(event) => (props.onChange(event.target.value))}>
                                <option style={{ fontSize: '18px' }}>Docks: 00-10</option>
                                <option style={{ fontSize: '18px' }}>Docks: 10-20</option>
                                <option style={{ fontSize: '18px' }}>Docks: 20-40</option>
                            </Form.Control>
                        </div>
                        {/* ------------------------------------------------------------------------------ */}
                        <div className='nav-link mr-3'>
                            <Form.Control as="select" name='price' onChange={(event) => (props.onChange(event.target.value))}>
                                <option style={{ fontSize: '18px' }}>Relevance</option>
                                <option style={{ fontSize: '18px' }}>Price: Low to High</option>
                                <option style={{ fontSize: '18px' }}>Price: High to Low</option>
                            </Form.Control>
                        </div>
                        {/* ------------------------------------------------------------------------------ */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default Sortbar
