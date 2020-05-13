import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

class WeekItem extends Component {

  render() {
    return (
        <Link to={{
          pathname: '/Results/WeekResults'
        }}>
          <br/>
          <Button>Week {this.props.week.id}: {this.props.week.challenge}</Button>
        </Link>
    );
  }
}

WeekItem.propTypes = {
  id: PropTypes.array.isRequired,
}

export default WeekItem;