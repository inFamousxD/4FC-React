import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import PlaceholderImage from '../../../image/warehouse_auth.jpg';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';


const Featured = () => {
    return (
       <Fragment>
           <Container fluid style={{ backgroundColor: '#EFEFEF', paddingTop: '5%', paddingLeft: '8%', paddingBottom: '5%' }}>
           
           <h1 style={{marginBottom: '3rem'}}>Featured Properties</h1>
        
           <CardDeck>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={PlaceholderImage} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
           </CardDeck>
           
            <Button style={{marginTop: '3rem', width: '10rem'}}>Browse All</Button>

           </Container>
       </Fragment>
    )
}

export default Featured
