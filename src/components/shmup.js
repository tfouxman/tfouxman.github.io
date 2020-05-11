import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div`
  & {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #373940;
  }

  .game {
    height: 600px;
    width: 450px;
    border: 2px solid black;
  }
`;

class Shmup extends Component {
  render() {
    return (
      <Styles>
        <div className="game">{this.props.unityContent}</div>
      </Styles>
    );
  }
}

export default Shmup;
