import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

const Navbar = () => {
  // Initial value will be set to false, and true when the bars on the hamburger are clicked
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // I want to set the state to be the opposite of what it is. Essentially a toggle for the hamburger menu when clicked it'll turn into the 'x' symbol.
  const handleClick = () => { setClick(!click) };
  const closeMobibleMenu = () => {setClick(false)}

  return (
  <>
    <nav className='navbar'>
      {/* this replace the <a href=''></a> tag */}
      <Link to='/' className='navbar-logo'>
        Kurated Sound
      </Link>
      {/* this will be the hamburger menu. The onClick event handler is set equal to handleClick to change state */}
      <div className='menu-icon' onClick={handleClick}>
        {/* ternary: if click is true, fas fa-times if not, fas fa-bars */}
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      {/* logic will be similar to the menu icon */}
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobibleMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/services' className='nav-links' onClick={closeMobibleMenu}>
            Services <i className='fas fa-caret-down' />
          </Link>
          {/* if the dropdown is true then showcase <Dropdown /> component */}
          {dropdown && <Dropdown />}
        </li>
        <li className='nav-item'>
          <Link to='/contact-us' className='nav-links' onClick={closeMobibleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </>
  );
}

export default Navbar;

