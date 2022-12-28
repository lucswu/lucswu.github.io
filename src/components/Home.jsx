import React, { Component } from "react";
import Title from "./Title";
import penn from "../img/penn.jpg";

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

        <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#333333" }}>
          <div style={{padding:'10em'}}>
          <h1 style={{ color: "white", fontSize: "4vw"}}>About Me</h1>
          <p style={{color: "white", fontSize: "2vw", fontFamily: 'EB Garamond'}}>
            Hi! I'm Lucas, a freshman at the University of Pennsylvania studying Finance and Computer Science in the M&T Program, with an aspiration to submatriculate in Mathematics.
            I'm interested in Quantitative Finance, particularly trading and software development, as well as C++ Development and Machine Learning.

          </p>
          </div>
          <img
          style={{
            width:"50vw",
            padding:"10em"

          }}
            src={penn}
            alt="penn"
          />
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
