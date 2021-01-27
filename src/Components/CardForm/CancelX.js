import React from "react";
import { Link } from "react-router-dom";
import "./CancelX.styles.css";

const CancelX = () => (
  <Link to="/" className="cancelX">
    <div>&#10006;</div>
  </Link>
);

export default CancelX;
