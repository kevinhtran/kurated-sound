import React from 'react'
import './Jumbo.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import neonSunset from '../assets/neonSunset.jpg';

const Jumbo = () => {
  return (
    <Jumbotron className='jumbo'>
      <div>
        <Container>
          <h1>We are Kurated Sound</h1>
          <p>Bringing to you extraordinary sound equipment to all events and occasions.</p>
          <p>
            <Button variant="primary">More details</Button>
          </p>
        </Container>
      </div>
    </Jumbotron>
  )
}

export default Jumbo;