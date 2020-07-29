import React from 'react';
import Child from './ChildComponent';

export class TestComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'praveen'
        }
        this.update = this.update.bind(this);
    }
      update = function(val) {
         console.log('test');
        // this.props.test('V3');
        this.setState({firstName: val});
         //this.state.firstName = 'V3'; diffing algorithm 
        // this.forceUpdate();
         console.log(this.state);
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
              <Child updateCall={this.update}/>
            </div>
        )
    }
}