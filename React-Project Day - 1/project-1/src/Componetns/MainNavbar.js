import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaFacebookSquare , FaInstagramSquare ,  } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function MainNavbar() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
    <Container>
      <Navbar.Brand href="#home">Rinku Nimaje</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto" style={{fontWeight:"bold"}}>
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          
        </Nav>
        <Nav>
           <Nav.Link eventKey={2} href="#memes">
           <FaFacebookSquare style={{fontSize:"30px", marginRight:"40px"}} />
        <FaInstagramSquare style={{fontSize:"30px",marginRight:"40px"}} />
        <CiLinkedin style={{fontSize:"30px",marginRight:"40px"}} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

    </div>
  )
}

export default MainNavbar
