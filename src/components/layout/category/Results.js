import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {getWarehouseList} from '../../../actions/warehouses';
import {connect} from 'react-redux'
// import Container from 'react-bootstrap/Container';
import Cards from './Cards'


const Results = ({ getWarehouseList, auth: { user }, warehouses: { loading, warehouses } }) => {
    useEffect(() => {
        getWarehouseList();
    }, [getWarehouseList]);
    return (
        <Fragment>
            <Row style={{
                marginBottom: '2rem'
            }}>
                {
                    warehouses.map((warehouse, key) => {
                        return warehouse && <Col sm={4}><Cards warehouse = {warehouse} key={key}/></Col>
                    })
                }
            </Row>
        </Fragment>
    )
}

Results.propTypes = {
    getWarehouseList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    warehouses: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getWarehouseList })(Results)
