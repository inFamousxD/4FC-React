import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttrSlider from './AttrSlider';
import { Button, ButtonGroup } from 'react-bootstrap';

const Sorter = () => {

    const boldStyle={
        fontSize: '18px'
    }

    return (
        <div className="ml-2 mr-2">
            <div>
                <div style={boldStyle}>Area Covered</div>
                <Form.Group>
                    <AttrSlider />
                </Form.Group>
            </div>
            

            <Card className="mt-4 mb-4" style={{ maxHeight: '15rem' }}>
                <Card.Header>
                    <Row>
                        <Col sm={6}>
                            Localities Nearby
                        </Col>
                        <Col sm={6}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body style={{
                    fontSize: '16px',
                    paddingLeft: '10px',
                    paddingTop: '1rem',
                    overflow: 'hidden',
                    overflowY: 'scroll'
                }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                    <Form.Check inline label="Location" className="ml-3"></Form.Check>
                    </div>
                </Card.Body>
            </Card>
            <div>
                <div style={boldStyle}>Monthly Rental</div>
                <Form.Group>
                    <AttrSlider />
                </Form.Group>
            </div>
            <div>
                <div style={boldStyle}>Clear Height</div>
                <Form.Group>
                    <AttrSlider />
                </Form.Group>
            </div>
            <div>
                <div style={boldStyle}>Center Height</div>
                <Form.Group>
                    <AttrSlider />
                </Form.Group>
            </div>
            <div>
            <Form.Group>
                <div style={boldStyle}>Safety Precautions</div>
                <ButtonGroup className="mt-3" style={{
                    width: '100%'
                }}>
                    <Button variant="outline-primary" size="lg" style={{
                        borderTopLeftRadius: '5px',
                        borderBottomLeftRadius: '5px',
                        maxWidth: '50%'
                    }}>Water Sprinkler</Button>
                    <Button variant="outline-primary" size="lg" style={{
                        borderTopRightRadius: '5px',
                        borderBottomRightRadius: '5px',
                        maxWidth: '50%'
                    }}>Fire Hydrant</Button>
                </ButtonGroup>
            </Form.Group>
            </div>
            <div>
                <Form.Group>
                    <div style={boldStyle}>Environmental Clearance</div>
                    <Row className='mt-2'>
                        <Col sm={4}>
                        <Form.Check inline label="Yes"></Form.Check>
                        </Col>
                        <Col sm={4}>
                        <Form.Check inline label="No"></Form.Check>
                        </Col>
                        <Col sm={4}>
                        <Form.Check inline label="N/A"></Form.Check>
                        </Col>
                    </Row>
                </Form.Group>
            </div>

            <Card className="mt-4 mb-4" style={{ maxHeight: '15rem' }}>
                <Card.Header> Approving Authority</Card.Header>
                <Card.Body style={{
                    fontSize: '16px',
                    paddingLeft: '10px',
                    paddingTop: '1rem',
                    overflow: 'hidden',
                    overflowY: 'scroll'
                }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <Form.Check inline label="Panchayat" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <Form.Check inline label="Anekal Planning Authority" className="ml-3"></Form.Check>
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <Form.Check inline label="BBMP" className="ml-3"></Form.Check>
                    </div>
                </Card.Body>
            </Card>

            <div>
                <Form.Group>
                    <div style={boldStyle}>Access Road Width</div>
                    <Row className='mt-2'>
                        <Col sm={4}>
                        <Form.Check inline label="40 ft."></Form.Check>
                        </Col>
                        <Col sm={4}>
                        <Form.Check inline label="40 - 60 ft."></Form.Check>
                        </Col>
                        <Col sm={4}>
                        <Form.Check inline label="60+ ft."></Form.Check>
                        </Col>
                    </Row>
                </Form.Group>
            </div>
            <div>
                <Form.Group>
                    <div style={boldStyle}>Parking Available</div>
                    <Row className='mt-2'>
                        <Col sm={4}>
                        <Form.Check inline label="Yes"></Form.Check>
                        </Col>
                        <Col sm={4}>
                        <Form.Check inline label="No"></Form.Check>
                        </Col>
                        <Col sm={4}>
                        <Form.Check inline label="N/A"></Form.Check>
                        </Col>
                    </Row>
                </Form.Group>
            </div>
            <Form.Group style={{
                fontSize: '15px'
            }}>
                <div style={boldStyle}>Environmental Clearance</div>
                <Row className='mt-2'>
                    <Col sm={6}>
                    <Form.Check inline label="Independant Box"></Form.Check>
                    </Col>
                    <Col sm={6}>
                    <Form.Check inline label="Within Logistics Park"></Form.Check>
                    </Col>
                </Row>
            </Form.Group>
        </div>
    )
}

export default Sorter
