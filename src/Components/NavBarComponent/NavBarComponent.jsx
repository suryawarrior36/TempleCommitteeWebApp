import React, { useState } from 'react';
import './NavBarComponent.css';
import logo from '../../assets/temple-logo.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarComponent = () => {
  const [expanded, setExpanded] = useState(false); // State to manage navbar expansion

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar when a link is clicked
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" expanded={expanded}>
        <Container>
          <div className="brand-container">
            <Navbar.Brand href="#home" className="custom-brand">
              <img src={logo} alt="Temple Logo" className="logo" />
              Sri Nagathamman Kovil
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle expansion state
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto custom-nav" onSelect={handleNavClick}>
              <Nav.Link href="#land-part">Home</Nav.Link>
              <Nav.Link href="#about-part">About Us</Nav.Link>
              <NavDropdown title="Connect" id="basic-nav-dropdown">
                <NavDropdown.Item href="#committee-members">
                  Committee Members
                </NavDropdown.Item>
                <NavDropdown.Item href="#staff-members">
                  Staff Members
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#events">Events</Nav.Link>
              <Nav.Link href="#donations">Donations</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComponent;