
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './Home.css'

//Hope page 

const Home = (props) => {
  const {data} = props
  const n = 5;
  const newData =data.slice(0, n)
  // console.log(newData)
    return (
        <div>
          <Container className='my-5 header-container'>
          <Row className='my-5'>
          <Col sm={8} className='my-5'>
            <h1 className='fw-bolder text-center text-white'>Get in Touch</h1>
            <p className=' text-center text-white'> Subscribe to get updates</p>
          </Col>
          <Col sm={4}>
          <Form>
            <Form.Group className="mb-3 text-center" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Button className='text-white bg-dark py-2 px-3 mt-3 border rounded'  type="submit">
              Subscribe
            </Button>
            </Form.Group>
          </Form>
          </Col>
        </Row>
          </Container>
          <Container className='mt-3'>
          <Row xs={1} md={4} className="g-4 ">
              {
                newData.map(data=><Cart
                key={data.id}
                data={data}
                ></Cart>)
              }
              </Row>
          </Container>
            
            
        </div>
    );
};

export default Home;