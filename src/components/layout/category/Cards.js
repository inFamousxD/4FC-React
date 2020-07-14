import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cards = () => {
    return (
        <Fragment>
             <Card>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col sm={8}>
                                <div style={{
                                    fontSize: '18px'
                                }}>Transport Corp India - Phase 2</div>
                            </Col>
                            <Col sm={4}>
                                <div style={{
                                    color: 'blue',
                                    fontSize: '14px',
                                    float: 'right',
                                    marginTop: '10%'
                                }}>₹ 500/sq.ft.</div>
                            </Col>
                        </Row>
                    </Card.Title>
                    <Card.Text>
                        <hr/>
                        <div style={{
                            opacity: '0.75'
                        }}>
                            Area covered: 36,000 sq. ft.
                        </div>
                        <div style={{
                            opacity: '0.75'
                        }}>
                            Locality: Koramangala, Bangalore
                        </div>
                    
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Cards
