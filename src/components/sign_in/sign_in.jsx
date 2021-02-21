import React, { Component } from "react";

import Form_Input from "../form_input/form_input";

import "./sign_in.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign_in">
        <h2 className="heading">I HAVE AN ACCOUNT</h2>
        <span>SIGN IN WITH YOUR EMAIL</span>
        <form onSubmit={this.handleSubmit}>
          <Form_Input
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <Form_Input
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
