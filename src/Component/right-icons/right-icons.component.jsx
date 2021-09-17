import React, { useState } from "react";
import "./right-icons.style.css";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Drawer } from "@mui/material";

const RightIcons = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <div className="right-icons">
        <div className="right-icon">
          <SearchIcon />
        </div>
        <div className="right-icon">
          <FavoriteBorderIcon onClick={toggleDrawer} />
          <Drawer
            anchor="right"
            open={showDrawer}
            transitionDuration="3000"
            onClose={toggleDrawer}
            className="drawer"
          >
            Hello motherfucker!
          </Drawer>
        </div>

        <div className="right-icon">
          <PersonIcon />
        </div>

        <div className="right-icon">
          <ShoppingCartIcon />
        </div>
      </div>
    </>
  );
};
export default RightIcons;
