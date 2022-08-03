import React, { Component } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import "../Typist.css";

class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <Typist>
          <span
            style={{
              fontSize: "120px",
              fontWeight: "700",
              position: "absolute",
              top: "60vh",
              left: "5%",
              color: "#FFFFFF",
            }}
          >
            Hi, there!
            <Typist.Delay ms={500} /> I'm Lucas Wu.
          </span>
          <span
            style={{
              fontSize: "15px",
              fontWeight: "100",
              position: "absolute",
              top: "75vh",
              left: "5%",
              color: "#FFFFFF",
              margin: "0",
            }}
          >
            <Typist.Delay ms={500} />
            <h1>
              Check out my projects <Link to="/Projects">here</Link>.
            </h1>
            <h1>
              View my resume <Link to="/Resume">here</Link>.
            </h1>
          </span>
        </Typist>
      </React.Fragment>
    );
  }
}

export default Title;
