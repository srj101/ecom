import React from "react";
import { Link } from "react-router-dom";
import "./fourofour.css";
import logo404 from "../../Assets/picture/logo404.png";
function FourOFour() {
  return (
    <div className="four-o-four">
      <div className="fouro-top">
        <div className="fouro-top-bg">
          <img src={logo404} alt="" />
        </div>
        <div className="fouro-content">
          <h1>
            Oops! <br />
            Page not found! PLEASE GO BACK TO <Link to="/">HOMEPAGE</Link>
          </h1>
        </div>
      </div>
      <div className="fouro-bottom"></div>
    </div>
  );
}

export default FourOFour;
