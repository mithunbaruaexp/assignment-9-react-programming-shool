import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Noticecart.css'

const Noticecart = (props) => {
    const {About, Course,  Price, img} = props.data
    // console.log(props.data);
    return (
        <Row className='m-2'>
        <Col sm={8}>
            <h5>Course Name: {Course}</h5>
            <p>{About}</p>
            <h6>Price: {Price}$</h6>
            <Button className='enroll-btn'>Enroll Now</Button>
        </Col>
        <Col className=' border-bottom border-4' sm={4}>
            <img className='courseimg' src={img} alt="" />
        </Col>
    </Row>
    );
};

export default Noticecart;