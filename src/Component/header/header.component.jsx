import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";
import FullMenu from "../fullmenu/full-menu.component";
import RightIcons from "../right-icons/right-icons.component";
import Logo from "../../logo.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
        {/* Menu Bar */}
        <FullMenu />
        {/* Logo Section */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="ShoppingKorbo!" />
          </Link>
        </div>
        {/* Search,Whitelist,Login,Cart */}
        <RightIcons />
      </div>
    </div>
  );
};
export default Header;
