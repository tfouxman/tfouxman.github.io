import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import lagos from "../assets/lagos.jpg";

const Styles = styled.div`
  .jumbotron {
    background: url(${lagos}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
          <Container>
            <h1>Welcome</h1>
            <p>Trash website!</p>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
