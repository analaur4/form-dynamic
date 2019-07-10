import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css"
import Routes from "./routes";
import Header from "./components/template/header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
