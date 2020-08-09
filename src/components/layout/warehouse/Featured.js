import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { getWarehouseList } from '../../../actions/warehouses';
import { connect } from 'react-redux';

const Featured = ({ getWarehouseList, auth: { user }, warehouses: { loading, warehouses } }) => {
    const attributes = {
        city: 'None',
        locality: 'None',
        areaCov: [0, 10000]
    }
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
            <Link to={{ pathname:'/category', state:{attributes} }}>
                    <Button className="mt-4 mb-5" style={{
                        borderRadius: '5px',
                        backgroundColor: '#2a55ae',
                        border: '0px',
                        width: '10rem',
                        marginLeft: '1%'
                    }}> Browse All </Button>
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
