import React, { Component } from "react";
import penn from "../img/penn.jpg";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            ...SectionStyle,
            height: "90vh",
            backgroundColor: "white",
          }}
        >
          <div style={{ padding: "10em" }}>
            <h1 style={{ fontSize: "4vw" }}>About Me</h1>
            <p
              style={{
                fontSize: "2vw",
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
              width: "50vw",
              padding: "10em",
            }}
            src={penn}
            alt="penn"
          />
        </div>

        <div style={{ ...SectionStyle, height: "10vh" }}>
          <h1 style={{ fontSize: "4vw" }}>Coursework</h1>
        </div>

        <div
          style={{
            ...SectionStyle,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h2 style={{ fontSize: "3vw" }}>Spring 2023</h2>
          <p style={{ fontSize: "2vw" }}>
            - CIS 1210 — Programming Languages and Techniques II
            <br />
            - CIS 1910 — Using and Understanding Unix and Linux
            <br />
            - CIS 2620 — Automata, Computability, and Complexity
            <br />
            - CIS 5200 — Machine Learning
            <br />
            - ESE 3010 — Engineering Probability
            <br />
            - MKTG 1010 — Introduction to Marketing
            <br />- BEPP 2500 — Managerial Economics
          </p>
        </div>

        <div
          style={{
            ...SectionStyle,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h2 style={{ fontSize: "3vw" }}> Fall 2022</h2>
          <p style={{ fontSize: "2vw" }}>
            - CIS 1200 — Programming Languages and Techniques I
            <br />
            - CIS 1600 — Mathematical Foundations of Computer Science
            <br />
            - CIS 1900 — C++ Programming
            <br />
            - MATH 2400 — Calculus, Part III
            <br />
            - WRIT 0880 — Writing Seminar, Love's Labor: The Invention of Dating
            <br />- OIDD 2340 — M&T First Year Seminar
            <br /> - WH 1010 — Business and You: Exploring Business Pathways and
            Developing Your Potential
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
