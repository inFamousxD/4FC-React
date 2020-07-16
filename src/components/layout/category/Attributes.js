import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sorter = () => {
    return (
        <Fragment>
            <div>
            Area Covered
            <Form.Control type="range" className="mt-2"/>
            <Form.Group>
                <div style={{marginTop: '0.5rem'}}>sq. ft.</div>
                <input type="Number" defaultValue="0" style={{width: '4rem', marginTop: '0rem', paddingLeft: '15px'}}/>
                <input type="Number" defaultValue="10000" style={{width: '5rem', marginTop: '0rem', paddingLeft: '15px', float: 'right'}}/>
            </Form.Group>
            </div>
            

            <Card className="mt-4" style={{ maxHeight: '15rem' }}>
                <Card.Header>
                    <Row>
                        <Col sm={10}>
                            Localities Nearby
                        </Col>
                        <Col>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body style={{
                    fontSize: '14px',
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
            <div className="mt-4">
            Area Covered
            <Form.Control type="range" className="mt-2"/>
            <Form.Group>
                <div style={{marginTop: '0.5rem'}}>sq. ft.</div>
                <input type="Number" defaultValue="0" style={{width: '4rem', marginTop: '0rem', paddingLeft: '15px'}}/>
                <input type="Number" defaultValue="10000" style={{width: '5rem', marginTop: '0rem', paddingLeft: '15px', float: 'right'}}/>
            </Form.Group>
            </div>
            <div>
            Area Covered
            <Form.Control type="range" className="mt-2"/>
            <Form.Group>
                <div style={{marginTop: '0.5rem'}}>sq. ft.</div>
                <input type="Number" defaultValue="0" style={{width: '4rem', marginTop: '0rem', paddingLeft: '15px'}}/>
                <input type="Number" defaultValue="10000" style={{width: '5rem', marginTop: '0rem', paddingLeft: '15px', float: 'right'}}/>
            </Form.Group>
            </div>
            <div>
            Area Covered
            <Form.Control type="range" className="mt-2"/>
            <Form.Group>
                <div style={{marginTop: '0.5rem'}}>sq. ft.</div>
                <input type="Number" defaultValue="0" style={{width: '4rem', marginTop: '0rem', paddingLeft: '15px'}}/>
                <input type="Number" defaultValue="10000" style={{width: '5rem', marginTop: '0rem', paddingLeft: '15px', float: 'right'}}/>
            </Form.Group>
            </div>

        </Fragment>
    )
}

export default Sorter
