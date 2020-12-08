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
        <div className='container mx-0 pl-4 pr-0'>
          <div className='row'>
            {/* Col 1 */}
            {/* Company Logo/Name and brand slogan & social media accounts */}
            <div className='col-lg-4 col-md-4'>
              <div className='col text-center'>
                <h5 className='lead text-center'>Kurated Sound</h5>
                <ul className='list-unstyled flex-lg-row justify-content-center'>
                  <li><a href='https://www.instagram.com/kuratedsound/' className='custom-link'><i class="fab fa-instagram fa-fw"></i></a></li>
                  <li><a href='https://www.facebook.com/profile.php?id=100009945706613' className='custom-link'><i class="fab fa-facebook-f fa-fw"></i></a></li>
                  <li><a href='https://www.yelp.com/kuratedsound' className='custom-link'><i class="fab fa-yelp fa-fw"></i></a></li>
                  <li><a href='https://www.youtube.com/kuratedsound' className='custom-link'><i class="fab fa-youtube fa-fw"></i></a></li>
                  <li><a href='https://www.twitch.tv/kuratedsound' className='custom-link'><i class="fab fa-twitch fa-fw"></i></a></li>
                </ul>
              </div>
            </div>
            {/* Col 2 */}
            {/* Explore/Redirect Column */}
            <div className='col-lg-3 col-md-4 text-center'>
              <h5 className='lead'>Explore</h5>
              <ul className='list-unstyled flex-lg-row justify-content-center'>
                <li><a href='../' className='custom-link'>Home</a></li>
                <li><a href='../About' className='custom-link'>About</a></li>
                <li><a href='../Services' className='custom-link'>Services</a></li>
                <li><a href='../Contact' className='custom-link'>Contact Us</a></li>
                <li><a href='../SignUp' className='custom-link'>Sign Up</a></li>
              </ul>
            </div>
            {/* Col 3 */}
            {/* Contact Column */}
            <div className='col-lg-3 col-md-4 text-center'>
              <h5 className='lead'>Fun Stuff</h5>
              <ul className='list-unstyled flex-lg-row justify-content-center'>
                <li>Electronic music</li>
                <li>Events</li>
                <li>Equipment</li>
                <li>DJing</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2nd container with subscribe email form */}
        <div className='container mx-0 pr-5 pl-0'>
          <div className='row'>
            <div className='col-md-12 justify-content-center'>
              <div className='col'>
                <p className='lead'>Suscribe for news!</p>
                {/* button goes here with 'I agree to the terms and condition, privacy, and cookie policy' */}
              </div>
              {/* Input For Email Subscription */}
              <div className='col'>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter email address here"
                    aria-label="Enter email address here"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Submit</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Alone container with copyright and designed by text. 
      Not apart of parent container */}
      <div className='container'>
        <div className='row'>
          <p className='mx-auto small mb-0'>
            Designed by Kevin Tran
          </p>
        </div>
        <div className='row'>
          <p className='mx-auto small'>
            &copy;{new Date().getFullYear()} Kurated Sound Inc., All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Footer;