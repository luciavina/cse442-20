import React, { Component } from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import "./MatchItem.css"

class MatchItem extends Component {

    render() {
        const {id, teams} = this.props.match;
        const conf = this.props.conf; //boolean true if at Confrim page. 
        //let defVal = 'none';
        if (conf) {
            //defVal = teams[0].selected ? 0 : 1;
        }


        return (
            <div>
                <ToggleButtonGroup type='radio' name='options' defaultValue='none' id="group">
                    <ToggleButton
                        disabled={conf}
                        value={0} 
                        onChange={this.props.recordPrediction.bind(this, id, 0)}
                        className="predictbtn">
                        {teams[0].name} 
                    </ToggleButton>
                    vs.
                    <ToggleButton 
                        disabled={conf}
                        value={1} 
                        onChange={this.props.recordPrediction.bind(this, id, 1)}
                        className="predictbtn">
                        {teams[1].name} 
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        );
    }
}

export default MatchItem;

MatchItem.propTypes = {
    match: PropTypes.object.isRequired,
}
