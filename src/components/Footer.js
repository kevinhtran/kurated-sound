import React from 'react'
import './Footer.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='parent-container d-flex'>
      {/* 1st child container with logo, explore, fun stuff col */}
      <div className='container'>
        <div className='row'>
          {/* Col 1 */}
          {/* Company Logo/Name and brand slogan & social media accounts */}
          <div className='col-lg-5 col-md-2 border-1'>
            <h5 className='lead'>Kurated Sound</h5>
            <div className='col'>
              <ul className='list-unstyled'>
                <li className='d-inline'><a href='https://www.instagram.com/kuratedsound/'><i class="fab fa-instagram fa-fw"></i></a></li>
                <li className='d-inline'><a href='https://www.facebook.com/profile.php?id=100009945706613'><i class="fab fa-facebook-f fa-fw"></i></a></li>
                <li className='d-inline'><a href='https://www.yelp.com/kuratedsound'><i class="fab fa-yelp fa-fw"></i></a></li>
                <li className='d-inline'><a href='https://www.youtube.com/kuratedsound'><i class="fab fa-youtube fa-fw"></i></a></li>
              </ul>
            </div>
          </div>
          {/* Col 2 */}
          {/* Explore/Redirect Column */}
          <div className='col-lg-3 col-md-2 border-1'>
            <h5 className='lead'>Explore</h5>
            <ul className='list-unstyled'>
              <li><a href='../' className=''>Home</a></li>
              <li><a href='../About' className=''>About</a></li>
              <li><a href='../Services' className=''>Services</a></li>
              <li><a href='../Contact' className=''>Contact Us</a></li>
              <li><a href='../SignUp' className=''>Sign Up</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          {/* Contact Column */}
          <div className='col-lg-3 col-md-3 border-1'>
            <h5 className='lead'>Fun Stuff</h5>
            <p className=''>Electronic music</p>
            <p className=''>Events</p>
            <p className=''>Equipment</p>
            <p className=''>DJing</p>
          </div>
        </div>
      </div>
      {/* 2nd container with subscribe email form */}
      <div className='container'>
          <div className='col-lg-6 col-md-5 justify-content-center d-flex border-1'>
            <div className='col'>
              <p className='lead'>Suscribe for news!</p>
              {/* button goes here with 'I agree to the terms and condition, privacy, and cookie policy' */}
            </div>
            {/* Input For Email Subscription */}
            <div className='col'>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
      </div>
      </div>
      {/* Alone container with copyright and designed by text. Not apart of parent container */}
      <div className='container'>
        <div className='row'>
          <p className='col text-center small lead'>
            Designed by Kevin Tran
          </p>
        </div>
        <div className='row'>
          <p className='col text-center small lead'>
            &copy;{new Date().getFullYear()} Kurated Sound Inc., All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Footer;