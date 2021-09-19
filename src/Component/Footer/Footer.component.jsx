import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function FooterCompo() {
  return (
    <div className="footer">
      <div className="menu__list">
        <div className="menu__item">
          <Link to="/">Home</Link>
        </div>
        <div className="menu__item">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="menu__item">
          <Link to="/about">About Us</Link>
        </div>
        <div className="menu__item">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="menu__item">
          <Link to="/">FAQ</Link>
        </div>
        <div className="menu__item">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="logo">
        <h1>
          Shopp<span>ing</span>Korbo
        </h1>
      </div>
      <div className="all">
        <p>© 2007 - 2021 MF Ltd.</p>
      </div>
    </div>
  );
}

export default FooterCompo;
