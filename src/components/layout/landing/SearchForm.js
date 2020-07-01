import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';


const SearchForm = () => {
    return (
        <Fragment>
            <Container fluid style={{padding: '0px'}}>
                <Row>
                    <Col sm={5}>
                        <Container className="pr-5 pl-5 mt-5">
                            <Form>
                                <Form.Text><h1><b>Find the perfect warehouse for your needs</b></h1></Form.Text>
                                <Form.Group>
                                    <ButtonGroup className="mt-3">
                                        <Button variant="primary" size="lg">READY TO LEASE</Button>
                                        <Button variant="outline-primary" size="lg">BUILT TO SUIT</Button>
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
                                    <Form.Label style={{fontSize: '16px'}}>Selected Localities : 
                                        <Form.Check inline type="radio" label="Enter locality" className="ml-3"></Form.Check>
                                        <Form.Check inline type="radio" label="Guide me" className="ml-3"></Form.Check>
                                    </Form.Label>
                                    <Form.Control as="select">
                                        <option>Pune</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button className="mt-4 mb-5"> Search Warehouses

                                </Button>
                            </Form>
                        </Container>
                    </Col>
                    <Col sm={7}>
                        <img height='100%' style={{objectFit: "cover"}} width='100%' src={PlaceholderImage} alt='Warehouse'/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default SearchForm
