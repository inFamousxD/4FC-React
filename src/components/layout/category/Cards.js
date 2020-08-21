import React from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Cards = ({ warehouse }) => {
    return (
        <Col sm={4}>
            <Link to={{ pathname:`/description/${warehouse.identifier}`}} className="nav-link card-link" style={{ color: 'black', padding: '0px', margin: '0px' }}>
            <Card style={{marginBottom: '2rem', maxHeight: '30rem', border: '1px solid #ccc'}}>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title style={{height: '3rem', overflow: 'hidden'}}>
                        <Row>
                            <Col sm={7}>
                                <div style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold'
                                }}>{ warehouse.warehouseDetails.name }</div>
                            </Col>
                            <Col sm={5}>
                                <div style={{
                                    color: '#00097F',
                                    fontSize: '18px',
                                    marginTop: '1%',
                                    fontWeight: 'bold'
                                }}>₹ { warehouse.warehouseDetails.pricing }/sq.ft.</div>
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Text style={{
                            opacity: '0.75',
                            height: '3rem',
                            overflow: 'hidden'
                        }}>
                            <b>Area covered</b> : { warehouse.warehouseDetails.areaCovered } sq.ft. <br />                       
                            <b>Locality</b> : { warehouse.location.locality ? warehouse.location.locality : 'unspecified' }, {' '}
                            { warehouse.location.city ? warehouse.location.city : 'unspecified' } <br />
                    </Card.Text>
                </Card.Body>
            </Card>
            </Link>
        </Col>
    )
}

export default Cards
