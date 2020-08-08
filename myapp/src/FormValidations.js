import React from "react";
import { InputComponent } from './InputComponent';
import { connect } from 'react-redux';

class FormValidations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lasttName: "",
      location: "",
      firstNameError: false,
      lastNameError: false
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
        this.child2 = React.createRef();
  }
  componentDidMount(){
    this.child2.current.disabled = true;
  }
  handleChange(event) {
      const keyError = `${event.target.name}Error`
    this.setState({ [event.target.name]: event.target.value,
        [keyError]: false });
  }
  submit(event) {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    this.setState({
      firstNameError: firstName && firstName.length >= 6 ? false : true,
      lastNameError: lastName && lastName.length >= 6 ? false : true
    });
  }
  render() {
    return (
      <div>
      {this.props.userName}
      <div>
        <button onClick={()=>this.props.changeUser(this.state.firstName)}>changeUser</button>
      </div>
      <form>
        <input type="text" name="firstName" onChange={this.handleChange} />
        {this.state.firstNameError ? (
          <div>firstName shoulbe greater than or equl to 6</div>
        ) : (
          ""
        )}
        <br />
        <input type="text" name="lastName" onChange={this.handleChange} />
        {this.state.lastNameError ? (
          <div>lastName shoulbe greater than or equl to 6</div>
        ) : (
          ""
        )}
        <br />
        <input type="text" id="fName" ref={this.child2} name="lacoation" onChange={this.handleChange} />
        {this.state.lastNameError ? (
          <div>lastName shoulbe greater than or equl to 6</div>
        ) : (
          ""
        )}
        <br />
              <InputComponent ref={this.child2} placeholder="child1"/>
        <input type="submit" onClick={event => this.submit(event)} />
      </form>
      </div>
    );
  }
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

export default connect(mapStateToProps,mapDispatchToProps)(FormValidations);