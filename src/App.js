import "./App.css";
import React, { Component } from "react";
import FullPageScroll from "./components/FullPageScroll";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FullPageScroll />
        <br />
      </React.Fragment>
    );
  }
}

export default App;
