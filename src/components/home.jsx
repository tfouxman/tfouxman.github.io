import React, { Component } from "react";
import Jumbotron from "./jumbotron";
import styled from "styled-components";
import Typed from "typed.js";

const Styles = styled.div`
  .typed-cursor {
    font-size: 40px;
    animation: typing 2s steps(20, end), blink-caret 0.75s step-end 5;
    border-right: 0.15em solid transparent;
  }

  .wrap {
    height: 100px;
  }

  @media (max-width: 420px) {
    .wrap {
      height: 150px;
    }
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
      border-color: #efefef;
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
    if (window.outerWidth < 420) this.strings = ["Tom<br>Fouxman"];
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
          <Jumbotron>
            <div className="wrap">
              <span
                className="display-4"
                style={{ whiteSpace: "pre-wrap" }}
                ref={(el) => {
                  this.el = el;
                }}
              ></span>
            </div>
            <h2>Home</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae molestias laborum voluptatibus fugiat maxime
              blanditiis accusantium iusto aliquid? Dolores exercitationem vel
              hic et dolore consequatur saepe veniam obcaecati facere odit?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum quibusdam neque ducimus est qui odio, molestias totam
              consequuntur maiores voluptates!
            </p>
          </Jumbotron>
        </Styles>
      </React.Fragment>
    );
  }
}

export default Home;
