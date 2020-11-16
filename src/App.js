import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NaviBar from './components/Navibar';
import HeroJumbotron from './components/HeroJumbotron';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;