import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

//footer section start

const Footer = () => {
    return (
       <Container className='mt-5 p-5 bg-dark text-white'>
           <Row>
    <Col>
  <h4 className='mb-5'>Programming School</h4>
    <p><i className="fas fa-exclamation fs-2"></i> Level-4, 34, Awal Centre, Banani, Dhaka </p>
    <p> <i className="fas fa-envelope fs-2"></i> Official: web@programming-hero.com</p>
    <p><i className="fas fa-phone fs-2"></i> Helpline : 01322810867 (Available : 09:00am to 7:00pm)</p>
    </Col>
    <Col xs={5}>
    <h4>Shortcut menu</h4>
    <small>Home</small>
    <br />
    <small>About</small>
    <br />
    <small>Service</small>
    <br />
    <small>Notice</small>
    </Col>
    <Col  className='text-center'>
    <h4>Social Links</h4>
    <p><i className="fab fa-facebook fs-2"></i></p>
    <p><i className="fab fa-instagram fs-2"></i></p>
    <p><i className="fab fa-linkedin-in fs-2"></i></p>
    </Col>
  </Row>
       </Container>
    );
};

export default Footer;