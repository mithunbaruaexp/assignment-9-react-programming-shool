import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import ServiceCart from '../SeviceCart/ServiceCart';

//service page start

const Services = (props) => {
    // console.log(props.data);
    const newData = props.data 
    console.log(newData);
   
    return (
    <Container className='my-5'>
        <h1>Our courses</h1>
            <Row xs={1} md={4} className="g-4">
       {
           newData.map(data=><ServiceCart
           key={data.id}
           data={data}
           ></ServiceCart>)
       }
      </Row>
    </Container>
    );
};

export default Services;