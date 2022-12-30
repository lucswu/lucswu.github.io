import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import penn from "../img/penn.jpg";
import tetris from "../img/tetris.png";
import plane from "../img/plane.jpg";

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

        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#333333",
          }}
        >
          <div style={{ padding: "5em" }}>
            <h1 style={{ color: "white", fontSize: "4vw" }}>
              <Link
                style={{ color: "white", fontFamily: "EB Garamond" }}
                to="/About"
              >
                About Me
              </Link>
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "2vw",
                fontFamily: "EB Garamond",
              }}
            >
              Hi! I'm Lucas, a freshman at the University of Pennsylvania
              studying Finance and Computer Science in the M&T Program, with an
              aspiration to submatriculate in Mathematics. I'm interested in
              Quantitative Finance, particularly trading and software
              development, as well as C++ Development and Machine Learning.
            </p>
          </div>
          <img
            style={{
              width: "100vw",
              padding: "5em",
            }}
            src={penn}
            alt="penn"
          />
        </div>

        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <img
            style={{
              width: "50vw",
              padding: "5em",
            }}
            src={tetris}
            alt="tetris"
          />

          <div style={{ padding: "5em" }}>
            <h1 style={{ color: "black", fontSize: "4vw" }}>
              <Link
                style={{ color: "black", fontFamily: "EB Garamond" }}
                to="/projects"
              >
                Projects
              </Link>
            </h1>
            <p
              style={{
                color: "black",
                fontSize: "2vw",
              }}
            >
              Check out what I've been working on recently, whether for fun or
              as part of school assignments!
            </p>
          </div>
        </div>

        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#333333",
          }}
        >
          <div style={{ padding: "5em" }}>
            <h1 style={{ color: "white", fontSize: "4vw" }}>
              <Link
                style={{ color: "white", fontFamily: "EB Garamond" }}
                to="/Blog"
              >
                Blog
              </Link>
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "2vw",
                fontFamily: "EB Garamond",
              }}
            >
              Take a look at my daily life through my (extremely) sporadically
              updated blog. Whenever I find something interesting I'll post it
              there, and I hope you'll find it worth your while to read as well!
            </p>
          </div>
          <img
            style={{
              width: "50vw",
              padding: "5em",
            }}
            src={plane}
            alt="plane"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
