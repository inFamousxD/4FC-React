import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Cards from './Cards'


const Results = ({ warehouses }) => {
    return (
        <Fragment>
            <Row style={{
                marginBottom: '2rem'
            }}>
                {
                    warehouses.map((warehouse) => {
                        return <Cards warehouse={warehouse} key={warehouse.identifier}/>
                    })
                }
            </Row>
        </Fragment>
    )
}

export default Results
