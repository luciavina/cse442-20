import React, { Component } from "react";
import PropTypes from "prop-types";
import "./WeekItem.css"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class WeekItem extends Component {

  render() {
    const isComplete = this.props.week.complete;  // Keeps track of whether the week has been completed in the challenge
    return (
        <div>
          {isComplete
                ? <Link to={{pathname: '/Results/WeekResults'}}>
                  <Button>Week {this.props.week.id}: {this.props.week.challenge}</Button>
                  </Link>
                : <Button>Week {this.props.week.id}: {this.props.week.challenge}</Button>
          }
        </div>
    );
  }
}

WeekItem.propTypes = {
  id: PropTypes.array.isRequired,
}

export default WeekItem;