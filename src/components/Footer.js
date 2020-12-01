import React from 'react'
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from '../Home';
// import About from '../About';
// import Services from '../Services';
// import Contact from '../Contact';
import './Footer.css';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* Col 1 */}
          <div className='col'>
            <h4 className='center-block'>Kurated Sound</h4>
              <ul className='list-unstyled center-block'>
                  <li className='d-inline'><a href='https://www.instagram.com/kuratedsound/'><i class="fab fa-instagram fa-fw"></i></a></li>
                  <li className='d-inline'><a href='https://www.facebook.com/profile.php?id=100009945706613'><i class="fab fa-facebook-f fa-fw"></i></a></li>
                  <li className='d-inline'><a href='https://www.yelp.com/kuratedsound'><i class="fab fa-yelp fa-fw"></i></a></li>
                  <li className='d-inline'><a href='https://www.youtube.com/kuratedsound'><i class="fab fa-youtube fa-fw"></i></a></li>
              </ul>
          </div>
          {/* Col 2 */}
          <div className='col'>
            <h4>Explore</h4>
            <ul className='list-unstyled'>
              <li><a href='../'>Home</a></li>
              <li><a href='../About'>About</a></li>
              <li><a href='../Services'>Services</a></li>
              <li><a href='../Contact'>Contact Us</a></li>
              <li><a href='../SignUp'>Sign Up</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className='col'>
            <h4>Contact Us</h4>
            <ul className='list-unstyled'>
              <li>PO BOX 99999 CA.</li>
              <li>(408)999-9999</li>
              <li>kuratedsound@gmail.com</li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className='col'>
            <h4>Subscribe to us:</h4>
            <ul className='list-unstyled'>
              <li>Enter email here *form goes here_______*</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <p className='col-sm text-center'>
            &copy;{new Date().getFullYear()} Kurated Sound Inc., All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;