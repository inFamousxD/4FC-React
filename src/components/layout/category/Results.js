import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Cards from './Cards'


const Results = () => {
    return (
        <Fragment>
            <Row style={{
                marginBottom: '2rem'
            }}>
                <Col sm={4}>
                    <Cards />
                </Col>
                <Col sm={4}>
                    <Cards />
                </Col>
                <Col sm={4}>
                    <Cards />
                </Col>
            </Row>
            <Row style={{
                marginBottom: '2rem'
            }}>
                <Col sm={4}>
                    <Cards />
                </Col>
                <Col sm={4}>
                    <Cards />
                </Col>
                <Col sm={4}>
                    <Cards />
                </Col>
            </Row>
            <Row style={{
                marginBottom: '2rem'
            }}>
                <Col sm={4}>
                    <Cards />
                </Col>
                <Col sm={4}>
                    <Cards />
                </Col>
                <Col sm={4}>
                    <Cards />
                </Col>
            </Row>
        </Fragment>
    )
}

export default Results
