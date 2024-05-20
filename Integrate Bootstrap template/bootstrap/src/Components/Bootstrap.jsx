import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Bootstrap() {
  return (
    <Container className='mainR'>
    <Row  md={2} lg={12} >
      <Col xs={12} className='col1'>
      <h1 className='mt-5'> Hello I am, Rinku</h1>
        <p className='para' >As a Full Stack Developer, I bring a robust blend of front-end and back-end development skills, adept at creating seamless and efficient web applications. My expertise includes working with HTML, CSS, JavaScript, and modern frameworks like React or Angular for the front-end, alongside back-end technologies such as Node.js, Express, and databases like MongoDB and SQL.</p>
        <Button variant="warning">Download</Button>
      </Col>
      <Col xs={12}>
        <img src="/pic.png" alt="" className='img' />
      </Col>
    </Row>
    
  </Container>
  )
}

export default Bootstrap
