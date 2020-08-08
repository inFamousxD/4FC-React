import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import { Link } from 'react-router-dom';
import { Slider } from '@material-ui/core';
import { InputNumber, InputGroup } from 'rsuite';


const SearchForm = ({ warehouses: { warehouses } }) => {
    const boldStyle={
        fontSize: '18px'
    };

    let citySet = [];
    warehouses.forEach((el) => {
        citySet.push(el.location.city)
    });
    citySet = [...new Set(citySet)];

    // ----------------------------------------------------------------------------------------------------------- //

    const [attributes, setAttributes] = React.useState({
        city: 'None',
        locality: 'None',
        areaCov: [0, 10000]
    })

    const [areaCov, setAreaCov] = React.useState([0, 10000]);
    const handleAreaCovChange = (event, newValue) => {
        setAreaCov(newValue);
        setAttributes({ ...attributes, areaCov: newValue })
    };

    const [categoryType, setCategoryType] = React.useState('lease')

    const handleCategoryTypeLease = () => {
        setCategoryType('lease')
    }

    const handleCategoryTypeSuit = () => {
        setCategoryType('suit')
    }

    let localities = []
    let localitySet = []
    localities = localities.concat(warehouses.filter((warehouse) => { return warehouse.location.city === attributes.city }))
    localities.forEach((el) => {
        localitySet.push(el.location.locality)
    });
    localitySet = [...new Set(localitySet)];

    const onChange = e => {
        setAttributes({...attributes, [e.target.name]: e.target.value })
    }

    return (
        <Fragment>
            <Container fluid style={{padding: '0px'}}>
                <Row>
                    <Col sm={5} style={{ backgroundColor: 'white' }} className='landing-page'>
                        <Container className="mt-5">
                            <Form>
                                <Form.Text><h1 style={{fontWeight: '400'}}><b>Find the perfect warehouse for your needs</b></h1></Form.Text>
                                <Form.Group>
                                    <ButtonGroup className="mt-3 search-form dual-button">
                                        <Button onClick={handleCategoryTypeLease} size="lg" style={{
                                            borderTopLeftRadius: '5px',
                                            borderBottomLeftRadius: '5px',
                                            backgroundColor: categoryType === 'lease' ? '#273390' : '#ffffff',
                                            border: '1px solid #273390',
                                            color: categoryType === 'lease' ? '#ffffff' : '#273390'
                                        }}>READY TO LEASE</Button>
                                        <Button onClick={handleCategoryTypeSuit} size="lg" style={{
                                            borderTopRightRadius: '5px',
                                            borderBottomRightRadius: '5px',
                                            color: categoryType === 'suit' ? '#ffffff' : '#273390',
                                            border: '1px solid #273390',
                                            backgroundColor: categoryType === 'suit' ? '#273390' : '#ffffff' 
                                        }}>BUILT TO SUIT</Button>
                                    </ButtonGroup>
                                </Form.Group>
                                <Form.Group className="mt-4">
                                    <Form.Label style={{fontSize: '16px'}}>Choose City</Form.Label>
                                    <Form.Control as="select" name='city' onChange={e => onChange(e)}>
                                        <option>None</option>
                                        {
                                            citySet.map((city, key) => {
                                                return <option key={key}>{city}</option>
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                                {   
                                    categoryType === 'lease' ?
                                        <Form.Group className="mt-4">
                                            <Form.Check inline label="Ready to Move"></Form.Check>
                                            <Form.Check inline label="Under Construction"></Form.Check>
                                        </Form.Group> : 
                                        <Form.Group className="mt-4">
                                            <Form.Check inline label="Ready to Move"></Form.Check>
                                            <Form.Check inline label="Under Construction"></Form.Check>
                                        </Form.Group>
                                }
                                  
                                <Form.Group controlId="formBasicRange" className="mt-4">
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
                                </Form.Group>   
                                <Form.Group className="mt-4">
                                        {/* <Form.Check inline label="Enter locality" style={{ marginBottom: '10px' }}></Form.Check>
                                        <Form.Check inline label="Guide me" className="ml-3"></Form.Check> */}
                                    <Form.Label style={{fontSize: '16px'}}>Choose Locality</Form.Label>
                                    <Form.Control as="select" name='locality' onChange={e => onChange(e)}>
                                        <option>None</option>
                                    {
                                        localitySet.map((locality, key) => {
                                            return <option key={key}>{locality}</option>
                                        })
                                    }
                                    </Form.Control>
                                </Form.Group>
                                <Link to={{ pathname:'/category', state:{attributes} }}>
                                    <Button className="mt-4 mb-5" style={{
                                        borderRadius: '5px',
                                        backgroundColor: '#273390',
                                        border: '0px'
                                    }}> Search Warehouses</Button>
                                </Link>
                            </Form>
                        </Container>
                    </Col>
                    <Col sm={7} className="d-sm-none d-md-table" style={{ padding: '0', margin: '0' }}>
                        <img height='100%' style={{objectFit: "cover"}} width='100%' src={PlaceholderImage} alt='Warehouse'/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default SearchForm
