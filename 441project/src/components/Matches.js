import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchItem from "./MatchItem";

class Matches extends Component {

    render() {
        return this.props.matches.map((match) => (
            <MatchItem key={match.id} match={match} recordPrediction={this.props.recordPrediction}/>
            ));
    }
}

Matches.propTypes = {
    matches: PropTypes.array.isRequired,
    //recordPrediction: PropTypes.func.isRequired
}

export default Matches;