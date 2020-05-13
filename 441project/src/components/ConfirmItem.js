import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import "./ConfirmItem.css"

class ConfirmItem extends Component {
  render() {
    const {teams} = this.props.match;
    //let defVal = 'none';

    return (
      <div>
        <div className="border">
          <div className={teams[0].selected ? 'select' : 'unselect'}>
              <p>{teams[0].name}</p>
              <p>{teams[0].selected}</p>
          </div>

          if (teams[1].selected) {
            <div className="select">
              <p>{teams[1].name}</p>
            </div>
          } else {
            <div className="unselect">
              <p>{teams[1].name}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ConfirmItem;

ConfirmItem.propTypes = {
  match: PropTypes.object.isRequired,
  //recordPrediction: PropTypes.func.isRequired
}
