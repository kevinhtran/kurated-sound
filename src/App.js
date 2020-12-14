import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, About, Services, Contact, SignUp, SessionForm, NaviBar, Jumbo, Footer} from './components/'
import Layout from './Layout'

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