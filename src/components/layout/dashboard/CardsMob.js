import React, { Fragment } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';


const Cards = ({ warehouse }) => {
    return (
        <Fragment>
            <Card style={{ marginTop: '1.5rem', marginBottom: '1.5rem', padding: '0px', borderRadius: '0px', borderLeft: '0px', borderRight: '0px', borderTop: '0px' }}>
                <Card.Body style={{ padding: '0px', margin: '0px' }}>
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col sm={4} style={{ margin: '0px', padding: '0px' }}>
                            <img src={PlaceholderImage} alt={'loading'} style={{ width: '100%', height: '12rem' }} />
                        </Col>
                        <Col sm={8} style={{ margin: '0px', padding: '0px' }}>
                            <Row style={{ margin: '0px', padding: '0px' }}>
                                <Col style={{ margin: '1rem 1rem', padding: '0px' }} className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                    <div style={{ fontSize: '17px', fontWeight: 'bold', height: '1.5rem', overflow: 'hidden' }}> { warehouse.warehouseDetails.name } </div>
                                    <div style={{ fontSize: '20px', color: '#273390', fontWeight: 'bold' }}> { warehouse.warehouseDetails.pricing } / sq. ft.  </div>
                                </Col>
                                <Col style={{ margin: '1rem 1rem', padding: '0px' }} className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                    <Button variant='primary' style={{ width: '100%', height: '100%', backgroundColor: '#273390', border: '0px' }}>
                                        Send Request
                                    </Button>
                                </Col>
                            </Row>
                            <hr style={{ margin: '0rem' }}></hr>
                            <Row style={{ margin: '0px' }}>
                                <Col style={{ margin: '0.25rem 1rem', padding: '0px', fontSize: '14px' }}>
                                    <div style={{ fontSize: '14px' }}> <b style={{fontWeight: 'bold'}}>Address</b> : { `${warehouse.warehouseDetails.address}, ${warehouse.location.locality}, ${warehouse.location.city}, ${warehouse.location.state}.` } </div>
                                </Col>
                            </Row>
                            <Row style={{ margin: '0px' }}>
                                <Col sm={5} style={{ margin: '0.25rem 1rem', padding: '0px' }}>
                                    <div style={{ fontSize: '14px' }}><b style={{fontWeight: 'bold'}}>Area Covered :</b> {warehouse.warehouseDetails.areaCovered} sq. ft.</div>
                                </Col>
                                <Col sm={7} style={{ margin: '0.25rem 1rem', padding: '0px' }}>
                                    <div style={{ fontSize: '14px' }}><b style={{fontWeight: 'bold'}}>Deposit :</b> {warehouse.warehouseDetails.deposit}/- (Negotiable)</div>
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
