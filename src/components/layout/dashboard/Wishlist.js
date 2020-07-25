import React, { Fragment } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Cards from './Cards';
import warehouseImage from '../../../image/warehouse_placeholder1.jpg';

const Wishlist = ({ wishlist }) => {
    return (
        <Fragment>
            <img height='220px' style={{objectFit: "cover"}} width='100%' src={warehouseImage} alt='Warehouse'/>
            <Card style={{ width: '120vh', height: '65vh', margin: '11% 12.5%', position: 'absolute', top: '-4rem', boxShadow: '5px 10px 25px #666' }} >
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
                <Card.Body className='wishlist'>
                <Row>
                    <Col>
                        {wishlist.map((warehouse) => {
                            return <Cards key={warehouse.identifier} warehouse={warehouse}></Cards>
                        })}
                    </Col>
                </Row>
                </Card.Body>
            </Card>

        </Fragment>
    )
}

export default Wishlist
