import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import * as ReactBootstrap from 'react-bootstrap';

const Navbar = () => {
  return (
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
          <ReactBootstrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Divider />
            <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.NavDropdown>
        </ReactBootstrap.Nav>
        <ReactBootstrap.Nav>
          <ReactBootstrap.Nav.Link href="#deets">More deets</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
            Dank memes
          </ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Navbar;

