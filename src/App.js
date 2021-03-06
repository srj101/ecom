import "antd/dist/antd.css";
import "./App.css";
import Header from "./Component/header/header.component";
import NewArivals from "./Component/newarivals/newarivals.component.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FourOFour from "./Component/FourOFour/FourOFour.component";
import FooterCompo from "./Component/Footer/Footer.component";
import HomeContents from "./Component/HomeContents/HomeContents.component";
import ShopPage from "./pages/shop-pages/shop-page.component";

function App() {
  return (
    <div className="main">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <NewArivals />
            <HomeContents />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="*" exact>
            <FourOFour />
          </Route>
        </Switch>
        <FooterCompo />
      </Router>
    </div>
  );
}

export default App;
