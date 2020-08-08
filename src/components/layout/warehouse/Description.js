import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';
import Button from 'react-bootstrap/Button';
import LeafletMap from './LeafletMap';
import Featured from './Featured';
import ScrollToTop from '../ScrollToTop';
import Spinner from 'react-bootstrap/Spinner';
// import { addToWishlist } from '../../../actions/profile';
import { getWarehouse } from '../../../actions/warehouses';
import { getCurrentProfile } from '../../../actions/profile';
import Details from './Details';
// import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '../../layout/Alert';
import axios from 'axios';

import './description.css';


const Description = ({ getWarehouse, getCurrentProfile, warehouses, auth: { user, loading, isAuthenticated}, match }) => {
    const warehouse = warehouses.warehouse[0]
    const initialFormData = {
        name:'',
        email:'',
        phone:''
    }
    const [formData, setFormData] = React.useState(initialFormData)

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let initialStatus=false;

    const [wishlistStatus, setWishlistStatus] = React.useState(initialStatus);

    const addItem = () => {
        console.log('In addItem')
        if (isAuthenticated) {
            try {
                console.log('in dispatch')
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const body = JSON.stringify({ identity: user[0].identity, warehouseId: warehouse.identifier });
                // const res = await axios.post(`http://localhost:9000/users/wishlist/add`, body, config);
                axios.post(`https://d2ptygpwftf1gm.cloudfront.net/users/wishlist/add`, body, config);
                setWishlistStatus(true)
            } catch (err) {
                console.log(err)
            }
        } else {
            return <Redirect to="/" />
        }
    }

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => { 
        getWarehouse(match.params.identifier);
        getCurrentProfile()
    }, [match, getWarehouse, getCurrentProfile])

    if (!warehouse || warehouses.loading)
        return (<div style={{
            padding: '2% 5%',
            display: 'block',
            backgroundColor: 'white',
            height: '93vh'
            }}>
            <h1> Loading </h1>
        </div>)

    else return (
        warehouse.location.state ? 
        <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
            <ScrollToTop location={ warehouse.location }/>
            <Alert />
            <div>
                <img height='420px' style={{objectFit: "cover"}} width='100%' src={warehouseImage} alt='Warehouse'/>
            </div>

            <Row className="card-class">
                <Col sm={8}>
                <Card className='side-card-mobile mr-3 ml-3'>
                    <Card.Header>
                        <Row>
                            <Col>
                                <div>
                                    Monthly Rental
                                </div>
                                <div style={{fontSize:25}}>
                                { warehouse.warehouseDetails.pricing } / sq. ft.
                                </div>
                            </Col>
                            <Col> 
                                <div className='float-right mt-3'>
                                    <Button style={{borderRadius: '3px', backgroundColor: '#273390', border: '0px'}} onClick={handleClickOpen}>Send Request</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <b>Address : </b> { warehouse.warehouseDetails.address }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Area Covered : </b> { warehouse.warehouseDetails.areaCovered } sq. ft
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Deposit : </b> { warehouse.warehouseDetails.deposit }/- (negotiable)
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={6}>
                                Interested, but not sure to book?
                            </Col>
                            <Col sm={6}>   
                                <Button onClick={addItem} variant='light'style={{
                                    paddingLeft: '0px',
                                    paddingRight: '0px'
                                }}> <i className="fa fa-heart" style={{color: wishlistStatus?'red':'white' , borderRadius: '5px'}} aria-hidden="true"></i> Add to wishlist</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <Container fluid> 
                        <Row>
                            <Col sm={10}>
                                <div style={{ marginBottom: '1rem', fontSize: '30px' }}><b>{ warehouse.warehouseDetails.name }</b></div>
                            </Col>
                            <Col sm={2} style={{
                                fontSize: '30px',
                                float: 'right'
                            }}>
                                <i className="fa fa-twitter mr-3" aria-hidden="true"/>
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </Col>
                        </Row>
                    <p className='item-desc'>
                        Details : { warehouse.warehouseDetails.details } <br/>
                        Address : { warehouse.warehouseDetails.address }{', '}{ warehouse.location.locality }{', '}
                        { warehouse.location.city }{', '} { warehouse.location.state } 
                            
                    </p>    
                </Container> 
                <Details warehouse={ warehouse }/>
                <Container fluid className="mt-4">
                    <Row>
                        <Col style={{ marginBottom: '2rem' }} sm={6}>
                            <Card style={{ height: '22rem' }}>
                                <Card.Header>Location <i className="fa fa-map-marker float-right" aria-hidden="true"></i></Card.Header>
                                <Card.Body style={{ 
                                    margin: '0px',
                                    padding: '0px',
                                    width: '100%'
                                }}>
                                <LeafletMap details={ warehouse }/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card style={{height: '22rem'}}>
                                <Card.Header>Nearby Landmarks</Card.Header>
                                <Card.Body style={{
                                    overflow: 'hidden',
                                    overflowY: 'scroll',
                                    margin: '0px',
                                    padding: '0px'
                                }}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Highway:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Railway Station:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>   
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Bus Stand:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Bank:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>
                                                <Col sm={5}><b>Nearest Petrol Pump:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row> 
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row style={{ minHeight: '2rem', paddingTop: '0.5rem' }}>    
                                                <Col sm={5}><b>Nearest Park:</b> </Col>
                                                <Col sm={7}>Description Placeholder Line</Col>
                                            </Row>
                                        </ListGroup.Item>
                                    </ListGroup>
                                  </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
                </Col> 
                {/* STICKY ONLY FOR PC BROWSERS */}

                <Col sm={4}>
                <Card className='side-card mr-5 d-sm-none d-xs-none d-md-block d-lg-block d-xl-block' style={{
                    minWidth: '21rem',
                    marginLeft: '1rem',
                    maxHeight: '25rem'
                }}>
                    <Card.Header>
                        <Row>
                            <Col>
                                <div>
                                    Monthly Rental
                                </div>
                                <div style={{fontSize:30}}>
                                { warehouse.warehouseDetails.pricing } / sq. ft.
                                </div>
                            </Col>
                            <Col> 
                                <div className='float-right mt-3'>
                                <Button style={{borderRadius: '3px', backgroundColor: '#273390', border: '0px'}} onClick={handleClickOpen}>Send Request</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <b>Address : </b> { warehouse.warehouseDetails.address }
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Area Covered : </b> { warehouse.warehouseDetails.areaCovered } sq. ft
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <b>Deposit : </b> { warehouse.warehouseDetails.deposit }/- (negotiable)
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col sm={6}>
                                Interested, but not sure to book?
                            </Col>
                            <Col sm={6}>   
                                <Button onClick={addItem} variant='light'> <i className="fa fa-heart-o" style={{ color: wishlistStatus?'red':'white', borderRadius : '5px' }} aria-hidden="true"></i> Add to wishlist</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                </Col>
            </Row>
            <div>
                <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Send Request</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        You are currently requesting for '<b>{warehouse.warehouseDetails.name}</b>'. Please fill out the
                        details below and we will get back to you shortly.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="name"
                        name="name"
                        fullWidth
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        name="email"
                        fullWidth
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Contact"
                        label="Contact"
                        type="Number"
                        name="phone"
                        fullWidth
                        onChange={e => onChange(e)}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Send Request
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Featured />
        </div> : <div style={{
            padding: '2% 5%',
            display: 'block',
            backgroundColor: 'white',
            height: '1000px'
        }}>
            <h1>Failed to fetch data <Spinner></Spinner></h1>
        </div>
    )
}

Description.propTypes = {
    auth: PropTypes.object.isRequired,
    getWarehouse: PropTypes.func.isRequired,
    warehouses: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    warehouses: state.warehouses
})

export default connect(mapStateToProps, { getWarehouse, getCurrentProfile })(Description)
