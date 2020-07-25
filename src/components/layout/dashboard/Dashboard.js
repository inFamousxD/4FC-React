import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import { getWarehouseList } from '../../../actions/warehouses';
import Spinner from '../Spinner';
import Container from 'react-bootstrap/Container';
import Wishlist from './Wishlist';
import ScrollToTop from '../ScrollToTop';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }, warehouses }) => {
    useEffect(() => {
        getCurrentProfile();
        getWarehouseList();
    }, [getCurrentProfile]);

    let holdWishlist = [];
    if (!warehouses.loading && warehouses.warehouses) {
        user[0].wishlist.forEach((item) => {
            holdWishlist = holdWishlist.concat( warehouses.warehouses.filter((warehouse) => { return warehouse.identifier === item }) )
        })
    }

    return loading && profile===null ? <Spinner /> : 
    <div style={{ backgroundColor: 'white', height: '93vh'}} className='dashboard-div'>
        <ScrollToTop />
        <Container fluid style={{ padding: '0px', margin: '0px'}}>
            <div>
                { user && user[0].identity ? 
                <Fragment>
                    { user[0].wishlist.length > 0 ? 
                    <div>
                        <Wishlist wishlist={holdWishlist} />
                    </div> : // No wishlist
                    <div>
                        Empty wishlist
                    </div> }
                </Fragment> : // No profile info
                <Fragment>
                    Null
                </Fragment> }
            </div>
        </Container> 
    </div>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getWarehouseList: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getCurrentProfile, getWarehouseList })(Dashboard)
