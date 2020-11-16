import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const HeroJumbotron = () => {
  return (
  <Jumbotron>
    <h1>We are Kurated Sound</h1>
    <p>Bringing to you extrodinary sound equipment to all events and occasions.</p>
    <p>
      <Button variant="primary">More details</Button>
    </p>
  </Jumbotron>
  )
}

export default HeroJumbotron;