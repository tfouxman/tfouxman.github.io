import React, { Component } from "react";
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

  .hvr-grow {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
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
                      src={require("../assets/100px180.svg")}
                    />
                    <Card.Body>
                      <Card.Title>COVID-19 Tracker</Card.Title>
                      <Card.Text>
                        A simple app that uses React libraries to represent the
                        current state of the coronavirus pandemic.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">View on Github</Button>
                      <Button variant="primary">Demo</Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/100px180.svg")}
                    />
                    <Card.Body>
                      <Card.Title>Android App for Bad Habits (Java)</Card.Title>
                      <Card.Text>
                        An android app that helps the user discontinue a bad
                        habit by using the 4-step process. Firebase was used for
                        the user database.
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
                      <Button variant="primary">Demo</Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/100px180.svg")}
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
                      <Button variant="primary">Demo</Button>
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
                      src={require("../assets/100px180.svg")}
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
                      <Button variant="primary">Demo</Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/100px180.svg")}
                    />
                    <Card.Body>
                      <Card.Title>Classic SHMUP Game (Unity)</Card.Title>
                      <Card.Text>
                        A classic SHMUP game. Shoot the bad guys and stay alive!
                        Unity and C#.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">View on Github</Button>
                      <Button href="/shmup" variant="primary">
                        Demo
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col sm={"auto"} xs={"auto"} className="pb-2 pt-2">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={require("../assets/100px180.svg")}
                    />
                    <Card.Body>
                      <Card.Title>Database Management System</Card.Title>
                      <Card.Text>
                        A simple DBMS made with MySQL to simulate student course
                        selection and availability. PHP used for UI.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button variant="secondary">View on Github</Button>
                      <Button variant="primary">Demo</Button>
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
                      src={require("../assets/100px180.svg")}
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
                    <Card.Footer>
                      <Button variant="secondary">View on Github</Button>
                      <Button variant="primary">Demo</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              {/* <Row className="row justify-content-around projects">
                <h1 className="col-10 col-md-11 display-4 mb-3">Projects</h1>
                <div className="col-10 col-md-5">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>COVID-19 Tracker</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Card.Footer>
                    <Button variant="secondary">View on Github</Button>
                    <Button variant="primary">Demo</Button>
                  </Card.Footer>
                    </Card.Body>
                  </Card>
                  <a href="">
                    <div className="p-3 mb-2 bg-dark rounded hvr-grow">
                      Android App for Bad Habits (Java)
                    </div>
                  </a>
                  <a href="">
                    <div className="p-3 mb-2 bg-dark rounded hvr-grow">
                      Database Management System
                    </div>
                  </a>
                  <a href="">
                    <div className="p-3 mb-2 bg-dark rounded hvr-grow">
                      Classic SHMUP Game (Unity)
                    </div>
                  </a>
                </div>
                <div className="col-10 col-md-5">
                  <a href="">
                    <div className="p-3 mb-2 bg-dark rounded hvr-grow">
                      Multi-User Multi-Transaction Server
                    </div>
                  </a>
                  <a href="">
                    <div className="p-3 mb-2 bg-dark rounded hvr-grow">
                      P2P Network with Image Search (JS)
                    </div>
                  </a>
                  <a href="">
                    <div className="p-3 mb-2 bg-dark rounded hvr-grow">
                      Full Stack Web Application (Angular)
                    </div>
                  </a>
                </div>
              </Row> */}
            </Container>
          </Jumbo>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Home;
