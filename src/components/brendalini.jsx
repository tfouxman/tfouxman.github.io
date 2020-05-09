import React, { Component } from "react";
import styled from "styled-components";
import brendalini from "../assets/brendalini.jpg";

const Styles = styled.div`
  .cover {
    background: url(${brendalini}) no-repeat;
    background-size: cover;
    margin-bottom: 0;
    color: #efefef;
    height: 150vh;
    position: relative;
    z-index: -2;
  }
`;

class Brendalini extends Component {
  render() {
    return (
      <Styles>
        <div className="cover"></div>
      </Styles>
    );
  }
}

export default Brendalini;
