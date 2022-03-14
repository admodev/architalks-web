import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Archi-Talks</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#discover'>Descubrir</Nav.Link>
            <NavDropdown title='Links' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/twitter'>
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/instagram'>
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/facebook'>
                Facebook
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
