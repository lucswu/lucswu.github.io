import React, { Component } from "react";
import Typist from "react-typist";
import "../Typist.css";

class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <Typist>
          <span
            style={{
              fontSize: "100px",
              fontWeight: "700",
              position: "absolute",
              top: "50vh",
              left: "8%",
              color: "#FFFFFF",
            }}
          >
            Hi, there!
            <Typist.Delay ms={500} /> I'm Lucas Wu.
          </span>
        </Typist>
      </React.Fragment>
    );
  }
}

export default Title;
