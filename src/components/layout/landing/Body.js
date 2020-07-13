import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import PlaceholderImage from '../../../image/warehouse_auth.jpg';

const Body = () => {
    return (
       <Fragment>
           <Container fluid style={{borderTop: '1px solid #cccccc', backgroundColor: '#EFEFEF', padding: '0px'}}>
               <Container fluid style={{ padding: "50px 100px" }}>
               <h1>Discover RealEstate trends in market.</h1>
                <h5>Custom Text here.</h5>

                <Row className="mt-4">
                    <Col>
                        <h1 style={{ fontSize: "50px" }}>01.</h1>
                        <h5>Post Requirements.</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                    <Col>
                        <h1 style={{ fontSize: "50px" }}>02.</h1>
                        <h5>Explore Warehouse.</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                    <Col>
                        <h1 style={{ fontSize: "50px" }}>03.</h1>
                        <h5>Request a Call Back.</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                    <Col>
                        <h1 style={{ fontSize: "50px" }}>04.</h1>
                        <h5>Finalise and Book</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                </Row>
               </Container>
               <Container fluid style={{padding: '0px'}}>
                    <Row>
                        <Col sm={4}>
                            <img style={{objectFit: "cover", height: '80%', width: '800px', top: '11%', position: 'absolute', verticalAlign: 'middle', zIndex: '2'}} src={PlaceholderImage} alt='Warehouse'/>
                        </Col>
                        <Col sm={8}>
                        <Card style={{ backgroundColor: '#CDD5E450', border: 'none' }}>
                            <Row>
                                <Col sm={4}>
                                </Col>
                                <Col sm={8} style={{ height: "500px", marginTop: '70px' }}>
                                    <Card.Body>
                                        <h1>Explore Amongst Best Warehouses</h1>
                                        <h5>Another set of custom text here.</h5>
                                        <Card style={{marginTop: '60px', width: '60%', border: '1px solid #aaaaaa'}}>
                                            <Card.Body>
                                                <img style={{objectFit: "cover", borderRadius: '50%', height: '100px', width: '100px', position: 'absolute', top: '-50px'}} src={PlaceholderImage} alt='Warehouse'/>
                                                <h5 className="mt-5">Transport Corp India Phase-2 -- $500 / sq. ft.</h5>
                                                <div className="mt-4">
                                                    Area covered : 20,000 sq. ft. <br></br>
                                                    Deposit : $1,00,000 (Negotiable)
                                                </div>
                                                <Button variant="outline-secondary" style={{ marginTop: '25px', borderRadius: '5px' }}>Check Details</Button>
                                            </Card.Body>
                                        </Card>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        </Col>
                    </Row>
               </Container>             
           </Container>
       </Fragment>
    )
}

export default Body
