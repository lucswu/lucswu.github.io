import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Res from "../Lucas_Wu_Resume.pdf";

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
            <h1 style={{ fontFamily: "EB Garamond", fontSize: "2vw" }}>Home</h1>
          </Button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond", fontSize: "2vw" }}>
              About
            </h1>
          </Button>
        </Link>
        <a
          href={Res}
          without
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button color="primary" label="Resume">
            <h1 style={{ fontFamily: "EB Garamond", fontSize: "2vw" }}>
              Resume
            </h1>
          </Button>
        </a>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond", fontSize: "2vw" }}>
              Projects
            </h1>
          </Button>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <Button color="primary">
            <h1 style={{ fontFamily: "EB Garamond", fontSize: "2vw" }}>Blog</h1>
          </Button>
        </Link>
      </Stack>
    );
  }
}

export default NavBar;
