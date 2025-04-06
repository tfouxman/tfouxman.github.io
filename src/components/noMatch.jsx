import React, { Component } from "react";

class NoMatch extends Component {
  componentDidMount() {
    document.title = "Page 404";
  }

  render() {
    return (
      <div>
        <h2>Whoops!</h2>
        <p>Page does not exist.</p>
      </div>
    );
  }
}

export default NoMatch;
