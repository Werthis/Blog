import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";
import AppDetails from "./Components/AppDetails";
import PageNotFound from "./Components/PageNotFound";
// for json server write:
// npx json-server --watch data/dataBase.json --port 8000

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/apps/:id">
              <AppDetails />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
