import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import Weeks from "../components/Weeks";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";

export class Results extends Component {
  state = {
    weeks: [
      {
        id: 1,
        challenge: 'Max Push-Ups in 1 Minute Challenge',
        complete: true,
      },
      {
        id: 2,
        challenge: '100m Sprints Challenge',
        complete: true
      },
      {
        id: 3,
        challenge: 'Dance-Off Challenge',
        complete: true,
      },
      {
        id: 4,
        challenge: '10 Minute Abs Challenge',
        complete: false
      },
      {
        id: 5,
        challenge: 'Deadlift Challege',
        complete: false
      },
      {
        id: 6,
        challenge: 'Longest Throw Challenge',
        complete: false
      },
      {
        id: 7,
        challenge: 'Trick Shots Challenge',
        complete: false
      },
      {
        id: 8,
        challenge: 'Soccer Juggling Challenge',
        complete: false
      },
      {
        id: 9,
        challenge: 'Swim Challenge',
        complete: false
      },
      {
        id: 10,
        challenge: 'Burpees Challenge',
        complete: false
      },
    ]
  }

  render() {
    return (
        <div>
          <h1>Results</h1>
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

export default Results;