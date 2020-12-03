import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './ProductDetails.css';

toast.configure();

export default function ProductDetails({shoes}) {
  const handleToken = async (token, addresses) => {
    const response = await axios.post("/checkout", {
      token,
      product:  shoes.price
    });
    const { status } = response.data;
    console.log(status);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };


  return (
    <div className="product-details">
      <ToastContainer />
      <div className="shoe-section">
      <img alt="" className="product-detail-image" src={shoes.image}></img>
      <h1>{shoes.name}</h1>
      <h1>${shoes.price}.00</h1>
      </div>
      <div className="pay-section">
        <h2>If interested in buying a pair of these shoes just click the pay with card option. We only have one size shoe so bare with us please!</h2>
        <StripeCheckout
          stripeKey="pk_test_51HtxUMHNTB4gu9aGx5RGz2s3fr5gdUchQxQzs26a7O6yQe1xczX4P3Zt3m3QREvDjTDK9cAu2lMUy6Tl0mX2GSgR00eEsn9dH4"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={shoes.price * 100}
        />
      </div>
    </div>
  )
}
