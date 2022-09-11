import React, { Component } from "react";
import Title from "./Title";

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
        <div style={{ SectionStyle, height: "90vh", backgroundColor: "white" }}>
          <Title />
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "#333333" }}>
          <h1 style={{ color: "white" }}>About Me - WIP</h1>
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1 style={{ color: "black" }}>Resume - WIP</h1>
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "#333333" }}>
          <h1 style={{ color: "white" }}>Projects - WIP</h1>
        </div>

        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1 style={{ color: "#black" }}>Blog - WIP</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
