import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import "./ConfirmItem.css"
import star from './WhiteStar.png'

export default class ConfirmItem extends Component {
  render() {
    const {teams} = this.props.match;
    return (
        <div className="group">
          <div id="select">
            {teams[0].selected ? <img src={star} alt="star"/> : ""}
            {teams[0].name}
          </div>
          <div className="result">
            <p>{teams[0].selected ? <div>win</div> : <div>lose</div>}</p>
          </div>
          <div className="middle"><p>VS.</p></div>
          <div className="result">
            <p>{teams[1].selected ? <div>win</div> : <div>lose</div>}</p>
          </div>
          <div id="select">
            {teams[1].name}
            {teams[1].selected ? <img src={star} alt="star"/> : ""}
          </div>
        </div>
    );
  }
}

ConfirmItem.propTypes = {
  match: PropTypes.object.isRequired
}
