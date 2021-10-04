import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Cart = (props) => {
    const {img,Course,Price, Duration,About, Date}=props.data
    // console.log(props.data);

    //cart page start

    return (
        <Col>
        <Card className='p-2'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title> <small> {Course}</small> </Card.Title>
            <Card.Text className='lh-1'>
              {About}
            </Card.Text>
            <p><small>Price: {Price}$ || First appeared {Date}</small> Duration: {Duration}</p>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Cart;