import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import home from "../Home.PNG";

class SendCheer extends Component {
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
          <div className="top">
            <h1>Send a Cheer</h1>
          </div>
          <div className="cheerInfo">
          <div>
            <h1>Step 1:</h1>
            <h2>Take a fun and supportive photo by yourself or with friends!</h2>
          </div>
          <br/>
          <div>
            <h1>Step 2:</h1>
            <h2>Customize your cheer with fun, UW themed stickers.</h2>
          </div>
          <br/>
          <div>
            <h1>Step 3:</h1>
            <h2>Pick which teams to send your cheer to and support them in the challenge.</h2>
          </div>
          <br/>
          <div>
            <h1>Step 4:</h1>
            <h2>View your display on the outside screens of the booth!</h2>
          </div>
          </div>
          <div className="controlbutton">
          <Link to={{
            pathname: '/SendCheer/Camera'
          }}>
            <Button>Get Started</Button>
          </Link>
        </div>
        </div>


    );
  }
}

export default SendCheer;