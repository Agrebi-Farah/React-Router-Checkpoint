import React from 'react' ;
import './navbar.css';
import { Navbar,Nav,Container } from 'react-bootstrap' ;
import Pic from '../Navbar/pic.png';
function navi() {
    return (
        <div>
         <Navbar bg="light" variant="light">
    <Container>
      
    <Navbar.Brand  href="#home"> <img className ='tunibest' src ={Pic} alt ='Logo' /></Navbar.Brand>

    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Categories</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">ContactUs</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default navi
