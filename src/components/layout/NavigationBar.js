import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const NavigationBar = ({ auth: { isAuthenticated, loading }, logout}) => {
  const authLinks = (
        <Fragment>
            <div className='nav-link' style={{marginRight:'30px'}}>
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                <Link to='/dashboard' className='link'>Profile</Link>
            </div>
            <Link to='/' className='link' onClick={logout}>
                <Button variant='outline-dark' style={{borderRadius: '5px'}}>
                    Logout
                </Button>
            </Link>
        </Fragment>
    );
    
    const guestLinks = (
        <Link to='/register' className='link-button'>
            <Button variant='outline-dark' style={{borderRadius: '5px'}}>Sign in/Create Account</Button>
        </Link>    
    );

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{height: '4rem'}}>
                <Navbar.Brand>
                    <Link to='/' className='link'>4FC-LOGO</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav>
                        <div className='nav-link' style={{marginRight:'30px'}}>
                            <i className="fa fa-phone mr-2" aria-hidden="true"></i> 
                            <Link to='/contact' className='link'>+91 987-654-3210</Link>
                        </div>
                        <div className='nav-link' style={{marginRight:'30px'}}>
                            <Link to='/blog' className='link'>Blog</Link>
                        </div>
                        { !loading && (
                            <Fragment>
                                {
                                    isAuthenticated ? authLinks : guestLinks
                                }
                            </Fragment>
                        ) }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

NavigationBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavigationBar)