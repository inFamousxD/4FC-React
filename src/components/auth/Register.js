import React,{Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PlaceholderImage from '../../image/warehouse_auth.jpg';
import Form from 'react-bootstrap/Form';
import Logo from '../../image/Logo.png';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import './authstyles.css';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const Register = () => {
    return (
        <Fragment>
            <Container fluid className="ml">
            <Col>
                <Row>
                    <Col sm={8} className="image">
                        <img height='100%' style={{objectFit: "cover"}} width='100%' src={PlaceholderImage} alt='Warehouse'/>
                    </Col>
                    <Col sm={4}>
                    <div class="row mt-2">
                        <div class="col-md-10 m-auto">
                        <div class="card card-body border-0">
                            <h2 class="text-center mb-3"> 
                            <b>Register to 4FC</b>
                            <img className="ml-2 image-small" height='74px' style={{objectFit: "cover"}} src={Logo} alt='Warehouse'/>
                            </h2>
                            <Form action="/users/save" method="POST">
                                <Form.Group class="form-group">
                                    <Form.Label for="name">Full Name</Form.Label>
                                    <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    class="form-control"
                                    placeholder="Enter your Full Name"
                                    />
                                </Form.Group>
                                <Form.Group class="form-group">
                                    <Form.Label for="contact">Contact</Form.Label>
                                    <PhoneInput
                                    type="number"
                                    id="contact"
                                    name="contact"
                                    class="form-control"
                                    placeholder="Enter your contact number"
                                    value="+91"
                                    />
                                </Form.Group>
                                <Form.Group class="form-group">
                                    <Form.Label for="company">Confirm Password</Form.Label>
                                    <input
                                    type="name"
                                    id="company"
                                    name="company"
                                    class="form-control"
                                    placeholder="Enter company name"
                                    />
                                </Form.Group>
                                <Form.Group class="form-group">
                                    <Form.Label for="email">Email</Form.Label>
                                    <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="form-control"
                                    placeholder="Enter your email"
                                    />
                                </Form.Group>                
                                <Form.Group class="form-group">
                                    <Form.Label for="password">Password</Form.Label>
                                    <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    class="form-control"
                                    placeholder="Create a password"
                                    />
                                </Form.Group>
                                <button class="mt-5 btn btn-secondary btn-block">
                                    Create a New Account
                                </button>
                                <h5 class="auth-nav-reg mt-5">
                                    Already have an account?  
                                    <Link to='/login' class="link-light float-right">
                                        Click here to log in
                                    </Link> 
                                </h5>
                            </Form>
                        </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Col>
            </Container>
        </Fragment>
    )
}

export default Register
