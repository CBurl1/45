import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Container className="text-center">
        <hr className="my-1" style={{ borderColor: '#fff' }} /> {/* White line */}
        <Navbar.Text className="text-white">Terrain Park Info</Navbar.Text> {/* Centered plain text */}
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;


