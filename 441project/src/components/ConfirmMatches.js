import React, { Component } from "react";
import PropTypes from "prop-types";
import ConfirmItem from "./ConfirmItem";

export default class ConfirmMatches extends Component {
  render() {
    return this.props.matches.map((match) => (
      <ConfirmItem
        match={match}
        conf={this.props.conf}
      />
    ));
  }
}

ConfirmMatches.propTypes = {
  matches: PropTypes.array.isRequired,
}