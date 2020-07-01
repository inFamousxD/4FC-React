import React,{Fragment} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PlaceholderImage from '../../image/warehouse_auth.jpg';
import Form from 'react-bootstrap/Form';
import Logo from '../../image/Logo.png'
import { Link } from 'react-router-dom';
import './authstyles.css';


const Login = () => {
    return (
        <Fragment>
            <Container fluid className="ml">
            <Col>
                <Row>
                    <Col sm={8} className="image">
                        <img height='100%' style={{objectFit: "cover", backgroundSize: "100%"}} width='100%' src={PlaceholderImage} alt='Warehouse'/>
                    </Col>
                    <Col sm={4}>
                    <div class="row mt-2">
                        <div class="col-md-10 m-auto">
                        <div class="card card-body border-0">
                            <h2 class="text-center mb-3"> 
                            <b>Login to 4FC</b>
                            <img className="ml-2 image-small" height='74px' style={{objectFit: "cover"}} src={Logo} alt='Warehouse'/>
                            </h2>
                            <Form action="/users/read/one" method="POST">
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
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <button class="mt-3 btn btn-secondary btn-block">
                                    Login to your account
                                </button>
                                <h5 class="auth-nav">
                                    Not a member yet?  
                                    <Link to='/register' class="link-light float-right">
                                        Click here to register
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

export default Login
