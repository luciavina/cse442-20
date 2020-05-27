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
        <h1>Enter Your UW NetID</h1>
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