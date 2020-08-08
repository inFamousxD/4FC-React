import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo from '../../image/logo@1x.png'


const NavigationBar = ({ auth: { isAuthenticated, loading }, logout}) => {
  const authLinks = (
        <Fragment>
            <div className='nav-link' style={{marginRight:'30px'}}>
                <Link to='/dashboard' className='link'>
                <i className="fa fa-user mr-2" aria-hidden="true"></i>
                Profile</Link>
            </div>
            <Link to='/' className='link' onClick={logout}>
                <Button variant='dark' style={{borderRadius: '5px'}}>
                    Logout
                </Button>
            </Link>
        </Fragment>
    );
    
    const guestLinks = (
        <Link to='/register' className='link-button'>
            <Button variant='dark' style={{borderRadius: '5px'}}>Sign in/Create Account</Button>
        </Link>    
    );

    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{minHeight: '9vh'}} >
                <Navbar.Brand>
                    {/* <Link to='/' className='link'><b style={{ color: '#273390', fontSize: '24px' }}>4FC-LOGO</b></Link> */}
                    <Link to='/' className='link'><img src={logo} alt={'LOGO'}></img></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"/>
                    <Nav>
                        <div className='nav-link' style={{marginRight:'30px'}}>
                            <Link to='/contact' className='link'>
                            <i className="fa fa-phone mr-2" aria-hidden="true"></i> 
                            +91 987-654-3210</Link>
                        </div>
                        <div className='nav-link' style={{marginRight:'30px'}}>
                            <Link to='/blog' className='link'>
                            <i className="fa fa-bookmark mr-2" aria-hidden="true"/>Blog</Link>
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
        </Fragment>
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