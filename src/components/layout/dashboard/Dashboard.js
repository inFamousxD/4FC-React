import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import Spinner from '../Spinner';
import Container from 'react-bootstrap/Container'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading, wishlist } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile===null ? <Spinner /> : 
    <Fragment>
        <Container>
            <h1 className='large text-primary'>Dashboard</h1>
            <div className='lead'>
                { user && user[0].identity ? 
                <Fragment>
                    Logged in as {user[0].identity}
                    { user[0].wishlist.length > 0 ? 
                    <div>
                        Wishlist present.
                        <ul>
                        {user[0].wishlist.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })}
                        </ul>
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
