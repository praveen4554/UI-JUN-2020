import React from 'react';
import Child from './ChildComponent';
import FormValidations from './FormValidations';
import { InputComponent } from './InputComponent';

export class TestComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'praveen',
            personalInfo: {
                firstName: 'V3',
                lastName: ''
            },
            userList: []
        }
        this.update = this.update.bind(this);
        this.textInput = React.createRef();
        this.child1 = React.createRef();
        this.child2 = React.createRef();
    }
    // componentWillMount(){
    //     console.log('will mount');
    // }
    componentDidMount(){
         console.log('Did Mount');
         console.log(this.textInput)
        // this.textInput.current.focus();
         //this.child1.current.focus();
         this.child2.current.value="child2";
      //   this.child2.current.disabled = true;
         this.textInput.current.disabled = true;
         this.textInput.current.value="praveen";
        this.setState({personalInfo:{
            firstName: 'Praveen'
        },userList:[{key:1,value:1},{key:11,value:11},{key:21,value:21},{key:31,value:31}]})
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDeriviedStateFromProps');
        console.log(props);
        return props
    }
    // componentWillReceiveProps(){
    //     console.log('Will Receive props');
    // }
    shouldComponentUpdate(){
        console.log(this.state.personalInfo);
        return true;
    }
    // componentWillUpdate(){
    //     console.log('will update');
    // }
    componentDidUpdate(){
        console.log('did update');

    }
    // getSnapshotBeforeUpdate(){
    //     console.log('snapshot before update');
    //         return null;
    // }
    compoenntWillUnmount(){
        console.log('clears the all memory');
    }
      update = function(val) {
         console.log('test');
       // this.props.testName('V3');
       /**
        * checkout - class component setState
          personal
          add
          biil
          cc
          tc
         state
         this.state = {
             personalInfo:{
                 firstName:''
             },
             addressInfo: {

             }
         }
          personal ,add,credit,billing add,t&C - functional
          parent - data - click button- setState - rerender - 
          Child - data - data will be displayed - will receiveProps
        */
        this.setState({firstName: val});
         //this.state.firstName = 'V3'; diffing algorithm 
        // this.forceUpdate();
         console.log(this.state);
     }
     updatePersonalInfo(){
         
     }
    render(){
        const list = this.state.userList.map((ele)=><tr key={ele.key}><td key={ele.key}>{ele.value}</td></tr>)
       // this.props.data = "UI";
        return(
            <div>
              Test component
              <table border="1">
              <thead>
              <tr>
              <th>Id</th>
              </tr>
              </thead>
              <tbody>
              {list}
              </tbody>
              </table>
              {this.props.data.firstName}
              <p>
                state value: {this.state.personalInfo.firstName}
              </p>
              <input type="text" ref={this.textInput}/>
              <InputComponent ref={this.child2} placeholder="child1"/>
              <FormValidations/>
              <button onClick={()=> {
              this.props.test('React')
        }}>sendData</button>
            </div>
        )
    }
}