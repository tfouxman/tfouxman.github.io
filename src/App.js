import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./components/home";
import Projects from "./components/projects";
import Experience from "./components/experience";
import NoMatch from "./components/noMatch";
import Layout from "./components/layout";
import NavigationBar from "./components/navbar";

library.add(fab);

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
