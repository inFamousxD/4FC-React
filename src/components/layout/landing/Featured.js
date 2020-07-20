import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

const Featured = ({ warehouses: { loading, warehouses } }) => {
    return (
        !loading && warehouses ?
        <Fragment>
            <Container fluid style={{ backgroundColor: '#EFEFEF', paddingTop: '5%', paddingBottom: '5%' }}>  
                <h1 style={{marginBottom: '2rem', marginLeft: '1%'}}>Featured Properties</h1>

                <div className="d-flex flex-row flex-nowrap" style={{overflowX: 'scroll', marginLeft: '1%'}}>
                    
                    {/* Fetch warehouses and pass to cards. */}
                    {
                        warehouses.map((warehouse, key) => {
                            return warehouse && <Cards warehouse = {warehouse} key={key}/>
                        })
                    }
                </div> 
                <Link to='/category'>
                <Button style={{marginTop: '1rem', width: '10rem', marginLeft: '1%', borderRadius: '5px'}}>Browse All</Button>
                </Link>
            </Container>
        </Fragment> : <Spinner/>
    )
}

export default Featured
