import React from 'react';
import { useEffect, useState, Fragment } from 'react';

import { Row, Col, Nav, Form, Navbar, Container, Spinner, Card, Button, ButtonGroup } from 'react-bootstrap';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';
import ScrollToTop from '../ScrollToTop';
import { getWarehouseList } from '../../../actions/warehouses';
import { connect } from 'react-redux'
import AttrSlider from './AttrSlider';
import Results from './Results';
import PropTypes from 'prop-types';

const Category = props => {
    const { getWarehouseList, warehouses } = props;
    // const { loading } = warehouses
    const [sortAttributes, setSortAttributes] = useState({
        price: 'Relevance',
        dockPlacement: 'all',
        dockCount: 'all',
        flooring: 'all',
        warehouseType: 'all'
    });

    const [advancedSort, setAdvancedSort] = useState({
        areaCovered: [0, 10000],
        monthlyRental: [0, 1000],
        clearHeight: [0, 300],
        centerHeight: [0, 300],
        safetyPrecautions: {
            waterSprinkler: false,
            fireHydrant: false
        },
        environmentalClearance: 'N/A',
        accessRoadWidth: 'N/A',
        parkingAvailable: 'N/A',
        warehouseType: 'N/A'
    });

    const boldStyle={
        fontSize: '18px'
    };

    const [warehouseArray, setWarehouseArray] = useState(warehouses.warehouses);

    const onChange = e => {
        setSortAttributes({ ...sortAttributes, [e.target.name]: e.target.value });
    };

    const handleAdvancedSortChange = e => {
        setAdvancedSort({ ...advancedSort, [e.target.name]: e.target.value })
    }

    var localities = [];
    warehouses.warehouses.forEach((el) => {
        localities.push(el.location.locality)
    });
    var localitySet = [...new Set(localities)];

    var sorted = [...warehouses.warehouses];
    const sortFunction = () => {
        // Price
        if ( sortAttributes.price === 'Price: Low to High') {
            sorted = [...sorted].sort((a, b) => a.warehouseDetails.pricing - b.warehouseDetails.pricing )
            setWarehouseArray(sorted)
        } else if ( sortAttributes.price === 'Price: High to Low') {
            sorted = [...sorted].sort((a, b) => b.warehouseDetails.pricing - a.warehouseDetails.pricing )
            setWarehouseArray(sorted)
        } else if ( sortAttributes.price === 'Relevance') {
            setWarehouseArray(sorted)
        } 
        // Dick Placement
        if ( sortAttributes.dockPlacement === 'Dock: Both Sides') {
            sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.dockPlacement === 'Two Sided' })
            setWarehouseArray(sorted)
        } else if ( sortAttributes.dockPlacement === 'Dock: One Side') {
            sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.dockPlacement === 'One Sided' })
            setWarehouseArray(sorted)
        }
        // Flooring Type
        if ( sortAttributes.flooring === 'Flooring: FM-2 Grade') {
            sorted = sorted.filter((warehouse) => { return warehouse.amenitiesProvided.flooringType === 'FM2 Grade' })
            setWarehouseArray(sorted)
        } else if ( sortAttributes.flooring === 'Flooring: Others') {
            sorted = sorted.filter((warehouse) => { return warehouse.amenitiesProvided.flooringType !== 'FM2 Grade' })
            setWarehouseArray(sorted)
        }
    }

    useEffect(() => {
        getWarehouseList();
    }, [getWarehouseList]);

    return (
        !warehouses.loading ? 
        <div style={{ backgroundColor: 'white' }}>
        {/* ----------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------- */}
            <ScrollToTop />
        {/* ----------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------- */}
            <Container fluid>
                <Row>
                    <img alt={{}} src={warehouseImage} style={{
                        objectFit: 'cover',
                        height: '6rem',
                        width: '100%',
                    }}/>
                </Row>
                <Row>
                <Fragment>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{minHeight: '4rem', width: '100%'}}>
                        <Navbar.Brand>
                            Loaded {warehouseArray.length} Warehouse Results
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto"/>
                            <Nav>
                                <div className='nav-link mr-3'>
                                    <Form.Control as="select" name='dockPlacement' onChange={e => onChange(e)}>
                                        <option style={{ fontSize: '18px' }}>Dock: All</option>
                                        <option style={{ fontSize: '18px' }}>Dock: One Side</option>
                                        <option style={{ fontSize: '18px' }}>Dock: Both Sides</option>
                                    </Form.Control>
                                </div>
                                {/* ------------------------------------------------------------------------------ */}
                                <div className='nav-link mr-3'>
                                    <Form.Control as="select" name='flooring' onChange={e => onChange(e)}>
                                        <option style={{ fontSize: '18px' }}>Flooring: All</option>
                                        <option style={{ fontSize: '18px' }}>Flooring: FM-2 Grade</option>
                                        <option style={{ fontSize: '18px' }}>Flooring: Others</option>
                                    </Form.Control>
                                </div>
                                {/* ------------------------------------------------------------------------------ */}
                                <div className='nav-link mr-3'>
                                    <Form.Control as="select" name='warehouseType' onChange={e => onChange(e)}>
                                        <option style={{ fontSize: '18px' }}>Type: All</option>
                                        <option style={{ fontSize: '18px' }}>Type: Warehouse</option>
                                        <option style={{ fontSize: '18px' }}>Type: Part of Warehouse</option>
                                    </Form.Control>
                                </div>
                                {/* ------------------------------------------------------------------------------ */}
                                <div className='nav-link mr-3'>
                                    <Form.Control style={{minWidth: '10rem'}} as="select" name='dockCount' onChange={e => onChange(e)}>
                                        <option style={{ fontSize: '18px' }}>No. Docks: All</option>
                                        <option style={{ fontSize: '18px' }}>No. Docks: 00-10</option>
                                        <option style={{ fontSize: '18px' }}>No. Docks: 10-20</option>
                                        <option style={{ fontSize: '18px' }}>No. Docks: 20-40</option>
                                    </Form.Control>
                                </div>
                                {/* ------------------------------------------------------------------------------ */}
                                <div className='nav-link mr-3'>
                                    <Form.Control as="select" name='price' onChange={e => onChange(e)}>
                                        <option style={{ fontSize: '18px' }}>Relevance</option>
                                        <option style={{ fontSize: '18px' }}>Price: Low to High</option>
                                        <option style={{ fontSize: '18px' }}>Price: High to Low</option>
                                    </Form.Control>
                                </div>
                                {/* --------------------------End of Sortbar------------------------------------- */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Fragment>
                </Row>
                <Row style={{ borderTop: '1px solid #aaaaaa', paddingTop: '1rem' }}>
                    <Col sm={3}>
                        <div className='ml-2 mr-2 attribute-sidebar'>
                            {/* APPLY FILTERS ------------------------- */}
                            <div>
                                <Button variant="dark" size="lg" style={{
                                    width: '100%',
                                    marginBottom: '1rem'
                                }} onClick={sortFunction} >Apply Filters</Button>
                            </div>
                            <div>
                                <div style={boldStyle}>Area Covered [ in square feet ]</div>
                                <Form.Group>
                                    <AttrSlider name='areaCovered' bounds={[0, 10000]} step={100} onChange={e => handleAdvancedSortChange(e)}/>
                                </Form.Group>
                            </div>
                            <Card className="mt-4 mb-4" style={{ maxHeight: '15rem' }}>
                                <Card.Header>
                                    <Row>
                                        <Col sm={6}>
                                            Localities
                                        </Col>
                                        <Col sm={6}>
                                            <i className="fa fa-search float-right" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body style={{
                                    fontSize: '16px',
                                    paddingLeft: '10px',
                                    paddingTop: '1rem',
                                    overflow: 'hidden',
                                    overflowY: 'scroll'
                                }}> {   
                                        localitySet.map((locality, key) => {
                                            return (
                                            <div key={key} style={{ marginBottom: '0.5rem' }}>
                                                <Form.Check inline label={locality} key={key} className="ml-3"/>
                                            </div>)
                                        })
                                    }
                                    
                                </Card.Body>
                            </Card>
                            <div>
                                <div style={boldStyle}>Monthly Rental [ per square feet ]</div>
                                <Form.Group>
                                    <AttrSlider name='monthlyRental' bounds={[0, 1000]} step={100} onChange={e => handleAdvancedSortChange(e)}/>
                                </Form.Group>
                            </div>
                            <div>
                                <div style={boldStyle}>Clear Height [ in feet ]</div>
                                <Form.Group>
                                    <AttrSlider name='clearHeight' bounds={[0, 300]} step={10} onChange={e => handleAdvancedSortChange(e)}/>
                                </Form.Group>
                            </div>
                            <div>
                                <div style={boldStyle}>Center Height [ in feet ]</div>
                                <Form.Group>
                                    <AttrSlider name='centerHeight' bounds={[0, 300]} step={10} onChange={e => handleAdvancedSortChange(e)}/>
                                </Form.Group>
                            </div>
                            <div>
                            <Form.Group>
                                <div style={boldStyle}>Safety Precautions</div>
                                <ButtonGroup className="mt-3" style={{
                                    width: '100%'
                                }}>
                                    <Button variant="outline-dark" size="lg" style={{
                                        borderTopLeftRadius: '5px',
                                        borderBottomLeftRadius: '5px',
                                        maxWidth: '50%'
                                    }}>Water Sprinkler</Button>
                                    <Button variant="outline-dark" size="lg" style={{
                                        borderTopRightRadius: '5px',
                                        borderBottomRightRadius: '5px',
                                        maxWidth: '50%'
                                    }}>Fire Hydrant</Button>
                                </ButtonGroup>
                            </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <div style={boldStyle}>Environmental Clearance</div>
                                    <Row className='mt-2'>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="Yes"></Form.Check>
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="No"></Form.Check>
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="N/A"></Form.Check>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>

                            <Card className="mt-4 mb-4" style={{ maxHeight: '15rem' }}>
                                <Card.Header> Approving Authority</Card.Header>
                                <Card.Body style={{
                                    fontSize: '16px',
                                    paddingLeft: '10px',
                                    paddingTop: '1rem',
                                    overflow: 'hidden',
                                    overflowY: 'scroll'
                                }}>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <Form.Check inline label="Panchayat" className="ml-3"></Form.Check>
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <Form.Check inline label="Anekal Planning Authority" className="ml-3"></Form.Check>
                                    </div>
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <Form.Check inline label="BBMP" className="ml-3"></Form.Check>
                                    </div>
                                </Card.Body>
                            </Card>

                            <div>
                                <Form.Group>
                                    <div style={boldStyle}>Access Road Width</div>
                                    <Row className='mt-2'>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="~40 ft."></Form.Check>
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="~60 ft."></Form.Check>
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="~60+ ft."></Form.Check>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                            <div>
                                <Form.Group>
                                    <div style={boldStyle}>Parking Available</div>
                                    <Row className='mt-2'>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="Yes"></Form.Check>
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="No"></Form.Check>
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                        <Form.Check inline label="N/A"></Form.Check>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </div>
                            <Form.Group>
                                <div style={boldStyle}>Warehouse Type</div>
                                <Row className='mt-2'>
                                    <Col className='col-xs-6 col-sm-6 col-md-6 col-lg-6' style={{ height: '2rem', fontSize: '18px' }}>
                                    <Form.Check inline label="Independant"></Form.Check>
                                    </Col>
                                    <Col className='col-xs-6 col-sm-6 col-md-6 col-lg-6' style={{ height: '4rem', fontSize: '18px' }}>
                                    <Form.Check inline label="Logistics Park"></Form.Check>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col sm={9}>
                    {/* ----------------------------------------------------------------------------------------------- */}
                    {/* ----------------------------------------------------------------------------------------------- */}
                        <Results warehouses={warehouseArray}/>
                    {/* ----------------------------------------------------------------------------------------------- */}
                    {/* ----------------------------------------------------------------------------------------------- */}
                    </Col>
                </Row>
            </Container>
        </div> : <Spinner style={{ backgroundColor: 'white' }}></Spinner>
    )
}


Category.propTypes = {
    getWarehouseList: PropTypes.func.isRequired,
    warehouses: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getWarehouseList })(Category)
