import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function header() {
  return (
    <div className="header">
      <Link to="/" className="logo__container">
        <img
          src="images/nepal.png"
          height="40px"
          width="30px"
          alt="logo"
          className="logo"
        />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default header;
