import React from "react";
import "./shop-page.style.css";

import ShopHeader from "../../Component/shop/shopHeader/shopHeader.component";
import ShopNav from "../../Component/shop/shopNav/shopNav.component";
import ShopLeftNav from "../../Component/shop/shopLeftNev/shopLeftNav.component";
import ShopCatelog from "../../Component/shop/ShopCatalog/shopCatalog.component";

const ShopPage = () => (
  <div className="shop-page">
    <ShopHeader />
    <ShopNav />
    <div className="shop-body">
      <ShopLeftNav />
      <ShopCatelog />
    </div>
  </div>
);
export default ShopPage;
