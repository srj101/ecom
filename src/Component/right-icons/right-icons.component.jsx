import React, { useState } from "react";
import "./right-icons.style.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Drawers from "../Drawers/Drawers.component";

const RightIcons = () => {
  return (
    <>
      <div className="right-icons" id="ok">
        <div className="right-icon">
          <SearchIcon />
        </div>
        <div className="right-icon">
          <Drawers icon="FavoriteBorderIcon" data="wishlist" title="Wishlist" />
        </div>

        <div className="right-icon">
          <PersonIcon />
        </div>

        <div className="right-icon">
          <Drawers icon="ShoppingCartIcon" data="cart" title="Cart" />
        </div>
      </div>
    </>
  );
};
export default RightIcons;
