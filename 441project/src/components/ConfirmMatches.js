import React, { Component } from "react";
import PropTypes from "prop-types";
import ConfirmItem from "./ConfirmItem";

class ConfirmMatches extends Component {

  render() {
    return this.props.matches.map((match) => (
      <ConfirmItem
        key={match.id}
        match={match}
        conf={this.props.conf}
        recordPrediction={this.props.recordPrediction}
      />
    ));
  }
}

ConfirmMatches.propTypes = {
  matches: PropTypes.array.isRequired,
}

export default ConfirmMatches;