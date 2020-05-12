import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  Home,
  About,
  Experience,
  Covid,
  Shmup,
  NoMatch,
  NavigationBar,
  Footer,
  Brendalini,
} from "./components";
import Unity, { UnityContent } from "react-unity-webgl";

library.add(fab);

const unityContent = new UnityContent(
  "Build/SHMUP.json",
  "Build/UnityLoader.js"
);

const unityObject = (
  <Unity unityContent={unityContent} width="450px" height="600px" />
);

function App() {
  return (
    <React.Fragment>
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/covid" component={Covid} />
          <Route
            path="/shmup"
            render={(props) => <Shmup {...props} unityContent={unityObject} />}
          />
          <Route path="/brendalini" component={Brendalini} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
