import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Cards from '../landing/Cards';
import { Link } from 'react-router-dom';
import { getWarehouseList } from '../../../actions/warehouses';
import { connect } from 'react-redux';

const Featured = ({ getWarehouseList, auth: { user }, warehouses: { loading, warehouses } }) => {

    useEffect(() => {
        getWarehouseList();
    }, [getWarehouseList]);
    return (
        <Fragment>
            <Container fluid style={{ paddingTop: '5%', paddingBottom: '5%' }}>  
            <h1 style={{marginBottom: '2rem', marginLeft: '1%'}}>Featured Properties</h1>
            <div className="d-flex flex-row flex-nowrap" style={{overflowX: 'scroll', marginLeft: '1%'}}>

                {/* Fetch warehouses and pass to cards. */}
                {
                    warehouses.map((warehouse, key) => {
                        return !loading && warehouse && <Cards warehouse = {warehouse} key={key}/>
                    })
                }
            </div> 
            <Link to='/category'>
            <Button style={{marginTop: '1rem', width: '10rem', marginLeft: '1%', borderRadius: '5px'}}>Browse All</Button>
            </Link>
            </Container>
        </Fragment>
    )
}

Featured.propTypes = {
    getWarehouseList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    warehouses: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getWarehouseList })(Featured)
