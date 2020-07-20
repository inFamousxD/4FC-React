import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Body from './Body';
import Featured from './Featured';
import ScrollToTop from '../ScrollToTop';
import { getWarehouseList } from '../../../actions/warehouses';
import { connect } from 'react-redux';
import './Landing.css'


const Landing = ({ getWarehouseList, auth: { user }, warehouses }) => {
    useEffect(() => {
        getWarehouseList();
    }, [getWarehouseList]);
    return (
        <div className="prevent-hor-scroll">
            <ScrollToTop />
            <SearchForm/>
            <Body/>
            <Featured warehouses={warehouses}/>
        </div>
    )
}

Landing.propTypes = {
    getWarehouseList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    warehouses: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getWarehouseList })(Landing)

