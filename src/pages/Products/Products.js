import React from 'react';
import {Link} from 'react-router-dom';
import './Products.css';

export default function Products({image, price, id}) {
  return (
    <Link to={id} className="product-section">
      <div className="product-card">
          <div className="image-section">
            <img className="product-image" alt="" src={image}></img>
          </div>
          <div>
            <h2>{price}</h2>
          </div>
      </div>
    </Link>
  )
}
