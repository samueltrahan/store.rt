import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services({ path, title, content }) {
  return (
    <div className="services-section">
      <Link to={path} className="service">
        <h1>{title} ----&gt;</h1>
        <p>{content}</p>
      </Link>
    </div>
  );
}
