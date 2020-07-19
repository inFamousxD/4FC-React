import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const DescriptionRoute = ({ component: Component, warehouse: { identifier }, ...rest }) => (
    <Route { ...rest} render={ props => !identifier ? (<Redirect to='/landing'/>) : (<Component {...props}/>)}/>
)

DescriptionRoute.propTypes = {
    warehouse: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    warehouse: state.warehouse
})

export default connect(mapStateToProps)(DescriptionRoute)
