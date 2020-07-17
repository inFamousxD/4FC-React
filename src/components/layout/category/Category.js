import React from 'react';
import { Fragment, useEffect } from 'react';
import Attributes from './Attributes';
import Sortbar from './Sortbar';
import Results from './Results';
import PropTypes from 'prop-types';
// Bootstrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';
import ScrollToTop from '../ScrollToTop';

import {getWarehouseList} from '../../../actions/warehouses';
import {connect} from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';


const Category = ({ getWarehouseList, auth, warehouses }) => {
    useEffect(() => {
        getWarehouseList();
    }, [getWarehouseList]);

    return (
        !warehouses.loading ? 
        <Fragment>
            <ScrollToTop />
            <Container fluid>
                <Row>
                    <img alt={{}} src={warehouseImage} style={{
                        objectFit: 'cover',
                        height: '6rem',
                        width: '100%',
                    }}/>
                </Row>
                <Row>
                    <Sortbar warehouses={warehouses}/>
                </Row>
                <Row style={{ borderTop: '1px solid #aaaaaa', paddingTop: '1rem' }}>
                    <Col sm={3}>
                        <Attributes />
                    </Col>
                    <Col sm={9}>
                        <Results warehouses={warehouses}/>
                    </Col>
                </Row>
            </Container>
        </Fragment> : <Spinner></Spinner>
    )
}


Category.propTypes = {
    getWarehouseList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    warehouses: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getWarehouseList })(Category)
