import React from "react";
import { usePlaidLink } from "react-plaid-link";
import axios from 'axios';
import {useCallback, useState, useEffect} from 'react';

//metadata.accounts.map ( (obj) => setName(obj.name) setNumbers(obj.mask))
export default function Plaid(props) {
  const [dataArr, setDataArr] = useState([]);
  let {token} = props; 

  // console.log(token, 'this token')
  const onSuccess = useCallback((token, metadata) => {
    // send token to server

    setDataArr(metadata.accounts)
  }, []);
  
  const fillData = () => {
    
  }

  const config = {
    token: token,
    onSuccess,
    // ...
  };

  const { open, ready, error } = usePlaidLink(config);
 
  return (  
    <div>
      <button onClick={() => open()} disabled={!ready}>
        Open Plaid
      </button>

      {dataArr.map( (obj, i) => {
        return (
          <div key={i}>
            <div> {obj.name} </div>
            <div> {obj.mask} </div>
          </div>
        )
      })}
    </div>
  );
}
