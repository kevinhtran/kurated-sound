import React from 'react'
import './Footer.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* Col 1 */}
          {/* Company Logo/Name and brand slogan */}
          <div className='col-md-2 border-1'>
            <h5 className='text-muted'>Kurated Sound</h5>
          </div>
          {/* Col 2 */}
          {/* Explore/Redirect Column */}
          <div className='col-md-2 border-1'>
            <h5 className='text-muted'>Explore</h5>
            <ul className='list-unstyled'>
              <li><a href='../' className='text-muted'>Home</a></li>
              <li><a href='../About' className='text-muted'>About</a></li>
              <li><a href='../Services' className='text-muted'>Services</a></li>
              <li><a href='../Contact' className='text-muted'>Contact Us</a></li>
              <li><a href='../SignUp' className='text-muted'>Sign Up</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          {/* Contact Column */}
          <div className='col-md-3 border-1'>
            <h5 className='text-muted'>Contact Us</h5>
            <p className='text-muted'>kuratedsound@gmail.com</p>
          </div>
          {/* Col 4 */}
          <div className='col-md-5 justify-content-center d-flex border-1'>
            {/* Social Media Accounts */}
            <div className='col'>
              <ul className='list-unstyled'>
                <li className='d-inline'><a href='https://www.instagram.com/kuratedsound/'><i class="fab fa-instagram fa-fw"></i></a></li>
                <li className='d-inline'><a href='https://www.facebook.com/profile.php?id=100009945706613'><i class="fab fa-facebook-f fa-fw"></i></a></li>
                <li className='d-inline'><a href='https://www.yelp.com/kuratedsound'><i class="fab fa-yelp fa-fw"></i></a></li>
                <li className='d-inline'><a href='https://www.youtube.com/kuratedsound'><i class="fab fa-youtube fa-fw"></i></a></li>
              </ul>
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
        <div className='row'>
          <p className='col text-center small text-muted'>
            &copy;{new Date().getFullYear()} Kurated Sound Inc., All Rights Reserved.
          </p>
        </div>
        <div className='row'>
          <p className='col text-center small text-muted'>
            Designed by Kevin Tran
          </p>
        </div>
      </div>
    </div>
  )
};

export default Footer;