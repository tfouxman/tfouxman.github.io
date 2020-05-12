import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
  & {
    font-size: 20px;
    user-select: none;
  }

  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:active,
    &:visited {
      color: #bbb;
    }

    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/">
            <svg
              className="bi bi-house-fill"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="pl-1 pl-md-0">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  target=" "
                  href="https://www.linkedin.com/in/tomfouxman/"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target=" " href="https://github.com/tfouxman/">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/covid">
                  Covid-19 Tracker
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/experience">
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/gallery">
                  Photo Gallery
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
