import React, { Fragment } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';


const Cards = ({ warehouse }) => {
    return (
        <Fragment>
            <Card style={{ marginBottom: '1.5rem', marginLeft: '1.5rem', marginRight: '1.5rem' }}>
                <Card.Body style={{ padding: '0px', margin: '0px' }}>
                    <Row>
                        <Col sm={4}>
                            <img src={PlaceholderImage} alt={'loading'} style={{ width: '22rem', height: '12rem' }} />
                        </Col>
                        <Col sm={8} >
                            <Row style={{ margin: '1rem 0rem' }}>
                                <Col sm={5}>
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}> { warehouse.warehouseDetails.name } </div>
                                </Col>
                                <Col sm={4}>
                                    <div style={{ fontSize: '13px' }}> Monthly Rental </div> <div style={{ fontSize: '20px', color: '#273390', fontWeight: 'bold' }}> { warehouse.warehouseDetails.pricing } / sq. ft.  </div>
                                </Col>
                                <Col sm={3}>
                                    <Button variant='primary' style={{ width: '100%', height: '100%', backgroundColor: '#273390', border: '0px' }}>
                                        Send Request
                                    </Button>
                                </Col>
                            </Row>
                            <hr style={{ margin: '0rem' }}></hr>
                            <Row style={{ margin: '1rem 0rem' }}>
                                <Col>
                                    <div style={{ fontSize: '17px' }}> <b style={{fontWeight: 'bold'}}>Address</b> : { `${warehouse.warehouseDetails.address}, ${warehouse.location.locality}, ${warehouse.location.city}, ${warehouse.location.state}.` } </div>
                                </Col>
                            </Row>
                            <Row style={{ margin: '1rem 0rem' }}>
                                <Col sm={5}>
                                    <div style={{ fontSize: '17px' }}><b style={{fontWeight: 'bold'}}>Area Covered :</b> {warehouse.warehouseDetails.areaCovered} sq. ft.</div>
                                </Col>
                                <Col sm={7}>
                                    <div style={{ fontSize: '17px' }}><b style={{fontWeight: 'bold'}}>Deposit :</b> {warehouse.warehouseDetails.deposit}/- (Negotiable)</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Cards
