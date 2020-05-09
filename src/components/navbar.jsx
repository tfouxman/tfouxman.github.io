import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Styles = styled.div`
  & {
    font-size: 20px;
  }

  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const Instagram = styled.div`
  .fa-instagram:hover {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    /* color: transparent; */
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

class NavigationBar extends Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="fa-instagram">
                <Nav.Link href="/">
                  <Instagram>
                    <FontAwesomeIcon
                      className="fa-instagram"
                      icon={["fab", "instagram"]}
                      size="lg"
                    />
                  </Instagram>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/gallery">Photo Gallery</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;
