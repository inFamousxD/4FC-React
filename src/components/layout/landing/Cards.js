import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import Button from 'react-bootstrap/Button';

const Cards = () => {
    return (
        <Fragment>
             <Card style={{marginLeft: '2rem', marginBottom: '3rem', minWidth: '20rem', maxWidth: '20rem'}}>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title>
                        Placeholder
                    </Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="outline-primary">Card Link</Button>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default Cards
