import React, { Component } from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";

class MatchItem extends Component {

    render() {
        console.log(this.props.match.id);
        return (
            <div>
                <ToggleButtonGroup type='radio' defaultValue='none' name='options'> 
                    <ToggleButton value={0} onChange={this.props.recordPrediction.bind(this, this.props.match.id, 0)}> {this.props.match.teams[0].name} </ToggleButton>
                    <ToggleButton value={1} onChange={this.props.recordPrediction.bind(this, this.props.match.id, 1)} > {this.props.match.teams[1].name} </ToggleButton>
                </ToggleButtonGroup>
            </div>
                
        );
    }
}

export default MatchItem;

MatchItem.propTypes = {
    match: PropTypes.object.isRequired,
    //recordPrediction: PropTypes.func.isRequired
}


/*            <div>
                <ToggleButtonGroup type="radio" defaultValue='none' name='options'>
                    <ToggleButton value={0} onChange={this.recordPrediction.bind(this, this.state.matches[0].id, 0)}>{this.state.matches[0].teams[0].name}</ToggleButton>
                   <ToggleButton value={1} onChange={this.recordPrediction.bind(this, this.state.matches[0].id, 1)}>{this.state.matches[0].teams[1].name}</ToggleButton>
                </ToggleButtonGroup>
            </div>*/