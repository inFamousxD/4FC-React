import React,{ useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PlaceholderImage from '../../image/warehouse_auth.jpg';
import Form from 'react-bootstrap/Form';
import Logo from '../../image/Logo.png'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';
import { login } from '../../actions/auth';
import ScrollToTop from '../layout/ScrollToTop';
import './authstyles.css';


const Login = ({ setAlert, login, isAuthenticated }) => {
    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        if (password.length < 6) {
            setAlert('Passwords should be of length greater than 5', 'danger')
        } else {
            login({
                identity: email,
                password
            });
        }
    }
    if (isAuthenticated) {
        console.log('Authenticated')
        return <Redirect to="/" />
    }
    return (
        <div style={{backgroundColor: 'white', height: '100vh'}}>
            <ScrollToTop />
            <div className="auth-class">
            <Container fluid className="ml">
            <Col style={{ margin: '0', padding: '0' }}>
                <Row style={{ margin: '0', padding: '0' }}>
                <Col sm={8} className="image d-md-table d-none" style={{
                        position: 'sticky',
                        overflow: 'hidden',
                        height: '715px', 
                        padding: '0', 
                        margin:'0'
                    }}>
                        <img height='1000px' style={{objectFit: "cover", overflow: 'hidden', padding: '0', margin:'0'}} width='100%' src={PlaceholderImage} alt='Warehouse'/>
                    </Col>
                    <Col sm={4} style={{
                        overflowY: 'scroll',
                        overflow: 'hidden'
                    }}>
                    <div className="row mt-2">
                        <div className="col-md-10 m-auto">
                        <div className="card card-body border-0">
                            <h2 className="text-center mb-3"> 
                            <b>Login to 4FC</b>
                            <img className="ml-2 image-small" height='74px' style={{objectFit: "cover"}} src={Logo} alt='Warehouse'/>
                            </h2>
                            <Form onSubmit={e => onSubmit(e)}>
                            <Alert/>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    onChange={e => onChange(e)}
                                    />
                                </Form.Group>                
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Create a password"
                                    onChange={e => onChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <button className="mt-3 btn btn-secondary btn-block">
                                    Login to your account
                                </button>
                                <Row style={{marginTop: '2rem'}}>
                                    <Col sm={6} style={{ textAlign: 'center' }}>
                                        <p style={{fontSize: '16px'}}>Not a member yet?</p>
                                    </Col>
                                    <Col sm={6} style={{ textAlign: 'center' }}>
                                    <Link to='/register' className="link-light">
                                        <p style={{fontSize: '16px'}}>Click here to register</p>
                                    </Link> 
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Col>
            </Container>
            </div>
        </div>
    )
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, login })(Login);
