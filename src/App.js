import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import SignUp from './SignUp';
import Layout from './components/Layout';
import NaviBar from './components/Navibar';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';
import EmailForm from './components/EmailForm';

const App = () => {
  return (
    <>
    <NaviBar />
    <Jumbo />
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </>
  );
}

export default App;