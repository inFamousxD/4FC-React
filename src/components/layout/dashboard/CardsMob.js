import React, { Fragment } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import axios from 'axios';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Cards = ({ warehouse, auth: { user, isAuthenticated } }) => {
    const [wishlisted, setWishlisted] = React.useState(true);
    const handleWishlisted = () => {
        try {
            console.log('in dispatch')
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify({ identity: user[0].identity, warehouseId: warehouse.identifier });
            // const res = await axios.post(`http://localhost:9000/users/wishlist/add`, body, config);
            axios.post(`https://d2ptygpwftf1gm.cloudfront.net/users/wishlist/remove`, body, config);
            setWishlisted(false)
        } catch (err) {
            console.log(err)
        }
        setWishlisted(false)
    }

    const autoFill = () => {
        console.log(user.name)
        setFormData({
            name: user[0].name,
            email: user[0].identity,
            phone: user[0].contact
        })
    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        isAuthenticated && autoFill();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialFormData = {
        name:user[0].name,
        email:user[0].identity,
        phone:user[0].contact
    }
    const [formData, setFormData] = React.useState(initialFormData)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Fragment>
            <Card style={{ marginTop: '1.5rem', marginBottom: '1.5rem', padding: '0px', borderRadius: '0px', borderLeft: '0px', borderRight: '0px', borderTop: '0px' }}>
                <Card.Body style={{ padding: '0px', margin: '0px' }}>
                    <Row style={{ margin: '0px', padding: '0px' }}>
                        <Col sm={4} style={{ margin: '0px', padding: '0px', marginBottom: '-2.4rem' }}>
                            <img src={PlaceholderImage} alt={'loading'} style={{ width: '100%', height: '12rem' }} />
                            <Button variant='outline-dark' onClick={handleWishlisted} style={{
                                top: '-3rem',
                                left: '0.7rem',
                                position: 'relative',
                                backgroundColor: '#fff'
                            }}>{wishlisted 
                                ? 
                                <i className="fa fa-heart" style={{color: 'red'}} aria-hidden="true"></i>
                                :
                                <i className="fa fa-heart-o" style={{color: 'red'}} aria-hidden="true"></i>
                                }</Button>
                                <Link to={{ pathname:`/description/${warehouse.identifier}`, state: { warehouse: warehouse } }}>
                                <Button variant='light' style={{
                                    top: '-3rem',
                                    left: '1.4rem',
                                    position: 'relative',
                                    border: '1px solid black'
                                }}>Details</Button></Link>
                        </Col>
                        <Col sm={8} style={{ margin: '0px', padding: '0px' }}>
                            <Row style={{ margin: '0px', padding: '0px' }}>
                                <Col style={{ margin: '1rem 1rem', padding: '0px' }} className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                    <div style={{ fontSize: '17px', fontWeight: 'bold', height: '1.5rem', overflow: 'hidden' }}> { warehouse.warehouseDetails.name } </div>
                                    <div style={{ fontSize: '17px', color: '#2a55ae', fontWeight: 'bold' }}> { warehouse.warehouseDetails.pricing } / sq. ft.  </div>
                                </Col>
                                <Col style={{ margin: '1rem 1rem', padding: '0px' }} className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                    <Button onClick={handleClickOpen} variant='primary' style={{ width: '100%', height: '100%', backgroundColor: '#2a55ae', border: '0px' }}>
                                        Send Request
                                    </Button>
                                </Col>
                            </Row>
                            <hr style={{ margin: '0rem' }}></hr>
                            <Row style={{ margin: '0px' }}>
                                <Col style={{ margin: '0.25rem 1rem', padding: '0px', fontSize: '14px' }}>
                                    <div style={{ fontSize: '14px' }}> <b style={{fontWeight: 'bold'}}>Address</b> : { `${warehouse.warehouseDetails.address}, ${warehouse.location.locality}, ${warehouse.location.city}, ${warehouse.location.state}.` } </div>
                                </Col>
                            </Row>
                            <Row style={{ margin: '0px' }}>
                                <Col sm={5} style={{ margin: '0.25rem 1rem', padding: '0px' }}>
                                    <div style={{ fontSize: '14px' }}><b style={{fontWeight: 'bold'}}>Area Covered :</b> {warehouse.warehouseDetails.areaCovered} sq. ft.</div>
                                </Col>
                                <Col sm={7} style={{ margin: '0.25rem 1rem', padding: '0px' }}>
                                    <div style={{ fontSize: '14px' }}><b style={{fontWeight: 'bold'}}>Deposit :</b> {warehouse.warehouseDetails.deposit}/- (Negotiable)</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
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
                        value={formData.name}
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
                        value={formData.email}
                        fullWidth
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Contact"
                        label="Contact"
                        type="String"
                        name="phone"
                        value={formData.phone}
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
        </Fragment>
    )
}

Cards.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { getCurrentProfile })(Cards)
