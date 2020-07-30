import React from 'react';
import Child from './ChildComponent';
import FormValidations from './FormValidations';

export class TestComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'praveen',
            personalInfo: {
                firstName: '',
                lastName: ''
            }
        }
        this.update = this.update.bind(this);
    }
      update = function(val) {
         console.log('test');
       // this.props.testName('V3');
       /**
        * checkout - class component
         state
         this.state = {
             personalInfo:{
                 firstName:''
             },
             addressInfo: {

             }
         }
          personal ,add,credit,billing add,t&C - functional

        */
        this.setState({firstName: val});
         //this.state.firstName = 'V3'; diffing algorithm 
        // this.forceUpdate();
         console.log(this.state);
     }
     updatePersonalInfo(){
         
     }
    render(){
        console.log(this.props);
       // this.props.data = "UI";
        return(
            <div>
              Test component
              {this.props.data.firstName}
              <p>
                state value: {this.state.firstName}
              </p>
             <FormValidations/>
            </div>
        )
    }
}