import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img className="logo" alt="" src="/images/store-logo.png"></img>
      </div>
      <div className="nav-links">
        <a className="links" href="/prodcuts">Products</a>
        <a className="links" href="/services">Service</a>
        <a className="links" href="/about">About</a>
        <a className="links" href="/contact">Contact</a>
      </div>
    </div>
  )
}
