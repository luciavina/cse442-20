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
        complete: true
      },
      {
        id: 5,
        challenge: 'Deadlift Challege',
        complete: true
      },
      {
        id: 6,
        challenge: 'Longest Throw Challenge',
        complete: true
      },
      {
        id: 7,
        challenge: 'Trick Shots Challenge',
        complete: true
      },
      {
        id: 8,
        challenge: 'Soccer Juggling Challenge',
        complete: true
      },
      {
        id: 9,
        challenge: 'Swim Challenge',
        complete: true
      },
      {
        id: 10,
        challenge: 'Burpees Challenge',
        complete: true
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