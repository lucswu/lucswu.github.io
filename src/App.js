import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/Navbar";
import MainPage from "./components/MainPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainPage />
      </React.Fragment>
    );
  }
}

export default App;
