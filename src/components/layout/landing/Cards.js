import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = ({ warehouse }) => {
    
    return (
        <Fragment>
             <Card style={{marginRight: '2rem', marginBottom: '1rem', minWidth: '22rem', maxWidth: '23rem'}} className="mobile-card">
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title style={{ minHeight: '3rem' }}>
                        <Row>
                            <Col sm={7}>
                            { warehouse.warehouseDetails.name }
                            </Col>
                            <Col sm={5} style={{float: 'right', color: '#273390', fontSize: '20px'}}>
                                ₹ { warehouse.warehouseDetails.pricing }/sq.ft.
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Text>
                        {warehouse.warehouseDetails.address}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    Deposit: ₹ {warehouse.warehouseDetails.deposit}/-
                </Card.Body>
                <Card.Body style={{
                    paddingTop: '0px'
                }}>
                    <Link to={{ pathname:`/description/${warehouse.identifier}`, state: { warehouse: warehouse } }}>
                        <Button variant="outline-dark" onClick={window.scrollTo({top: 0, behavior: 'smooth'})} style={{ borderRadius: '5px' }}>Check Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Cards
