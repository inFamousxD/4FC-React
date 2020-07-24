import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';
import Button from 'react-bootstrap/Button';
import LeafletMap from './LeafletMap';
import Featured from './Featured';
import ScrollToTop from '../ScrollToTop';
import Spinner from 'react-bootstrap/Spinner';
import Details from './Details';
import './description.css';


const Description = (object) => {
    if (!object.location.state)
        return (<div style={{
            padding: '2% 5%',
            display: 'block',
            backgroundColor: 'white',
            height: '93vh'
        }}>
            <h1>Unauthorised access. Return back to <Link to='/'>Home</Link>
 </h1>
        </div>)
    const { warehouse } = object.location.state;
    console.log(warehouse)
    return (
        warehouse.location.state ? 
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <ScrollToTop location={ warehouse.location }/>
            <div>
                <img height='420px' style={{objectFit: "cover"}} width='100%' src={warehouseImage} alt='Warehouse'/>
            </div>

            <Row className="card-class">
                <Col sm={8}>
                <Card className='side-card-mobile mr-3 ml-3'>
                    <Card.Header>
                        <Row>
                            <Col>
                                <div>
                                    Monthly Rental
                                </div>
                                <div style={{fontSize:25}}>
                                { warehouse.warehouseDetails.pricing } / sq. ft.
                                </div>
                            </Col>
                            <Col> 
                                <div className='float-right mt-3'>
                                <Button style={{borderRadius: '3px'}}>Send Request</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <b>Address : </b> { warehouse.warehouseDetails.address }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Area Covered : </b> { warehouse.warehouseDetails.areaCovered } sq. ft
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Deposit : </b> { warehouse.warehouseDetails.deposit }/- (negotiable)
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={6}>
                                Interested, but not sure to book?
                            </Col>
                            <Col sm={6}>   
                                <Button variant='light' style={{
                                    paddingLeft: '0px',
                                    paddingRight: '0px'
                                }}> <i className="fa fa-heart-o" style={{color:'red', borderRadius: '5px'}} aria-hidden="true"></i> Add to wishlist</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <Container fluid> 
                        <Row>
                            <Col sm={10}>
                                <div style={{ marginBottom: '1rem', fontSize: '30px' }}><b>{ warehouse.warehouseDetails.name }</b></div>
                            </Col>
                            <Col sm={2} style={{
                                fontSize: '30px',
                                float: 'right'
                            }}>
                                <i className="fa fa-twitter mr-3" aria-hidden="true"/>
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </Col>
                        </Row>
                    <p className='item-desc'>
                        Details : { warehouse.warehouseDetails.details } <br/>
                        Address : { warehouse.warehouseDetails.address }{', '}{ warehouse.location.locality }{', '}
                        { warehouse.location.city }{', '} { warehouse.location.state } 
                            
                    </p>    
                </Container> 
                <Details warehouse={ warehouse }/>
                <Container fluid className="mt-4">
                    <Row>
                        <Col style={{ marginBottom: '2rem' }} sm={6}>
                            <Card style={{ height: '22rem' }}>
                                <Card.Header>Location <i className="fa fa-map-marker float-right" aria-hidden="true"></i></Card.Header>
                                <Card.Body style={{ 
                                    margin: '0px',
                                    padding: '0px',
                                    width: '100%'
                                }}>
                                <LeafletMap details={ warehouse }/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card style={{height: '22rem'}}>
                                <Card.Header>Nearby Landmarks</Card.Header>
                                <Card.Body style={{
                                    overflow: 'hidden',
                                    overflowY: 'scroll',
                                    margin: '0px',
                                    padding: '0px'
                                }}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Highway:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Railway Station:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>   
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Bus Stand:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Bank:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Petrol Pump:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row> 
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>    
                                                <Col sm={5}><b>Nearest Park:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                    </ListGroup>
                                  </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
                </Col> 
                {/* STICKY ONLY FOR PC BROWSERS */}

                <Col sm={4}>
                <Card className='side-card mr-5 d-sm-none d-xs-none d-md-block d-lg-block d-xl-block' style={{
                    minWidth: '21rem',
                    marginLeft: '1rem',
                    maxHeight: '25rem'
                }}>
                    <Card.Header>
                        <Row>
                            <Col>
                                <div>
                                    Monthly Rental
                                </div>
                                <div style={{fontSize:30}}>
                                { warehouse.warehouseDetails.pricing } / sq. ft.
                                </div>
                            </Col>
                            <Col> 
                                <div className='float-right mt-3'>
                                <Button style={{borderRadius: '3px'}}>Send Request</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <b>Address : </b> { warehouse.warehouseDetails.address }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Area Covered : </b> { warehouse.warehouseDetails.areaCovered } sq. ft
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Deposit : </b> { warehouse.warehouseDetails.deposit }/- (negotiable)
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={6}>
                                Interested, but not sure to book?
                            </Col>
                            <Col sm={6}>   
                                <Button variant='light'> <i className="fa fa-heart-o" style={{color:'red', borderRadius: '5px'}} aria-hidden="true"></i> Add to wishlist</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                </Col>
            </Row>
            <Featured />
        </div> : <div style={{
            padding: '2% 5%',
            display: 'block',
            backgroundColor: 'white',
            height: '1000px'
        }}>
            <h1>Failed to fetch data <Spinner></Spinner></h1>
        </div>
    )
}

export default Description