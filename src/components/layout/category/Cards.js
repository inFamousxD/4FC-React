import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = ({ warehouse }) => {
    return (
        <Fragment>
             <Card style={{marginBottom: '1rem'}}>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col sm={8}>
                                <div style={{
                                    fontSize: '18px'
                                }}>{ warehouse.warehouseDetails.name }</div>
                            </Col>
                            <Col sm={4}>
                                <div style={{
                                    color: 'blue',
                                    fontSize: '14px',
                                    float: 'right',
                                    marginTop: '1%'
                                }}>₹ 500/sq.ft.</div>
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Text style={{
                            opacity: '0.75'
                        }}>
                            Area covered: { warehouse.warehouseDetails.areaCovered } sq.ft. <br />                       
                            Locality: Koramangala, Bangalore
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Cards
