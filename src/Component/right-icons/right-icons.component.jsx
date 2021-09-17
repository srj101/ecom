import React, { useState } from "react";
import "./right-icons.style.css";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BasicSideDrawer from "../sideDrawer/sideDrawer";
const RightIcons = () => {
  const [isMenuOpen, IsMenuOpen] = useState(false);

  const handleClick = (e) => {
    IsMenuOpen(true);
  };
  return (
    <>
      <div className="right-icons">
        <div className="right-icon">
          <SearchIcon onClick={handleClick} />
        </div>
        <div className="right-icon">
          <FavoriteBorderIcon />
        </div>

        <div className="right-icon">
          <PersonIcon />
        </div>

        <div className="right-icon">
          <ShoppingCartIcon />
        </div>
      </div>
      <BasicSideDrawer isOpen={isMenuOpen} onClose={() => IsMenuOpen(false)} />
    </>
  );
};
export default RightIcons;
