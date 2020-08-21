import React, { Fragment, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import { Link } from 'react-router-dom';


const Body = ({ warehouses: { loading, warehouses }}) => {
    const [count, setCount] = useState(0);
    const [warehouse, setWarehouse] = useState(warehouses[0]);

    useEffect(() => {
        if (count >= warehouses.length) setCount(0)

        setWarehouse(warehouses[count])
    }, [count, warehouses])

    return (
        !loading && warehouses ? 
       <Fragment>
           <Container fluid style={{borderTop: '1px solid #cccccc', backgroundColor: '#EFEFEF', padding: '0px' }}>
               <Container fluid style={{ padding: "20px" }} className='landing-page'>
               <h1>Discover RealEstate trends in market.</h1>
                <h5>Custom Text here.</h5>

                <Row className="mt-4 d-flex flex-row flex-nowrap" style={{overflowX: 'scroll'}}>
                    <Col style={{minWidth: '20rem'}}>
                        <h1 style={{ fontSize: "50px" }}>01.</h1>
                        <h5>Post Requirements.</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                    <Col style={{minWidth: '20rem'}}>
                        <h1 style={{ fontSize: "50px" }}>02.</h1>
                        <h5>Explore Warehouse.</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                    <Col style={{minWidth: '20rem'}}>
                        <h1 style={{ fontSize: "50px" }}>03.</h1>
                        <h5>Request a Call Back.</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                    <Col style={{minWidth: '20rem'}}>
                        <h1 style={{ fontSize: "50px" }}>04.</h1>
                        <h5>Finalise and Book</h5>
                        <h6 className="mt-4">Enter Requirements for the warehouse you are looking for.</h6>
                    </Col>
                </Row>
               </Container>
               <Container fluid style={{padding: '0px'}} id='cont' >
                    <Row>
                        <Col sm={4}>
                            <img style={{objectFit: "cover", height: '80%', top: '11%', position: 'absolute', verticalAlign: 'middle', zIndex: '2'}} className='body-image' src={PlaceholderImage} alt='Warehouse'/>
                        </Col>
                        <Col sm={8}>
                        <div style={{ backgroundColor: '#CDD5E450', border: 'none', height: '45rem' }}>
                            <Row>
                                <Col sm={4}>
                                </Col>
                                <Col sm={8} style={{ height: "500px", marginTop: '70px' }}>
                                    <Card.Body>
                                        <h1>Explore Amongst Best Warehouses</h1>
                                        <h5>Another set of custom text here.</h5>
                                        <Card className='ad-card' style={{ marginTop: '5rem', border: '1px solid #aaa', zIndex: '2'}}>
                                            <Card.Body>
                                                <img style={{objectFit: "cover", borderRadius: '50%', height: '100px', width: '100px', position: 'absolute', top: '-50px'}} src={PlaceholderImage} alt='Warehouse'/>
                                                <Row>
                                                    <Col sm={8} style={{height: '8rem'}}>
                                                        <h3 className="mt-5" style={{fontWeight: 'bold'}}>{ warehouse.warehouseDetails.name }</h3>
                                                    </Col>
                                                    <Col sm={4} style={{float: 'right'}} className='ad-card-pricing'>
                                                        <div style={{color: '#2a55ae', fontSize: '18px', fontWeight: 'bold'}}>₹ { warehouse.warehouseDetails.pricing }/sq.ft.</div>
                                                    </Col>
                                                </Row>
                                                
                                                <div className="mt-4">
                                                    { warehouse.location.locality }{', '}{ warehouse.location.city }<br></br>
                                                    <b>Area covered</b> : { warehouse.warehouseDetails.areaCovered } sq. ft. <br></br>
                                                    <b>Deposit</b> : ₹ { warehouse.warehouseDetails.deposit } (Negotiable)
                                                </div>
                                                <Row>
                                                    <Col className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
                                                        <Link to={{ pathname:`/description/${warehouse.identifier}`, state: { warehouse: warehouse } }}><Button variant="outline-dark" style={{ marginTop: '25px', borderRadius: '5px', maxHeight: '2.4rem', overflow: 'hidden' }}>Details</Button></Link>
                                                    </Col>
                                                    <Col className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                                        <Button variant="outline-dark" onClick={() => {
                                                            if (count > 0) setCount(count-1);
                                                            else setCount(warehouses.length-1)
                                                        }} style={{ marginTop: '25px', borderRadius: '5px' }}> <i className="fa fa-arrow-left" aria-hidden="true"></i> </Button>
                                                    </Col>
                                                    <Col className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
                                                        <Button variant="outline-dark" onClick={() => {
                                                            if (count < warehouses.length-1) setCount(count+1);
                                                            else setCount(0)
                                                        }} style={{ marginTop: '25px', borderRadius: '5px' }}> <i className="fa fa-arrow-right" aria-hidden="true"></i> </Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Body>

                                </Col>
                            </Row>
                        </div>
                        </Col>
                    </Row>
               </Container>             
           </Container>
       </Fragment> : (
           <Fragment>
               Loading
           </Fragment>
       )
    )
}

export default Body;