import "antd/dist/antd.css";
import "./App.css";
import Header from "./Component/header/header.component";
import NewArivals from "./Component/newarivals/newarivals.component.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <NewArivals />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
