import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Cards from '../layout/landing/Cards';
import axios from 'axios';

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
            <Container fluid style={{ paddingTop: '5%', paddingBottom: '5%' }}>  
                <h1 style={{marginBottom: '3rem', marginLeft: '3rem'}}>Featured Properties</h1>

                <div className="d-flex flex-row flex-nowrap" style={{overflowX: 'scroll'}}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div> 
                <Button style={{marginTop: '3rem', width: '10rem', marginLeft: '3rem'}}>Browse All</Button>
            </Container>
        </Fragment>
    )
}

export default Featured
