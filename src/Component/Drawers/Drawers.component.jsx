import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer } from "antd";

function Drawers({ title, data, icon }) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="drawer-wrapper">
      {icon === "FavoriteBorderIcon" ? (
        <FavoriteBorderIcon onClick={showDrawer} />
      ) : (
        ""
      )}
      {icon === "ShoppingCartIcon" ? (
        <ShoppingCartIcon onClick={showDrawer} />
      ) : (
        ""
      )}
      <Drawer
        title={title}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {data}
      </Drawer>
    </div>
  );
}

export default Drawers;
