import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './TestComponent';

function App() {
  let name = "praveen";
  const test = (val)=>{
    name = val;
  }
  const obj = {
    firstName: 'praveen',
    lastName:  'kumar'
  }
  return (
    <div className="App">
       <TestComponent data={obj} test={test}/>
      <p>
      parent component value: {name}
      </p>
      <div>
      praveen
      </div>
    </div>
  );
}

export default App;
