import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Styles = styled.div`
  & {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #373940;
    color: #ffffff;
  }

  .game {
    height: 600px;
    width: 450px;
    border: 2px solid black;
    margin-bottom: 26px;
  }
`;

class Shmup extends Component {
  componentDidMount() {
    document.title = "SHMUP Game";
  }

  render() {
    return (
      <Styles>
        <p>
          The game will automatically go to full screen once an in-game move is
          detected.
        </p>
        <div className="game">{this.props.unityContent}</div>
        <Button href="/" variant="primary">
          Back
        </Button>
      </Styles>
    );
  }
}

export default Shmup;
