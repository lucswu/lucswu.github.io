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
      >
        <Button color="primary">Home</Button>
        <Button color="primary">About</Button>
        <Button color="primary">Resume</Button>
        <Button color="primary">Projects</Button>
        <Button color="primary">Blog</Button>
      </Stack>
    );
  }
}

export default NavBar;
