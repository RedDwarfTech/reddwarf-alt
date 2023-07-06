import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';

const Header: React.FC = () => {

  return (<div>
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          Alternateive
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/app/window">Windows</Nav.Link>
          <Nav.Link href="#features">Andriod</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>);
}

export default Header;
