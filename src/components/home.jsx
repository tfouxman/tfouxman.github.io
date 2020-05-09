import React, { Component } from "react";
import Jumbotron from "./jumbotron";
import styled from "styled-components";

const Styles = styled.div`
  .typewriter {
    margin: auto;
    display: inline-block;
  }

  .typewriter h2 {
    overflow: hidden;
    white-space: nowrap;
    overflow-wrap: break-word;
    border-right: 0.15em solid transparent;
    letter-spacing: 0.1em;
    animation: typing 2s steps(20, end), blink-caret 0.75s step-end 5;
  }

  @-webkit-keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @-webkit-keyframes blink-caret {
    from,
    to {
      border-color: orange;
    }
    50% {
      border-color: transparent;
    }
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: orange;
    }
    50% {
      border-color: transparent;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <Styles>
            <div className="typewriter">
              <h2 className="display-4">Tom Fouxman</h2>
            </div>
          </Styles>
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae molestias laborum voluptatibus fugiat maxime blanditiis
            accusantium iusto aliquid? Dolores exercitationem vel hic et dolore
            consequatur saepe veniam obcaecati facere odit?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            quibusdam neque ducimus est qui odio, molestias totam consequuntur
            maiores voluptates!
          </p>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Home;
