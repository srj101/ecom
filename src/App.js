import "./App.css";
import Header from "./Component/header/header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <div> Content </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
