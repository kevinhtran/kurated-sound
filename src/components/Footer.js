import React from 'react'
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
                  <li className='d-inline'><a href='https://www.instagram.com/kuratedsound/'><i class="fab fa-instagram-square fa-fw"></i></a></li>
                  <li className='d-inline'><a href='https://www.facebook.com/profile.php?id=100009945706613'><i class="fab fa-facebook-square fa-fw"></i></a></li>
                  <li className='d-inline'><a href='https://www.yelp.com/kuratedsound'><i class="fab fa-yelp fa-fw"></i></a></li>
                  <li className='d-inline'><a href='https://www.youtube.com/kuratedsound'><i class="fab fa-youtube-square fa-fw"></i></a></li>
              </ul>
          </div>
          {/* Col 2 */}
          <div className='col'>
            <h4>STUFF</h4>
            <ul className='list-unstyled'>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
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
          {/* Col 4 */}
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
          <p className='col-sm text-center'>
            &copy;{new Date().getFullYear()} Kurated Sound Inc | All Rights Reserved | Terms Of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;