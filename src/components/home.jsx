import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Typed from "typed.js";
import lagos from "../assets/lagos.jpg";
import kayak from "../assets/kayak.jpg";
import autodata from "../assets/autodata.png";

const Styles = styled.div`
  .overlay {
    background-color: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .jumbotron {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${lagos}) no-repeat fixed bottom;
    background-size: cover;
    margin-bottom: 0;
    color: #efefef;
    height: auto;
    min-height: 100vh;
    position: relative;
    user-select: none;
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

class Home extends Component {
  componentDidMount() {
    this.strings = ["Tom Fouxman"];
    const options = {
      strings: this.strings,
      typeSpeed: 150,
      autoInsertCss: false,
      cursorChar: "",
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <React.Fragment>
        <Styles>
          <Jumbo fluid>
            <Container>
              <div className="row align-items-center justify-content-around">
                <div className="col-11 col-md-6 pb-4">
                  <span
                    className="display-4"
                    ref={(el) => {
                      this.el = el;
                    }}
                  ></span>
                  <p className="lead">
                    4<sup>th</sup> year Software Engineering student at{" "}
                    <b>Western University</b>.
                    <br />
                    <br />
                    Currently an intern at
                    <a href="https://www.autodatasolutions.com/" target=" ">
                      <img src={autodata} alt="" className="img-fluid" />
                    </a>
                  </p>
                </div>
                <div className="col-7 col-md-4">
                  <img
                    src={kayak}
                    alt=""
                    className="img-thumbnail img-fluid rounded"
                  />
                </div>
              </div>
              <h1 className="display-4 mb-3">Projects</h1>
              <div className="row justify-content-around">
                <div className="col-10 col-md-5">
                  <div className="p-3 mb-2 bg-dark text-white rounded">
                    <a href=""></a>
                    Full Stack Web Application (Angular)
                  </div>
                  <div className="p-3 mb-2 bg-dark text-white rounded">
                    Database Management System
                  </div>
                  <div className="p-3 mb-2 bg-dark text-white rounded">
                    Classic SHMUP Game (Unity)
                  </div>
                </div>
                <div className="col-10 col-md-5">
                  <div className="p-3 mb-2 bg-dark text-white rounded">
                    Multi-User Multi-Transaction Server
                  </div>
                  <div className="p-3 mb-2 bg-dark text-white rounded">
                    Full Stack Web Application (Angular)
                  </div>
                  <div className="p-3 mb-2 bg-dark text-white rounded">
                    Full Stack Web Application (Angular)
                  </div>
                </div>
              </div>
            </Container>
          </Jumbo>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Home;
