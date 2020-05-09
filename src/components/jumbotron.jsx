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

  .typewriter {
    margin: auto;
    display: inline-block;
  }

  .typewriter h2 {
    overflow: hidden;
    white-space: nowrap;
    overflow-wrap: break-word;
    border-right: 0.15em solid transparent;
    letter-spacing: 0.2em;
    animation: typing 2s steps(20, end), blink-caret 0.75s step-end 5;
  }

  @-webkit-keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @-webkit-keyframes blink-caret {
    from,
    to {
      border-color: orange;
    }
    50% {
      border-color: transparent;
    }
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: orange;
    }
    50% {
      border-color: transparent;
    }
  }
`;

class Jumbotron extends Component {
  render() {
    return (
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
          <Container>
            <div className="typewriter">
              <h2>Tom Fouxman</h2>
            </div>
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
