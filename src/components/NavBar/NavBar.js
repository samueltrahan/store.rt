import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo-section">
        <a href="/"><img className="logo" alt="" src="/images/store-logo.png"></img></a>
      </div>
      <div className="nav-links">
        <a className="links" href="/products">Products</a>
        <a className="links" href="/services">Services</a>
        <a className="links" href="/about">About</a>
        <a className="links" href="/contact">Contact</a>
      </div>
    </div>
  )
}
