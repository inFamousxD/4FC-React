import React from 'react';
import { Fragment } from 'react';
import Attributes from './Attributes';
import Sortbar from './Sortbar';
import Results from './Results';
// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';


const Category = () => {
    return (
        <Fragment>
            <Container fluid>
                <Row>
                    <img alt={{}} src={warehouseImage} style={{
                        objectFit: 'cover',
                        height: '6rem',
                        width: '100%',
                    }}/>
                </Row>
                <Row>
                    <Sortbar />
                </Row>
                <Row style={{ borderTop: '1px solid #aaaaaa', paddingTop: '1rem' }}>
                    <Col sm={3}>
                        <Attributes />
                    </Col>
                    <Col sm={9}>
                        <Results />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Category
