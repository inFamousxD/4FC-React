import React from 'react';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';
import ScrollToTop from '../ScrollToTop';
import Results from './Results';

import { connect } from 'react-redux'
import { getWarehouseList } from '../../../actions/warehouses';
import { InputNumber, InputGroup } from 'rsuite';
import { useEffect, useState, Fragment } from 'react';
import { Slider, FormControlLabel, Checkbox, Radio, RadioGroup } from '@material-ui/core';
import { Collapse, Row, Col, Nav, Form, Navbar, Container, Spinner, Card, Button, ButtonGroup } from 'react-bootstrap';

import PropTypes from 'prop-types';
import './Category.css'

const Category = props => {
    const { getWarehouseList, warehouses } = props;
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
        clearHeight: [0, 1000],
        centerHeight: [0, 300],
        safetyPrecautions: {
            waterSprinkler: false,
            fireHydrant: false
        },
        environmentalClearance: 'na',
        accessRoadWidth: 'na',
        parkingAvailable: 'na',
        warehouseType: 'na'
    });

    const boldStyle={
        fontSize: '18px'
    };

    const [warehouseArray, setWarehouseArray] = useState(warehouses.warehouses);
    const [open, setOpen] = useState(false);

    const onChange = e => {
        setSortAttributes({ ...sortAttributes, [e.target.name]: e.target.value });
    };

    // Slider States
    const [areaCov, setAreaCov] = React.useState([0, 10000]);
    const handleAreaCovChange = (event, newValue) => {
        setAreaCov(newValue);
        setAdvancedSort({ ...advancedSort, areaCovered: newValue })
    };

    const [monthlyRental, setMonthlyRental] = React.useState([0, 1000]);
    const handleMonthlyRentalChange = (event, newValue) => {
        setMonthlyRental(newValue);
        setAdvancedSort({ ...advancedSort, monthlyRental: newValue })
    };

    const [clearHeight, setClearHeight] = React.useState([0, 1000]);
    const handleClearHeightChange = (event, newValue) => {
        setClearHeight(newValue);
        setAdvancedSort({ ...advancedSort, clearHeight: newValue })
    };

    const [centerHeight, setCenterHeight] = React.useState([0, 300]);
    const handleCenterHeightChange = (event, newValue) => {
        setCenterHeight(newValue);
        setAdvancedSort({ ...advancedSort, centerHeight: newValue })
    };

    let localities = [];
    warehouses.warehouses.forEach((el) => {
        localities.push(el.location.locality)
    });
    let localitySet = [...new Set(localities)];
    let localityStateInitial = {};
    localitySet.forEach((loc) => {
        localityStateInitial[loc] = true;
    })

    let accessRoadWidthInitialState = {
        '~40 ft.': true,
        '~60 ft.': true,
        '60+ ft.': true
    };

    const [accessRoadWidth, setAccessRoadWidth] = React.useState(accessRoadWidthInitialState);
    const handleAccessRoadWidthChange = (event) => {
        setAccessRoadWidth({ ...accessRoadWidth, [event.target.name]: event.target.checked })
    };

    const [localityState, setLocalityState] = React.useState(localityStateInitial);
    const handleLocalityChange = (event) => {
        setLocalityState({ ...localityState, [event.target.name]: event.target.checked })
    };

    const [envClearance, setEnvClearance] = React.useState('na');
    const handleEnvClearanceChange = (event) => {
        setEnvClearance(event.target.value);
        setAdvancedSort({ ...advancedSort, environmentalClearance: event.target.value })
    };

    const [pkingAvailable, setPkingAvailable] = React.useState('na');
    const handlePkingAvailableChange = (event) => {
        setPkingAvailable(event.target.value);
        setAdvancedSort({ ...advancedSort, parkingAvailable: event.target.value })
    };


    let sorted = [...warehouses.warehouses];
    const sortFunction = () => {
        // Pull up filters
        document.getElementById('find-width').clientWidth < 800 && setOpen(!open)

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
        // Dock Placement
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
        // ADVANCED SORT

        // Area Covered Slider
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.areaCovered >= advancedSort.areaCovered[0] })
            setWarehouseArray(sorted)
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.areaCovered <= advancedSort.areaCovered[1] })
            setWarehouseArray(sorted)
        // Monthly Rental Slider
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.pricing >= advancedSort.monthlyRental[0] })
            setWarehouseArray(sorted)
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.pricing <= advancedSort.monthlyRental[1] })
            setWarehouseArray(sorted)
        // Clear Height Slider
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.clearHeight >= advancedSort.clearHeight[0] })
            setWarehouseArray(sorted)
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.clearHeight <= advancedSort.clearHeight[1] })
            setWarehouseArray(sorted)
        // Clear Height Slider
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.centerHeight >= advancedSort.centerHeight[0] })
            setWarehouseArray(sorted)
        sorted = sorted.filter((warehouse) => { return warehouse.warehouseDetails.centerHeight <= advancedSort.centerHeight[1] })
            setWarehouseArray(sorted)

        // Env Clearance
        if ( advancedSort.environmentalClearance === 'yes') {
            sorted = sorted.filter((warehouse) => { return warehouse.amenitiesProvided.environmentalClearance === true })
            setWarehouseArray(sorted)
        } else if ( advancedSort.environmentalClearance === 'no') {
            sorted = sorted.filter((warehouse) => { return warehouse.amenitiesProvided.environmentalClearance === false })
            setWarehouseArray(sorted)
        }

        // Parking Available
        if ( advancedSort.parkingAvailable === 'yes') {
            sorted = sorted.filter((warehouse) => { return warehouse.amenitiesProvided.parkingAvailable === true })
            setWarehouseArray(sorted)
        } else if ( advancedSort.parkingAvailable === 'no') {
            sorted = sorted.filter((warehouse) => { console.log(warehouse.amenitiesProvided.parkingAvailable); return warehouse.amenitiesProvided.parkingAvailable === false })
            setWarehouseArray(sorted)
        }

        // Access Road Width
        // let holdAccessRoadWidth = []
        // Object.keys(accessRoadWidth).forEach((key) => { 
        //     if ( accessRoadWidth[key] === true ) {
        //         holdAccessRoadWidth = holdAccessRoadWidth.concat(sorted.filter((warehouse) => { return warehouse.amenitiesProvided.accessRoadWidth === key }))
        //     }
        // })
        // sorted = holdAccessRoadWidth;
        // setWarehouseArray(sorted);

        let holdAccessRoadWidth = []
        if ( accessRoadWidth["~40 ft."] === true ) {
            holdAccessRoadWidth = holdAccessRoadWidth.concat(sorted.filter((warehouse) => { return warehouse.warehouseDetails.accessRoadWidth <= 40 }))
        } if ( accessRoadWidth["~60 ft."] === true ) {
            holdAccessRoadWidth = holdAccessRoadWidth.concat(sorted.filter((warehouse) => { return warehouse.warehouseDetails.accessRoadWidth <= 60 && warehouse.warehouseDetails.accessRoadWidth >= 41 }))
        } if ( accessRoadWidth["60+ ft."] === true ) {
            holdAccessRoadWidth = holdAccessRoadWidth.concat(sorted.filter((warehouse) => { return warehouse.warehouseDetails.accessRoadWidth >= 61 }))
        }
        sorted = holdAccessRoadWidth;
        console.log(sorted)
        setWarehouseArray(sorted)

        // Locality Sort
        let holdLocalities = []
        Object.keys(localityState).forEach((key) => { 
            if ( localityState[key] === true ) {
                holdLocalities = holdLocalities.concat(sorted.filter((warehouse) => { return warehouse.location.locality === key }))
            }
        })
        sorted = holdLocalities;
        setWarehouseArray(sorted);
    }

    useEffect(() => {
        getWarehouseList();
    }, [getWarehouseList]);

    return (
        !warehouses.loading ? 
        <div style={{ backgroundColor: 'white' }} id='find-width'>
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
                        <div className='ml-2 mr-2'>
                            <Button variant="dark" size="lg" onClick={sortFunction} style={{
                                width: '100%',
                                marginBottom: '1rem'
                            }}>Apply Filters</Button>
                        </div>
                        <div className='ml-2 mr-2 adv-filters-btn'>
                            <Button variant="outline-dark" size="lg" style={{
                                width: '100%',
                                marginBottom: '1rem'
                            }} onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}>Advanced Filters <i className='fa fa-arrow-down ml-2' aria-hidden="true"></i> </Button>
                        </div>
                        
                    <Collapse in={open}>
                        <div className='ml-2 mr-2 attribute-sidebar' id='adv-filters'>
                            {/* APPLY FILTERS ------------------------- */}
                            <div>
                                <div style={boldStyle}>Area Covered [ in square feet ]</div>
                                <Form.Group>
                                    {/* <AttrSlider name='areaCovered' bounds={[0, 10000]} step={100} onChange={(event) => handleAdvancedSortChange(event)}/> */}
                                    {/* SLIDER FOR AREA COVERED */}
                                    <div>
                                        <Slider
                                            name='area-covered'
                                            className="slider-class"
                                            style={{ marginTop: 16 }}
                                            value={areaCov}
                                            min={0}
                                            step={100}
                                            max={10000}
                                            onChange={(event, newValue) => handleAreaCovChange(event, newValue)}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                        />
                                        <InputGroup style={{ marginTop: '1rem' }}>
                                        <InputNumber
                                            min={0}
                                            max={10000}
                                            step={100}
                                            value={areaCov[0]}
                                            onChange={nextValue => {
                                            const [, end] = areaCov;
                                            setAreaCov([nextValue, end]);
                                            }}
                                        />
                                        <InputGroup.Addon>to</InputGroup.Addon>
                                        <InputNumber
                                            min={0}
                                            max={10000}
                                            step={100}
                                            value={areaCov[1]}
                                            onChange={nextValue => {
                                            const [start, ] = areaCov;
                                            setAreaCov([start, nextValue]);
                                            }}
                                        />
                                        </InputGroup>
                                    </div>
                                
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
                                        localitySet.map((loc, key) => {
                                            return (
                                            <div key={key} style={{ margin: '0', padding: '0' }}>
                                                <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        checked={localityState[loc]}
                                                        onChange={handleLocalityChange}
                                                        name={loc}
                                                        color="primary"
                                                    />
                                                    }
                                                    label={loc}
                                                />
                                            </div>)
                                        })
                                    }
                                    
                                </Card.Body>
                            </Card>
                            <div>
                                <div style={boldStyle}>Monthly Rental [ per square feet ]</div>
                                <Form.Group>
                                    {/* SLIDER FOR AREA COVERED */}
                                    <div>
                                        <Slider
                                            name='area-covered'
                                            className="slider-class"
                                            style={{ marginTop: 16 }}
                                            value={monthlyRental}
                                            min={0}
                                            step={10}
                                            max={1000}
                                            onChange={(event, newValue) => handleMonthlyRentalChange(event, newValue)}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                        />
                                        <InputGroup style={{ marginTop: '1rem' }}>
                                        <InputNumber
                                            min={0}
                                            max={1000}
                                            step={10}
                                            value={monthlyRental[0]}
                                            onChange={nextValue => {
                                            const [, end] = monthlyRental;
                                            setAreaCov([nextValue, end]);
                                            }}
                                        />
                                        <InputGroup.Addon>to</InputGroup.Addon>
                                        <InputNumber
                                            min={0}
                                            max={1000}
                                            step={10}
                                            value={monthlyRental[1]}
                                            onChange={nextValue => {
                                            const [start, ] = monthlyRental;
                                            setAreaCov([start, nextValue]);
                                            }}
                                        />
                                        </InputGroup>
                                    </div>
                                </Form.Group>
                            </div>
                            <div>
                                <div style={boldStyle}>Clear Height [ in feet ]</div>
                                <Form.Group>
                                    {/* SLIDER FOR AREA COVERED */}
                                    <div>
                                        <Slider
                                            name='area-covered'
                                            className="slider-class"
                                            style={{ marginTop: 16 }}
                                            value={clearHeight}
                                            min={0}
                                            step={10}
                                            max={1000}
                                            onChange={(event, newValue) => handleClearHeightChange(event, newValue)}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                        />
                                        <InputGroup style={{ marginTop: '1rem' }}>
                                        <InputNumber
                                            min={0}
                                            max={1000}
                                            step={10}
                                            value={clearHeight[0]}
                                            onChange={nextValue => {
                                            const [, end] = clearHeight;
                                            setAreaCov([nextValue, end]);
                                            }}
                                        />
                                        <InputGroup.Addon>to</InputGroup.Addon>
                                        <InputNumber
                                            min={0}
                                            max={1000}
                                            step={10}
                                            value={clearHeight[1]}
                                            onChange={nextValue => {
                                            const [start, ] = clearHeight;
                                            setAreaCov([start, nextValue]);
                                            }}
                                        />
                                        </InputGroup>
                                    </div>
                                </Form.Group>
                            </div>
                            <div>
                                <div style={boldStyle}>Center Height [ in feet ]</div>
                                <Form.Group>
                                <div>
                                    <Slider
                                        name='area-covered'
                                        className="slider-class"
                                        style={{ marginTop: 16 }}
                                        value={centerHeight}
                                        min={0}
                                        step={10}
                                        max={300}
                                        onChange={(event, newValue) => handleCenterHeightChange(event, newValue)}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                    />
                                    <InputGroup style={{ marginTop: '1rem' }}>
                                    <InputNumber
                                        min={0}
                                        max={300}
                                        step={10}
                                        value={centerHeight[0]}
                                        onChange={nextValue => {
                                        const [, end] = centerHeight;
                                        setAreaCov([nextValue, end]);
                                        }}
                                    />
                                    <InputGroup.Addon>to</InputGroup.Addon>
                                    <InputNumber
                                        min={0}
                                        max={300}
                                        step={10}
                                        value={centerHeight[1]}
                                        onChange={nextValue => {
                                        const [start, ] = centerHeight;
                                        setAreaCov([start, nextValue]);
                                        }}
                                    />
                                    </InputGroup>
                                </div>
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
                                    <RadioGroup aria-label="clearance" name="environmentalClearance" value={envClearance} onChange={handleEnvClearanceChange}>
                                    <Row className='mt-2'>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                            <FormControlLabel value="yes"  control={<Radio color='primary'/>} label="Yes" />
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                            <FormControlLabel value="no"  control={<Radio color='primary'/>} label="No" />
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                            <FormControlLabel value="na"  control={<Radio color='primary'/>} label="N/A" />
                                        </Col>
                                    </Row>
                                    </RadioGroup>
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
                            <div >
                            <div style={boldStyle}>Access Road Width</div>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={accessRoadWidth["~40 ft."]}
                                    onChange={handleAccessRoadWidthChange}
                                    name="~40 ft."
                                    color="primary"
                                />
                                }
                                label="~40 ft."
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={accessRoadWidth["~60 ft."]}
                                    onChange={handleAccessRoadWidthChange}
                                    name="~60 ft."
                                    color="primary"
                                    style={{ marginLeft: '1.5rem' }}
                                />
                                }
                                label="40~60 ft."
                            />
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={accessRoadWidth["60+ ft."]}
                                    onChange={handleAccessRoadWidthChange}
                                    name="60+ ft."
                                    color="primary"
                                    style={{ marginLeft: '1.5rem' }}
                                />
                                }
                                label="60 ft"
                            />
                            </div>
                            <div>
                                <Form.Group>
                                    <div style={boldStyle}>Parking Available</div>
                                    <RadioGroup aria-label="parking" name="parkingAvailable" value={pkingAvailable} onChange={handlePkingAvailableChange}>
                                    <Row className='mt-2'>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                            <FormControlLabel value="yes" color="primary" control={<Radio color='primary' />} label="Yes" />
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                            <FormControlLabel value="no" color="primary" control={<Radio color='primary' />} label="No" />
                                        </Col>
                                        <Col className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                                            <FormControlLabel value="na" color="primary" control={<Radio color='primary' />} label="N/A" />
                                        </Col>
                                    </Row>
                                    </RadioGroup>
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
                            <Form.Group>
                                <div className='adv-filters-btn'>
                                    <Button variant="dark" size="lg" onClick={sortFunction} style={{
                                        width: '100%',
                                        marginBottom: '1rem'
                                    }}>Apply Filters</Button>
                                </div>
                            </Form.Group>
                            
                        </div>
                    </Collapse>
                    
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
