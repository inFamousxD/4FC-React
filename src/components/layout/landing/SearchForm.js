import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import { Link } from 'react-router-dom';


const SearchForm = () => {
    return (
        <Fragment>
            <Container fluid style={{padding: '0px'}}>
                <Row>
                    <Col sm={5} style={{ backgroundColor: 'white' }}>
                        <Container className="mt-5">
                            <Form>
                                <Form.Text><h1 style={{fontWeight: '400'}}><b>Find the perfect warehouse for your needs</b></h1></Form.Text>
                                <Form.Group>
                                    <ButtonGroup className="mt-3 search-form dual-button">
                                        <Button variant="primary" size="lg" style={{
                                            borderTopLeftRadius: '5px',
                                            borderBottomLeftRadius: '5px'
                                        }}>READY TO LEASE</Button>
                                        <Button variant="outline-primary" size="lg" style={{
                                            borderTopRightRadius: '5px',
                                            borderBottomRightRadius: '5px',
                                        }}>BUILT TO SUIT</Button>
                                    </ButtonGroup>
                                </Form.Group>
                                <Form.Group className="mt-4">
                                    <Form.Label style={{fontSize: '16px'}}>Choose City</Form.Label>
                                    <Form.Control as="select">
                                        <option>Pune</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mt-4">
                                    <Form.Check inline label="Ready to Move"></Form.Check>
                                    <Form.Check inline label="Under Construction"></Form.Check>
                                </Form.Group>     
                                <Form.Group controlId="formBasicRange" className="mt-4">
                                    <h5><b>Area Covered</b></h5>
                                    <Form.Control type="range" />
                                </Form.Group>   
                                <Form.Group className="mt-4">
                                        <Form.Check inline label="Enter locality" style={{ marginBottom: '10px' }}></Form.Check>
                                        <Form.Check inline label="Guide me" className="ml-3"></Form.Check>
                                    <Form.Control as="select">
                                        <option>Pune</option>
                                    </Form.Control>
                                </Form.Group>
                                <Link to='/category'>
                                    <Button className="mt-4 mb-5" style={{
                                        borderRadius: '5px'
                                    }}> Search Warehouses</Button>
                                </Link>
                            </Form>
                        </Container>
                    </Col>
                    <Col sm={7} className="d-sm-none d-md-table" style={{ padding: '0', margin: '0' }}>
                        <img height='100%' style={{objectFit: "cover"}} width='100%' src={PlaceholderImage} alt='Warehouse'/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default SearchForm
