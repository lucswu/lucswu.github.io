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
              fontSize: "10vh",
              fontWeight: "700",
              position: "absolute",
              top: "50vh",
              left: "5%",
              color: "black",
            }}
          >
            Hi, there!
            <Typist.Delay ms={500} /> I'm Lucas Wu.
          </span>
          <span
            style={{
              fontSize: "2vh",
              fontWeight: "100",
              position: "absolute",
              top: "75vh",
              left: "5%",
              color: "black",
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
