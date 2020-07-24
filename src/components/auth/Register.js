import React,{ useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PlaceholderImage from '../../image/warehouse_auth.jpg';
import Form from 'react-bootstrap/Form';
import Logo from '../../image/Logo.png';
// import PhoneInput from 'react-phone-input-2';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
import Alert from '../layout/Alert';
import ScrollToTop from '../layout/ScrollToTop';
import 'react-phone-input-2/lib/style.css';
import './authstyles.css';


const Register = ({ setAlert, register, isAuthenticated }) => {

    const [ formData, setFormData ] = useState({
        name: '',
        contact: '+91 ',
        company: '',
        email: '',
        password: ''
    });

    const { name, email, contact, company, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        if (password.length < 6) {
            setAlert('Passwords should be of length greater than 5', 'danger')
        } else {
            register({ name, identity: email, password, contact, company });
        }
    }

    if (isAuthenticated) {
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
                            <b>Register to 4FC</b>
                            <img className="ml-2 image-small" height='74px' style={{objectFit: "cover"}} src={Logo} alt='Warehouse'/>
                            </h2>
                            <Form onSubmit={e => onSubmit(e)}>

                            <Alert/>
                                <Form.Group className="form-group">
                                    <Form.Label>Full Name</Form.Label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        placeholder="Enter your Full Name"
                                        value={name}
                                        onChange={e => onChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label>Contact</Form.Label>
                                    <input
                                        type="contact"
                                        id="contact"
                                        name="contact"
                                        className="form-control"
                                        placeholder="Enter your contact number"
                                        value={contact}
                                        onChange={e => onChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label>Company</Form.Label>
                                    <input
                                        type="name"
                                        id="company"
                                        name="company"
                                        className="form-control"
                                        placeholder="Enter company name"
                                        value={company}
                                        onChange={e => onChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label>Email</Form.Label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                    />
                                </Form.Group>                
                                <Form.Group className="form-group">
                                    <Form.Label>Password</Form.Label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={e => onChange(e)}
                                    />
                                </Form.Group>
                                <button className="mt-5 btn btn-secondary btn-block">
                                    Create a New Account
                                </button>
                                <Row style={{marginTop: '2rem'}}>
                                    <Col style={{ textAlign: 'center' }} sm={6}>
                                        <p style={{fontSize: '16px'}}>Have an account?</p>
                                    </Col>
                                    <Col style={{ textAlign: 'center' }} sm={6}>
                                    <Link to='/login' className="link-light">
                                        <p style={{fontSize: '16px'}}>Click here to log in</p>
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

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
