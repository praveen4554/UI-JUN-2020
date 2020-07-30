import React from "react";

export default class FormValidations extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lasttName: "",
      location: "",
      firstNameError: false,
      lastNameError: false
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    console.log(this.state);
    return (
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
        <input type="text" name="lacoation" onChange={this.handleChange} />
        {this.state.lastNameError ? (
          <div>lastName shoulbe greater than or equl to 6</div>
        ) : (
          ""
        )}
        <br />
        <input type="submit" onClick={event => this.submit(event)} />
      </form>
    );
  }
}
