import React, { Component } from "react";
import { Col, Container, Jumbotron as Jumbo, Row } from "react-bootstrap";
import styled from "styled-components";
import Typed from "typed.js";
import lagos from "../assets/lagos.jpg";

const Styles = styled.div`
  .jumbotron {
    margin-bottom: 0;
    color: #efefef;
    height: auto;
    min-height: 100vh;
    position: relative;
    user-select: none;
  }

  .card {
    background: #222;
    color: #bbb;
    height: 100%;
  }

  .card .card-footer {
    display: flex;
    justify-content: space-between;
  }

  .projects a {
    color: #bbb;
    text-decoration: none;

    &:active,
    &:visited {
      color: #bbb;
    }

    &:hover {
      color: white;
    }
  }

  .typed-cursor {
    font-size: 40px;
    animation: blink-caret 1s step-end 7;
    border-right: 0.15em solid transparent;
  }

  @-webkit-keyframes blink-caret {
    from,
    to {
      border-color: #efefef;
    }
    50% {
      border-color: transparent;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: #efefef;
    }
    50% {
      border-color: transparent;
    }
  }
`;

const Loading = styled.div`
  .overlay {
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .load {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .sk-chase {
    width: 80px;
    height: 80px;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
  }

  .sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;
  }

  .sk-chase-dot:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: 100%;
    animation: sk-chase-dot-before 2s infinite ease-in-out both;
  }

  .sk-chase-dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2) {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .sk-chase-dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  .sk-chase-dot:nth-child(2):before {
    animation-delay: -1s;
  }
  .sk-chase-dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  .sk-chase-dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  .sk-chase-dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  .sk-chase-dot:nth-child(6):before {
    animation-delay: -0.6s;
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
    };
  }

  componentDidMount() {
    document.title = "TF";
    this.strings = ["SITE UNDER CONSTRUCTION"];
    const options = {
      strings: this.strings,
      typeSpeed: 150,
      autoInsertCss: false,
      cursorChar: "",
    };

    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true,
      });
      this.typed = new Typed(this.el, options);
    };
    img.onerror = () => {
      this.setState({
        error: true,
      });
    };
    img.src = lagos;
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    if (!this.state.loaded)
      return (
        <Loading>
          <div className="overlay"></div>
          <div className="load">
            <div className="sk-chase">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          </div>
        </Loading>
      );
    else
      return (
        <Styles>
          <Jumbo
            fluid
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
                this.state.error ? "" : lagos
              }) no-repeat fixed bottom`,
              backgroundSize: `cover`,
            }}
          >
            <Container>
              <Row className="align-items-center justify-content-around pb-5">
                <Col className="pb-4">
                  <span
                    className="display-4"
                    ref={(el) => {
                      this.el = el;
                    }}
                  ></span>
                </Col>
              </Row>
            </Container>
          </Jumbo>
        </Styles>
      );
  }
}

export default Home;
