import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Cards from './Cards';
import CardsMob from './CardsMob';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';

const Wishlist = ({ wishlist }) => {
    return (
        <div>
            <img height='220px' style={{objectFit: "cover"}} width='100%' src={warehouseImage} alt='Warehouse'/>
            <Card style={{ width: '120vh', height: '65vh', margin: '11% 12.5%', position: 'absolute', top: '-4rem', boxShadow: '5px 10px 25px #666' }} className='dashboard-pc'>
                <Card.Header>
                    <Row>
                        <Col sm={6}>
                            <h2 style={{ fontWeight: 'bold', marginTop: '1rem', marginLeft: '20rem', borderRight: '1px solid black' }}>Your Wishlist</h2>
                        </Col>
                        <Col sm={6}>
                            <h2 style={{ fontWeight: 'bold', marginTop: '1rem' }}>Search Warehouses</h2>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='wishlist-pc'>
                <Row>
                    <Col>
                        {wishlist.map((warehouse) => {
                            return <Cards key={warehouse.identifier} warehouse={warehouse}></Cards>
                        })}
                    </Col>
                </Row>
                </Card.Body>
            </Card>
            {/* ---------- */}
            {/* For Mobile */}
            {/* ---------- */}
            <Card style={{height: '70vh', border: '1px solid #555', borderRadius: '0px'}} className='dashboard-mob mr-2 ml-2'>
            <Card.Header style={{ fontSize: '16px', fontWeight: 'bold' }}>
                <Row>
                    <Col className='col-xs-2 col-sm-2 col-md-2 col-lg-2' style={{ borderRight: '1px solid black' }}>
                        Your Wishlist
                    </Col>
                    <Col className='col-xs-2 col-sm-2 col-md-2 col-lg-2' style={{ color: '#aaa' }}>
                        Browse Warehouses
                    </Col>
                </Row>
            </Card.Header>
                <Card.Body className='wishlist-mob' style={{ margin: '0px', padding: '0px' }}>
                <Row style={{ margin: '0px', padding: '0px' }}>
                    <Col style={{ margin: '0px', padding: '0px' }}>
                        {wishlist.map((warehouse) => {
                            return <CardsMob key={warehouse.identifier} warehouse={warehouse}></CardsMob>
                        })}
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Wishlist
