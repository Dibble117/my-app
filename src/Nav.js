import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Nav;
