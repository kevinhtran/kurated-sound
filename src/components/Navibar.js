import React, { useState } from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navibar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Navbar.Brand href="#home">K_S</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
         <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/services">Services</Nav.Link></Nav.Item>
         <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navibar;

