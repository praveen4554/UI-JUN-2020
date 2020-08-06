import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './TestComponent';
import FuncComponent from './FuncComponent';
function App() {
  const [name, setName] = useState('');
     const testName = (val)=>{
    // obj.firstName = val;
    setName(val);
  }
  const obj = {
    firstName: 'praveen',
    lastName:  'kumar'
  }
  return (
    <div className="App">
     
      <p>
      parent component value: {name}
      </p>
      <div>
      praveen
      </div>
     <TestComponent data={obj} name={name} test={testName}/>
    </div>
  );
}

export default App;
