import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";

class SendCheer extends Component {
  render() {
    return (
        <div>
          <h1>Send a Cheer</h1>
          <br/>
          <h2> Who are you rooting for?</h2>
          <br/>
          <h2>Take a photo or record a video to cheer them on! </h2>
          <br/>
          <h2> Your cheer will be sent to their team dashboard and you can choose to have your cheer displayed here on the Dawgpack Showdown display.</h2>
          <br/>
          <div className="controlbutton">
          <Link to={{
            pathname: '/'
          }}>
            <br/>
            <Button>Back</Button>
          </Link>
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