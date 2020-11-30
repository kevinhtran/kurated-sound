import React from 'react';
import './Box.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

const Jumbo = () => {
  return (
    <Jumbotron className='jumbo'>
      <div>
        <div>
          <h1 className='jumbo-color-1 box-1'>We are Kurated Sound</h1>
          <h4 className='jumbo-color-1 box-1'>Bringing to you extraordinary sound equipment to all events and occasions within the Bay Area.</h4>
          <div className='text-center'>
            <Button className='button-1'>Book us now</Button>
          </div>
        </div>
      </div>
    </Jumbotron>
  )
}

export default Jumbo;