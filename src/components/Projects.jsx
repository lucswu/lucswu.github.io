import React, { Component } from "react";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ ...SectionStyle, backgroundColor: "white" }}>
          <h1>Projects</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
