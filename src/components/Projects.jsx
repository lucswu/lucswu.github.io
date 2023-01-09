import React, { Component } from "react";
import website from "../img/website.png";
import tetris from "../img/tetris.png";
import minesweeper from "../img/minesweeper.png";
import candycrush from "../img/candycrush.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            height: "10vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "4vw" }}>Projects</h1>
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
            src={website}
            alt="website"
          />

          <div style={{ padding: "5em" }}>
            <h1 style={{ color: "black", fontSize: "4vw" }}>
              <a
                href={"https://github.com/lucswu/lucswu.github.io"}
                without
                rel="noopener noreferrer"
                target="_blank"
              >
                Revamped Website
              </a>
            </h1>
            <p
              style={{
                color: "black",
                fontSize: "2vw",
              }}
            >
              Over the course of two breaks, I revamped my website, using the
              React framework to produce a much more visually appealing and
              interactive personal website, using React Router to handle
              multi-page functionality and using tools such as react-spring and
              react-typist to animate elements on the main page.
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
              <a
                href={"https://github.com/davidzhangsan/CandyCrush"}
                without
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                C++ Terminal Candy Crush
              </a>
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "2vw",
                fontFamily: "EB Garamond",
              }}
            >
              For the final project of CIS 1900 (C++ Programming),{" "}
              <a
                href={"https://github.com/davidzhangsan"}
                without
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                David Zhang
              </a>{" "}
              and I recreated the game Candy Crush within the computer terminal
              using C++. We included much of the game logic from the original
              Candy Crush game, allowing users to swap candies to create rows of
              three to destroy them, or to swap combos of four or more to create
              special candies that clear multiple surrounding squares at once.
              We also implemented a save and load function that allows users to
              save their game state and reload it at a later time.
            </p>
          </div>
          <img
            style={{
              width: "50vw",
              padding: "5em",
            }}
            src={candycrush}
            alt="candycrush"
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
              <a
                href={"https://github.com/lucswu/1200-hw09"}
                without
                rel="noopener noreferrer"
                target="_blank"
              >
                Java Swing Tetris
              </a>
            </h1>
            <p
              style={{
                color: "black",
                fontSize: "2vw",
              }}
            >
              I built a recreation of modern tetris in Java Swing as part of my
              CIS 1200 final project. This game includes levels with different
              speeds, multiple ways to earn score, pause and play functionality,
              the ability to save and reload, and an instructions panel for new
              players. Try to beat my high score of 505,064!
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
              <a
                href={
                  "https://github.com/CIS1900/midterm-project-22fa-leo-lucas"
                }
                without
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "white" }}
              >
                C++ Terminal Minesweeper
              </a>
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "2vw",
                fontFamily: "EB Garamond",
              }}
            >
              I built the classic minesweeper game within a computer terminal,
              fully with C++. The instructor provided the random mine
              functionality, and building of that, I created a minesweeper game
              that allowed users to create boards of varying sizes and
              minecounts, and even allowed them to flag bombs and use the
              auto-reveal (chording) features. As a minesweeper enthusiast
              myself (Google Minesweeper Medium 26 second record), I had fun
              implementing these features and was able to put them to good use.
            </p>
          </div>
          <img
            style={{
              width: "50vw",
              padding: "5em",
            }}
            src={minesweeper}
            alt="minesweeper"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
