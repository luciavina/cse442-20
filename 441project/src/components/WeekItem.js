import React, { Component } from "react";
import "./WeekItem.css"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "./WeekItem.css"

export default class WeekItem extends Component {
  render() {
    const isComplete = this.props.week.complete;  // Keeps track of whether the week has been completed in the challenge
    return (
        <div>
          {isComplete && this.props.week.id === 1
                ? <div className="weekbtn">
                    <Link to={{pathname: '/Results/WeekOneResults'}}>
                    <Button>Week 1: {this.props.week.challenge}</Button>
                     </Link>
                  </div>

              : isComplete && this.props.week.id === 2
                ? <div className="weekbtn">
                  <Link to={{pathname: '/Results/WeekTwoResults'}}>
                  <Button>Week 2: {this.props.week.challenge}</Button>
                  </Link>
                </div>

              : isComplete && this.props.week.id === 3
                ? <div className="weekbtn">
                  <Link to={{pathname: '/Results/WeekThreeResults'}}>
                    <Button>Week 3: {this.props.week.challenge}</Button>
                  </Link>
                </div>

              : <div className="inactive">
                    <Button>Week {this.props.week.id}: {this.props.week.challenge}</Button>
                 </div>
          }
        </div>
    );
  }
}