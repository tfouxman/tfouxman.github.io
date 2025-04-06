import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Brendalini, Footer, Home, NavigationBar, NoMatch } from "./components";

library.add(fab);

function App() {
  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/brendalini" component={Brendalini} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
