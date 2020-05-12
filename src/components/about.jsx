import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class About extends Component {
  componentDidMount() {
    document.title = "About";
  }

  render() {
    return (
      <Container>
        <h2>About</h2>
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
      </Container>
    );
  }
}

export default About;
