import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Stack
              spacing={20}
              direction="row"
              justifyContent="center"
              alignItem="center"
              backgroundColor="black"
              height="10vh"
            >
              <Link to="/">
                <Button color="primary">
                  <h1>Home</h1>
                </Button>
              </Link>
              <Link to="/about">
                <Button color="primary">
                  <h1>About</h1>
                </Button>
              </Link>
              <Link to="/resume">
                <Button color="primary">
                  <h1>Resume</h1>
                </Button>
              </Link>
              <Link to="/projects">
                <Button color="primary">
                  <h1>Project</h1>
                </Button>
              </Link>
              <Link to="/blog">
                <Button color="primary">
                  <h1>Blog</h1>
                </Button>
              </Link>
            </Stack>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
            <div
              style={{
                height: "10vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Footer />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
