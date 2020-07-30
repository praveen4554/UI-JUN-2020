import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './TestComponent';
export default function FuncComponent() {
    let name="";
     const testName = (val)=>{
    name = val;
  }
  const obj = {
    firstName: 'praveen',
    lastName:  'kumar'
  }
    return(
        <TestComponent data={obj} test={testName}/>
    )
}