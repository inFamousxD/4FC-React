import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Featured = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    async function getData() {
        try {
            // const response = await axios.get(`http://localhost:9000/properties/warehouses/read/all`, config);
            const response = await axios.get(`https://d2ptygpwftf1gm.cloudfront.net/properties/warehouses/read/all`, config);
            response.data.forEach((warehouse) => {
                console.log(`${warehouse.warehouseDetails.name}, _id:${warehouse.identifier}`);
            });
        } catch (err) {
            console.error(err);
        }
    }

    getData();
    return (
        <Fragment>
            <Container fluid style={{ backgroundColor: '#EFEFEF', paddingTop: '5%', paddingBottom: '5%' }}>  
                <h1 style={{marginBottom: '2rem', marginLeft: '3rem'}}>Featured Properties</h1>

                <div className="d-flex flex-row flex-nowrap" style={{overflowX: 'scroll', marginLeft: '1rem'}}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div> 
                <Link to='/category'>
                <Button style={{marginTop: '1rem', width: '10rem', marginLeft: '3rem', borderRadius: '5px'}}>Browse All</Button>
                </Link>
            </Container>
        </Fragment>
    )
}

export default Featured
