import React, {Component} from "react";
import ConfirmMatches from "../components/ConfirmMatches";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import home from "../Home.PNG"
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
        <div>
          <div className="home">
            <Link to={{
              pathname: '/'
            }}>
              <Button><img src={home} alt="Home" /></Button>
            </Link>
          </div>
          <div className="controlbutton"></div>
          <div className="top">
            <h1>RESULTS</h1>
          </div>
          <br/>
          {url === "http://localhost:3000/Results/WeekOneResults"
            ? <div>
              <h3>Week 1: Best team dance</h3>
                <ConfirmMatches matches={this.state.week1}/>
              </div>
          : url === "http://localhost:3000/Results/WeekTwoResults"
          ? <div>
                <h3>Week 2: Fastest 100m sprint</h3>
                <ConfirmMatches matches={this.state.week2}/>
            </div>
          : <div>
                <h3>Week 3: Best 10 minute abs workout</h3>
              <ConfirmMatches matches={this.state.week3}/>
              </div>
          }
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