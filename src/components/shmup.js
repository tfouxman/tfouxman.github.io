import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

class Shmup extends Component {
  constructor(props) {
    super(props);
    const unityContent = new UnityContent(
      "../assets/SHMUP/SHMUPbuild.json",
      "../assets/SHMUP/UnityLoader.js"
    );
  }
  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}

export default Shmup;
