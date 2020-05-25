import React, { Component } from "react";
import PropTypes from "prop-types";
import WeekItem from "./WeekItem";

export default class Weeks extends Component {
  render() {
    return this.props.weeks.map((week) => (
        <WeekItem week={week}/>
    ));
  }
}

Weeks.propTypes = {
  weeks: PropTypes.array.isRequired,
}