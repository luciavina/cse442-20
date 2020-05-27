import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../MakePrediction/Prediction.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {netId: ''};
  }

  handleChange = event => {
    this.setState({netId: event.target.value});
  };

  render() {
    return (
      <div className="controlbutton">
        <div className="top">
          <h1>MAKE A PREDICTION</h1>
        </div>
        <div className="predInfo">
          <p>Make your predictions as to which athletic teams will win their weekly face off.</p>
          <p>Choose as many or as few teams as you want.</p>
          <p>Check back in next week to see how your predictions compare to the real results!</p>
          <h6><b>*Restricted to students and faculty of University of Washington</b></h6>
        </div>
        <br/>
        <h2>Enter Your UW NetID</h2>
        <br/>
        <form>
          <input type="text" name="netId" value={this.state.netId} onChange={this.handleChange}
            placeholder={"Enter netID"}/>
        </form>
        <Link to={{
          pathname: '/',
        }}>
          <br/>
          <Button>Back</Button>
        </Link>
        <Link to={{
          pathname: '/MakePrediction',
          state: {
            netId: this.state.netId
          }
        }}>
          <Button>Login</Button>
        </Link>
      </div>
    );
  }
}

export default Login;