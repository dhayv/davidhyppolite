import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Home.tsx">Home</Nav.Link>
            <Nav.Link href="./About.tsx">About</Nav.Link>
            <Nav.Link href="./Projects.tsx">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
