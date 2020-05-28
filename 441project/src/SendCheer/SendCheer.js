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
          <br/>
          <h2> Who are you rooting for?</h2>
          <br/>
          <h2>Take a photo or record a video to cheer them on! </h2>
          <br/>
          <h2> Your cheer will be sent to their team dashboard and you can choose to have your cheer displayed here on the Dawgpack Showdown display.</h2>
          <br/>
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