import React from 'react'
import './App.css';
import NaviBar from './components/Navibar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NaviBar />
    </Router>
  );
}

export default App;