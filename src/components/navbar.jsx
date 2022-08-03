import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Stack from "@mui/material/Stack";

class NavBar extends Component {
  render() {
    return (
      <Stack
        spacing={20}
        direction="row"
        justifyContent="center"
        alignItem="center"
        backgroundColor="black"
        height="10vh"
      >
        <Button color="primary">
          <h1>Home</h1>
        </Button>
        <Button color="primary">
          <h1>About</h1>
        </Button>
        <Button color="primary">
          <h1>Resume</h1>
        </Button>
        <Button color="primary">
          <h1>Projects</h1>
        </Button>
        <Button color="primary">
          <h1>Blog</h1>
        </Button>
      </Stack>
    );
  }
}

export default NavBar;
