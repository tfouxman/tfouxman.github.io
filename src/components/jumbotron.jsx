import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import lagos from "../assets/lagos.jpg";

const Styles = styled.div`
  .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .jumbotron {
    background: url(${lagos}) no-repeat fixed bottom;
    background-size: cover;
    margin-bottom: 0;
    color: #efefef;
    height: 100vh;
    position: relative;
    z-index: -2;
  }
`;

class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid>
          <div className="overlay"></div>
          <Container>{this.props.children}</Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
