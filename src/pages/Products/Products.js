import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Products.css";

toast.configure();

export default function Products({ image, price, id }) {
  // const { id } = useParams();
  console.log(id)
  const handleToken = async (token, addresses) => {
    const response = await axios.post("/checkout", {
      token,
      product: { price },
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
    <Link to={`/products/${id}`} className="product-section">
      <ToastContainer />
      <div className="product-card">
        <div className="image-section">
          <img className="product-image" alt="" src={image}></img>
        </div>
        <div>
          <h2>${price}.00</h2>
        </div>
        <StripeCheckout
          stripeKey="pk_test_51HtxUMHNTB4gu9aGx5RGz2s3fr5gdUchQxQzs26a7O6yQe1xczX4P3Zt3m3QREvDjTDK9cAu2lMUy6Tl0mX2GSgR00eEsn9dH4"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={price * 100}
        />
      </div>
    </Link>
  );
}
