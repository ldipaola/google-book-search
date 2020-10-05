import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from './components/Hero';
import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';


function App() {

  return (
    <Router>
      <Nav />
      <Hero />
      <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
