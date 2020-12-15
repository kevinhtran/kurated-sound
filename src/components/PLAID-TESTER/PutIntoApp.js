// Put this slice of snippet into App.js

import React from "react";
import Instructions from "./components/Instructions.js";
import Plaid from "./components/Plaid.js";
import { usePlaidLink } from 'react-plaid-link';
import {useEffect, useState} from 'react';
import axios from 'axios';

import "./styles.css";

export default function App() {
  const [token, setToken] = useState('');

  useEffect ( () => {
    fetchAPI();
  }, [])

  const fetchAPI = async () => {
    try {
      const response = await axios.get('https://d3l2g8b8ha.execute-api.us-west-1.amazonaws.com/pr22/financials/createlinktoken')

      setToken(response.data.token);
    } catch (error) {
      console.log(error)
    }
  }
  


  return (
    <div className={'container'}>
      <Instructions />
      <Plaid token={token} />
    </div>
  );
}
