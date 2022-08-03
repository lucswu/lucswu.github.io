import React, { Component } from "react";
import Title from "./Title";
import Footer from "./Footer";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          style={{ ...SectionStyle, height: "90vh", backgroundColor: "black" }}
        >
          <Title />
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1>About Me</h1>
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "black" }}>
          <h1 style={{ color: "#FFFFFF" }}>Resume</h1>
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1 style={{ color: "#000000" }}>Projects</h1>
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "black" }}>
          <h1 style={{ color: "#FFFFFF" }}>Blog</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
