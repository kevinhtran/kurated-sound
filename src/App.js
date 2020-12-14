import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import SignUp from './components/Session_Forms/SignUp';
import Layout from './components/Layout';
import NaviBar from './components/Navibar/Navibar';
import Jumbo from './components/Home/Jumbo';
import Footer from './components/Footer/Footer';
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