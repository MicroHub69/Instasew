import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer";
// import { Navbar, Input } from "./components";
import Input from "./components/Input";
import Card from "./components/Cards";
import Home from "./Views/Home";
import "./assets/mini/style.min.css";
import About from "./Views/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
