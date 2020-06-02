import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Weeks from "../components/Weeks";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import data from "../data/Weeks.json";
import home from "../Home.PNG";

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
          <div className="home">
            <Link to={{
              pathname: '/'
            }}>
              <Button><img src={home} alt="Home" /></Button>
            </Link>
          </div>
          <div className="top">
            <h1>VIEW RESULTS</h1>
          </div>
          <br/>
          <h3>Weekly Results</h3>
          <p>Week 4 results available Monday @ 8am</p>
            <Weeks weeks={this.state.weeks}/>
        </div>

    );
  }
}