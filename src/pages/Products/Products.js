import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products({ product, handleFindProduct }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-section"
      onClick={(e) => handleFindProduct(e, product.id)}
    >
      <div className="product-card">
        <div className="image-section">
          <img className="product-image" alt="" src={product.image}></img>
        </div>
        <div>
          <h2>{product.name}</h2>
          <h2>${product.price}.00</h2>
        </div>
      </div>
    </Link>
  );
}
