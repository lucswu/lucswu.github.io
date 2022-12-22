import React, { Component } from "react";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// To-do - add a bunch of bars with each project, that link to the specific project
// 1. This thing
// 2. CIS 1900 Minesweeper
// 3. CIS 1200 Tetris
// 4. CIS 1900 Candy Crush

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
