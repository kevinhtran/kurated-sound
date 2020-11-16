import React from 'react'
import './App.css';
import NaviBar from './components/Navibar';
import { BrowserRouter as Router} from 'react-router-dom';
import HeroJumbotron from './components/HeroJumbotron';
import Carousel  from './components/Slideshow';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <HeroJumbotron />
        <Carousel />
      </Router>
    </>
  );
}

export default App;