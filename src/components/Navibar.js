import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navibar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">K_S</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
         <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
          <Nav.Link eventKey={2} href="/sign-up">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;

