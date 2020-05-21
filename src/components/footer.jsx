import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .container-fluid {
    background: #222;
    color: #bbb;
  }

  a {
    display: inline-block;
    color: #bbb;
  }

  a:active,
  a:visited {
    color: #bbb;
  }

  a:hover {
    color: white;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Styles>
        <Container fluid>
          <Row
            sm={1}
            xs={1}
            className="justify-content-around align-items-center"
          >
            <Col align="center" className="h2">
              <a
                target=" "
                href="https://www.linkedin.com/in/tomfouxman/"
                className="mx-2 mt-2"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
              </a>
              <a
                target=" "
                href="https://github.com/tfouxman/"
                className="mx-2 mt-2"
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </a>
            </Col>
            <Col align="center">
              <p className="mb-1">
                The repository for this website can be found{" "}
                <a
                  target=" "
                  href="https://github.com/tfouxman/tfouxman.github.io"
                  style={{ fontSize: 18, color: "white" }}
                >
                  <code>here</code>
                </a>
                .
              </p>
              <p id="copyright" property="dc:rights">
                &copy;
                <span property="dc:dateCopyrighted">
                  {new Date().getFullYear()}
                </span>
                <span property="dc:creator"> Tom Fouxman | </span>
                <span>
                  Made with{" "}
                  <a
                    target=" "
                    href="https://reactjs.org/"
                    style={{ fontSize: 18, color: "white" }}
                  >
                    <code>React.js</code>.
                  </a>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}

export default Footer;
