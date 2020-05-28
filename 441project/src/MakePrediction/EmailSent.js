import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Prediction.css"
import home from "../Home.PNG";

export default class EmailSent extends Component {
  state  = {
    netId: '',
    isConfirmation: true
  }

  componentDidMount() {
    const { netId } = this.props.location.state;
    this.setState({
      netId: netId
    });
  }

  render() {
    return (
      <div>
      <div className="home">
        <Link to={{
          pathname: '/'
        }}>
          <Button><img src={home} alt="Home" /></Button>
        </Link>
      </div>
      <div className="controlbutton">
        <div className="top">
          <h1>MAKE YOUR PREDICTIONS</h1>
        </div>
        <br/>
        <h1>Email receipt has been sent to:</h1>
        <br/>
        <h2> {this.state.netId}@uw.edu</h2>
        <br/>
        <img src="https://i.pinimg.com/originals/b5/0a/a2/b50aa2af9e269b0c520d383cad0e3aae.gif" alt="Go Huskies!" height="400"/>
          <Link to={{
            pathname: '/',
          }}>
            <br/><br/>
            <Button>Done</Button>
          </Link>
        </div>
      </div>
    );
  }
}