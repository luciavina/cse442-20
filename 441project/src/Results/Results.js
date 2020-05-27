import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import Weeks from "../components/Weeks";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import data from "../data/Weeks.json";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state.weeks = data.weeks;
  }
  state = {
    weeks:[]
  }

  render() {
    return (
        <div>
          <div className="top">
            <h1>Results</h1>
          </div>
          <br/>
          <h3>Weekly Results</h3>
          <div className="controlbutton">
            <Weeks weeks={this.state.weeks}/>
            <Link to={{
              pathname: '/'
            }}>
              <br/>
              <Button>Back</Button>
            </Link>
          </div>
        </div>

    );
  }
}