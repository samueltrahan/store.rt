import React from 'react';
import './Featured.css';

export default function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-heading">Featured Items</h1>
    <div className="featured-section">
      <div className="image-one">
        <a href="/products/id"><img className="image" alt="" src="/images/shoe01.jpg"></img></a>
        <h3>$150.00</h3>
        <p>Available for a limited time only!</p>
      </div>
      <div className="image-two">
        <a href="/product/id"><img className="image" alt="" src="/images/shoe02.jpg"></img></a>
        <h3>$140.00</h3>
        <p>Available for a limited time only!</p>
      </div>
    </div>
    </div>
  )
}
