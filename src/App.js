import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/mini/style.min.css";
import Home from "./Views/Home";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Blog from "./Views/Blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
