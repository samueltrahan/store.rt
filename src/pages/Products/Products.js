import React from 'react';
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import './Products.css';

export default function Products({image, price, id}) {

  const handleToken = (token, addresses) => {
      console.log({token, addresses})
  }

  return (
    <Link to={id} className="product-section">
      <div className="product-card">
          <div className="image-section">
            <img className="product-image" alt="" src={image}></img>
          </div>
          <div>
            <h2>{price}</h2>
          </div>
          <StripeCheckout stripeKey="pk_test_51HtxUMHNTB4gu9aGx5RGz2s3fr5gdUchQxQzs26a7O6yQe1xczX4P3Zt3m3QREvDjTDK9cAu2lMUy6Tl0mX2GSgR00eEsn9dH4"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={price * 100}
          />
      </div>
    </Link>
  )
}
