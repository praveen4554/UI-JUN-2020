import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './TestComponent';
import FuncComponent from './FuncComponent';
function App() {
  let name = "praveen";
  // const testName = (val)=>{
  //   name = val;
  // }
  // const obj = {
  //   firstName: 'praveen',
  //   lastName:  'kumar'
  // }
  return (
    <div className="App">
     
      <p>
      parent component value: {name}
      </p>
      <div>
      praveen
      </div>
      <FuncComponent/>
    </div>
  );
}

export default App;
