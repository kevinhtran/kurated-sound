import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* Col 1 */}
          <div className='col'>
            <h4>Kurated Sound</h4>
            <ul className='list-unstyled'> 
              <li>408-999-9999</li>
              <li>San Jose, CA.</li>
              <li>kuratedsound@gmail.com</li>
            </ul>
          </div>
          {/* Col 2 */}
          <div className='col'>
            <h4>Socials</h4>
            <ul className='list-unstyled'>
              <li>IG</li>
              <li>FACEBOOK</li>
              <li>YOUTUBE</li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className='col'>
            <h4>STUFF</h4>
            <ul className='list-unstyled'>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Kurated Sound Inc | All Rights Reserved | Terms Of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;