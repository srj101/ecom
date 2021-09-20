import React, { useState } from "react";
import "./right-icons.style.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Drawers from "../Drawers/Drawers.component";
import Search from "../SearchComponent/Search.component";

const RightIcons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const subofShop = document.querySelector(".sub_menu__item");

  const handleClick = (e) => {
    setIsMenuOpen(true);
  };

  const closemenu = (e) => {
    setIsMenuOpen(false);
  };

  const showSub = () => {
    subofShop.classList.toggle("show");
  };
  return (
    <>
      <div className="right-icons" id="ok">
        <div className="right-icon">
          <SearchIcon onClick={handleClick} />
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

        <div
          className={
            isMenuOpen ? `overlay__menu_showed` : `overlay__menu_hidden`
          }
        >
          <Search />
          <div className="menu-close" onClick={closemenu}>
            <span>X</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default RightIcons;
