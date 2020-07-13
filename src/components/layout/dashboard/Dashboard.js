import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import Spinner from '../Spinner';
import Container from 'react-bootstrap/Container'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading, wishlist } }) => {
    useEffect(() => {
        getCurrentProfile();
        console.log('Profile loaded')
    }, []);

    return loading && profile===null ? <Spinner /> : 
    <Fragment>
        <Container>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className='lead'>
                { user && user[0].identity ? 
                <Fragment>
                    Logged in as {user[0].identity}
                    { wishlist.length > 0 ? 
                    <div>
                        Wishlist present
                    </div> : // No wishlist
                    <div>
                        Empty wishlist
                    </div> }
                </Fragment> : // No profile info
                <Fragment>
                    Null
                </Fragment> }
            </p>
        </Container> 
    </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
