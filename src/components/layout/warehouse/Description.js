import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';
import './description.css';
import Button from 'react-bootstrap/Button';
import map_placeholder from '../../../image/map_placeholder.jpg';
import Featured from './Featured';
import ScrollToTop from '../ScrollToTop';

const Description = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <div>
                <img height='420px' style={{objectFit: "cover"}} width='100%' src={warehouseImage} alt='Warehouse'/>
            </div>

            <Row className="card-class">
                <Col sm={8}>
                <Container fluid> 
                        <Row>
                            <Col sm={10}>
                                <h3><b>Transport Corp India - Phase 2 </b></h3>
                            </Col>
                            <Col sm={2}>
                                <i className="fa fa-twitter mr-2" aria-hidden="true"/>
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </Col>
                        </Row>
                    <p className='item-desc'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled it to make a type specimen book. It has survived not only five 
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.     
                    </p>    
                </Container> 
                <Container fluid>
                    <Card>
                        <Card.Header>Details about this warehouse</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Dock Placement: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> Two sided </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Flooring Type: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> FM2 Grade </p> </Col>
                            </Row>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Flooring Type: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> FM2 Grade </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Truck Capacity: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 500 </p> </Col>
                            </Row>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Access Road Width: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 750m </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Distance from Highway: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 2km </p> </Col>
                            </Row>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Environmental Clearance: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> Yes </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Approving Authority: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> Panchayat </p> </Col>
                            </Row>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Clear height: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 700m </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Center Height: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 700m </p> </Col>
                            </Row>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Safety Precaution: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> Water Sprikler </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Area Covered: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 2500 sq. ft. </p> </Col>
                            </Row>
                            <Row>
                                <Col sm={3}> <p className='desc-key'> Access road Width: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> 300m </p> </Col>
                                <Col sm={3}> <p className='desc-key'> Warehouse Type: </p> </Col>
                                <Col sm={3}> <p className='desc-val'> Within Logistics Park </p> </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
                <Container fluid className="mt-4">
                    <Row>
                        <Col style={{ marginBottom: '2rem' }} sm={6}>
                            <Card style={{ height: '20rem' }}>
                                <Card.Header>Location <i className="fa fa-map-marker float-right" aria-hidden="true"></i></Card.Header>
                                <Card.Body style={{ 
                                    margin: '0px',
                                    padding: '0px',
                                }}>
                                    <div id='mapid'>
                                        <img src={map_placeholder} alt='Map' style={{ objectFit: 'cover', height: '20rem' }} id='map'></img>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card style={{
                                overflow: 'hidden',
                                overflowY: 'scroll',
                                maxHeight: '21rem'
                            }}>
                                <Card.Header>Nearby Landmarks</Card.Header>
                                <Card.Body style={{
                                    margin: '0px',
                                    padding: '0px'
                                }}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Nearest Highway: </Col>
                                                <Col>Desc</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Nearest Railway Station: </Col>
                                                <Col>Desc</Col>
                                            </Row>
                                        </ListGroup.Item>   
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Nearest Bus Stand: </Col>
                                                <Col>Desc</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Nearest Bank: </Col>
                                                <Col>Desc</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Nearest Petrol Pump: </Col>
                                                <Col>Desc</Col>
                                            </Row> 
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>    
                                                <Col>Nearest Park: </Col>
                                                <Col>Desc</Col>
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
                    marginLeft: '1rem'
                }}>
                    <Card.Header>
                        <Row>
                            <Col>
                                <div>
                                    Monthly Rental
                                </div>
                                <div style={{fontSize:30}}>
                                    500 / sq. ft.
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
                                <b>Address : </b> Some random address
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Area Covered : </b> 25,000 sq. ft
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Deposit : </b> 100,000/- (negotiable)
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
        </Fragment>
    )
}

export default Description;
