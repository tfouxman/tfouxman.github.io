import React, { Component } from "react";
import Jumbotron from "./jumbotron";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          molestias laborum voluptatibus fugiat maxime blanditiis accusantium
          iusto aliquid? Dolores exercitationem vel hic et dolore consequatur
          saepe veniam obcaecati facere odit?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          quibusdam neque ducimus est qui odio, molestias totam consequuntur
          maiores voluptates!
        </p>
      </React.Fragment>
    );
  }
}

export default Home;
