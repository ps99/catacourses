import React from 'react';
import logo from './logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <a className="header_logo" href="/">
        <img src={logo} alt="Logo" />
      </a>
      <nav>
        <ul className="header_navbar">
          <li><a href="/">Login</a></li>
          <li><a href="/">Logout</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;