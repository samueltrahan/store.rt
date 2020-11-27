import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="copy-right">
        <h3 className="copy">&copy; 2020 <i className="fab fa-react fa-1x"></i></h3>
        <h4 className="design">Design and Theme by <a className="samuel" target="_blank" rel="noreferrer" href="https://www.samueltrahan.com">Samuel Trahan</a></h4>
      </div>
      <div className="socials">
        <a className="social-links" traget="_blank" rel="noreferrer" href="https://www.github.com/samueltrahan"><i className="fab fa-github fa-2x"></i></a>
        <a className="social-links" traget="_blank" rel="noreferrer" href="https://www.github.com/samueltrahan"><i className="fab fa-linkedin fa-2x"></i></a>
        <a className="social-links" traget="_blank" rel="noreferrer" href="https://www.github.com/samueltrahan"><i className="fab fa-twitter fa-2x"></i></a>
      </div>
    </div>
  )
}
