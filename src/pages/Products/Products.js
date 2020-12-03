import React from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Products.css";

toast.configure();

export default function Products({ product }) {
  const handleToken = async (token, addresses) => {
    const response = await axios.post("/checkout", {
      token,
      product:  product.price
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
    <Link to={`/products/${product.id}`} className="product-section">
      <ToastContainer />
      <div className="product-card">
        <div className="image-section">
          <img className="product-image" alt="" src={product.image}></img>
        </div>
        <div>
          <h2>{product.name}</h2>
          <h2>${product.price}.00</h2>
        </div>
        <StripeCheckout
          stripeKey="pk_test_51HtxUMHNTB4gu9aGx5RGz2s3fr5gdUchQxQzs26a7O6yQe1xczX4P3Zt3m3QREvDjTDK9cAu2lMUy6Tl0mX2GSgR00eEsn9dH4"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={product.price * 100}
        />
      </div>
    </Link>
  );
}
