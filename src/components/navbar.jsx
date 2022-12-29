import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Stack
        spacing="10vw"
        direction="row"
        justifyContent="center"
        alignItem="center"
        backgroundColor="white"
        height="10vh"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond" }}>Home</h1>
          </Button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond" }}>About</h1>
          </Button>
        </Link>
        <Link to="/resume" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond" }}>Resume</h1>
          </Button>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond" }}>Projects</h1>
          </Button>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond" }}>Blog</h1>
          </Button>
        </Link>
      </Stack>
    );
  }
}

export default NavBar;
