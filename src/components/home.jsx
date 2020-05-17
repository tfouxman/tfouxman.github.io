import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron as Jumbo,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import styled from "styled-components";
import Typed from "typed.js";
import kayak from "../assets/kayak.jpg";
import lagos from "../assets/lagos.jpg";
import autodata from "../assets/autodata.png";

const Styles = styled.div`
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
      loading: true,
    };

    this.img = new Image();
    this.img.onload = () => {
      this.setState({ loading: false });
    };
    this.img.src = lagos;
  }

  componentDidMount() {
    document.title = "Tom Fouxman";
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
          <Jumbo
            fluid
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${this.img.src}) no-repeat fixed bottom`,
              backgroundSize: `cover`,
            }}
          >
            {this.state.loading ? (
              <React.Fragment>
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
              </React.Fragment>
            ) : null}
            <Container>
              <Row className="align-items-center justify-content-around pb-5">
                <Col md={6} className="pb-4">
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
                </Col>
                <Col sm={4} xs={8}>
                  <img
                    src={kayak}
                    alt=""
                    className="img-thumbnail img-fluid rounded"
                  />
                </Col>
              </Row>
              <Row
                lg={12}
                sm={1}
                className="justify-content-around align-items-around pb-3 projects"
              >
                <Col
                  sm={"auto"}
                  xs={"auto"}
                  style={{ minWidth: "18rem", paddingLeft: "0" }}
                  className="display-4 pb-0 pt-0 pb-md-2 pt-md-2"
                >
                  Projects
                </Col>
                <Col
                  sm={"auto"}
                  xs={"auto"}
                  style={{ minWidth: "18rem" }}
                  className="pb-0 pt-0 pb-md-2 pt-md-2"
                ></Col>
                <Col
                  sm={"auto"}
                  xs={"auto"}
                  style={{ minWidth: "18rem" }}
                  className="pb-0 pt-0 pb-lg-2 pt-lg-2"
                ></Col>
              </Row>
              <Row
                lg={12}
                sm={1}
                className="justify-content-around pb-md-2 pt-2"
              >
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/covidapp.png")}
                    />
                    <Card.Body>
                      <Card.Title>COVID-19 Tracker</Card.Title>
                      <Card.Text>
                        A simple app that uses React libraries to represent the
                        current state of the coronavirus pandemic.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        target="_blank"
                        href="https://github.com/tfouxman/tfouxman.github.io/tree/React-Code/src/components/Covid"
                        variant="secondary"
                      >
                        View on Github
                      </Button>
                      <Button as={Link} to="/covid" variant="primary">
                        Demo
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/latesleeper.png")}
                      style={{ borderBottom: "2px solid #373940" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        Android App for Sleeping Late (Java)
                      </Card.Title>
                      <Card.Text>
                        An android app that helps the user discontinue staying
                        up late by using the 4-step process. Firebase was used
                        for the user database.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        target="_blank"
                        href="https://github.com/tfouxman/SE3350-Android_Application"
                        variant="secondary"
                      >
                        View on Github
                      </Button>
                      <Button
                        target="_blank"
                        href="https://www.youtube.com/watch?v=z14ogKdjQAg&t=405s"
                        variant="primary"
                      >
                        Demo
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/p2p.png")}
                    />
                    <Card.Body>
                      <Card.Title>
                        P2P Network with Image Search (JS)
                      </Card.Title>
                      <Card.Text>
                        A simple (local) P2P network made with JS that can be
                        used to search and transfer images across peers.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">View on Github</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              <Row
                lg={12}
                sm={1}
                className="justify-content-around pb-md-2 pt-2"
              >
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/fullstack.png")}
                    />
                    <Card.Body>
                      <Card.Title>Full Stack Web Application</Card.Title>
                      <Card.Text>
                        A simple web app for song sharing and reviewing. Angular
                        and Firebase were used.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        target=" "
                        href="https://github.com/tfouxman/SE3350-Android_Application"
                        variant="secondary"
                      >
                        View on Github
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/shmup.png")}
                    />
                    <Card.Body>
                      <Card.Title>Classic SHMUP Game (Unity)</Card.Title>
                      <Card.Text>
                        A classic SHMUP game. Shoot the bad guys and stay alive!
                        Unity and C#.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        target="_blank"
                        href="https://github.com/tfouxman/SE2250_Project_rsinge_tfouxman_mdsilva6"
                        variant="secondary"
                      >
                        View on Github
                      </Button>
                      <Button as={Link} to="/shmup" variant="primary">
                        Demo
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/dbms.png")}
                    />
                    <Card.Body>
                      <Card.Title>Database Management System</Card.Title>
                      <Card.Text>
                        A simple DBMS made with MySQL to simulate student course
                        selection and availability. PHP used for UI.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        target="_blank"
                        href="https://github.com/tfouxman/CourseSelectorDBMS"
                        variant="secondary"
                      >
                        View on Github
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              <Row
                lg={12}
                sm={1}
                className="justify-content-around pb-md-2 pt-2"
              >
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/chat.png")}
                    />
                    <Card.Body>
                      <Card.Title>
                        Multi-User Multi-Transaction Server
                      </Card.Title>
                      <Card.Text>
                        A UNIX based client-server system hosted on AWS to
                        simulate a chat between multiple users. C++ and Python.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbo>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Home;
