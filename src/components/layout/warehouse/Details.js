import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Details.css'


const Details = ({ warehouse }) => {
    return (
        <Container fluid>
            <Card className='warehouse-details-pc'>
                <Card.Header>Details about this warehouse</Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Dock Placement: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.dockPlacement } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Flooring Type: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.flooringType } </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Flooring Type: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> FM2 Grade </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Truck Capacity: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.truckCapacity } </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Access Road Width: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.accessRoadWidth } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Distance from Highway: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> 2km </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Environmental Clearance: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.environmentalClearance === true ? 'Yes' : 'No' } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Approving Authority: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> Panchayat </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Clear height: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.clearHeight } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Center Height: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.centerHeight } </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Safety Precaution: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.safetyPrecaution } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Area Covered: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.areaCovered } sq. ft. </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Access road Width: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.accessRoadWidth } m </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Warehouse Type: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseType } </p> </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className='warehouse-details-mob'>
                <Card.Header>Details about this warehouse</Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Dock Placement: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.dockPlacement } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Flooring Type: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.flooringType } </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Flooring Type: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> FM2 Grade </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Truck Capacity: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.truckCapacity } </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Access Road Width: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.accessRoadWidth } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Distance from Highway: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> 2km </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Environmental Clearance: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.environmentalClearance === true ? 'Yes' : 'No' } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Approving Authority: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> Panchayat </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Clear height: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.clearHeight } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Center Height: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.centerHeight } </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Safety Precaution: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.amenitiesProvided.safetyPrecaution } </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Area Covered: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.areaCovered } sq. ft. </p> </Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <p className='desc-key'> Access road Width: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseDetails.accessRoadWidth } m </p> </Col>
                        <Col sm={3}> <p className='desc-key'> Warehouse Type: </p> </Col>
                        <Col sm={3}> <p className='desc-val'> { warehouse.warehouseType } </p> </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Details
