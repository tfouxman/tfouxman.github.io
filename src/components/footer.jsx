import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .jumbotron {
    margin-bottom: 0;
    background: #222;
    color: #bbb;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid>
          <Container>
            <p className="lead">
              The repository for this website can be found{" "}
              <a
                target=" "
                href="https://github.com/tfouxman/tfouxman.github.io"
              >
                here
              </a>
              .
            </p>
            <p className="lead">
              This website was made with{" "}
              <a target=" " href="https://reactjs.org/">
                <code>React.js</code>
              </a>
            </p>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Footer;
