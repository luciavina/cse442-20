import React, {Component} from "react";
import ConfirmMatches from "../components/ConfirmMatches";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import week1data from "../data/Week1Results.json";
import week2data from "../data/Week2Results.json";
import week3data from "../data/Week2Results.json";

export default class WeekResults extends Component {
  constructor(props) {
    super(props);
    this.state.week1 = week1data.matches;
    this.state.week2 = week2data.matches;
    this.state.week3 = week3data.matches;
  }

  state = {
    week1: [],
    week2: [],
    week3: []
  }

  render() {
    const url = window.location.href;
    return (
        <div className="controlbutton">
          <h1>Results</h1>
          {url === "http://localhost:3000/Results/WeekOneResults"
          ? <ConfirmMatches matches={this.state.week1}/>
          : url === "http://localhost:3000/Results/WeekTwoResults"
          ? <ConfirmMatches matches={this.state.week2}/>
          : <ConfirmMatches matches={this.state.week3}/>}

          <Link to={{
            pathname: '/Results'
          }}>
            <br/>
            <Button>Back</Button>
          </Link>
        </div>

    );
  }
}