import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Works from "./components/Works";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Landing from "./components/Landing";

import "./style.scss";

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
