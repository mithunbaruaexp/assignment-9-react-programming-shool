import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';

//service product cart

const ServiceCart = (props) => {
    const {About, Course,  Duration, Instructor, Price, img} = props.data
    // console.log(props.data);
    return (
       <Container>
            <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{Course}</Card.Title>
            <Card.Title>Instructor: {Instructor}</Card.Title>
            <Card.Text className='lh-1'>
              {About}
            </Card.Text>
            <small>Duration:{Duration} Hours || price: {Price} $</small>
          </Card.Body>
        </Card>
      </Col>
       </Container>
    );
};

export default ServiceCart;