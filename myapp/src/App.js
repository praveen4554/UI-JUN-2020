import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { TestComponent } from './TestComponent';
import FuncComponent from './FuncComponent';
import HooksComponent from './HooksComponent';
import FormValidations from './FormValidations';
import { connect } from 'react-redux';
function App(props) {
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
     Authorized user: {props.userName}
      <p>
      parent component value: {name}
      </p>
      <div>
      praveen
      </div>
      <FormValidations/>
      <HooksComponent/>
    </div>
  );
}

const mapStateToProps = (state) =>{
  console.log(state);
  return {
    userName: state.userName
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changeUser: (val) => dispatch({type:'changeUser', value:val})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
