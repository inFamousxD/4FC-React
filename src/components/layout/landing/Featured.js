import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

const Featured = ({ warehouses: { loading, warehouses } }) => {
    const attributes = {
        city: 'None',
        locality: 'None',
        areaCov: [0, 10000]
    }
    return (
        !loading && warehouses ?
        <Fragment>
            <Container fluid style={{ backgroundColor: '#EFEFEF', paddingTop: '5%', paddingBottom: '5%' }} className='landing-page'>  
                <h1 style={{marginBottom: '2rem', marginLeft: '1%'}}>Featured Properties</h1>

                <div className="d-flex flex-row flex-nowrap" style={{overflowX: 'scroll', marginLeft: '1%'}}>
                    
                    {/* Fetch warehouses and pass to cards. */}
                    {
                        warehouses.map((warehouse, key) => {
                            return warehouse && <Cards warehouse = {warehouse} key={key}/>
                        })
                    }
                </div> 
                <Link to={{ pathname:'/category', state:{attributes} }}>
                    <Button className="mt-4 mb-5" style={{
                        borderRadius: '5px',
                        backgroundColor: '#2a55ae',
                        border: '0px',
                        width: '10rem',
                        marginLeft: '1%'
                    }}> Browse All </Button>
                </Link>
            </Container>
        </Fragment> : <Spinner/>
    )
}

export default Featured
