import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import "./ConfirmItem.css"

export default class ConfirmItem extends Component {
  render() {
    const {teams} = this.props.match;
    return (
        <div className="group">
          <div id={teams[0].selected ? 'select' : 'unselect'}>
              <p>{teams[0].name}</p>
          </div>
          <div className="result"><p>VS.</p></div>
          <div id={teams[1].selected ? 'select' : 'unselect'}>
              <p>{teams[1].name}</p>
          </div>
        </div>
    );
  }
}

ConfirmItem.propTypes = {
  match: PropTypes.object.isRequired
}
