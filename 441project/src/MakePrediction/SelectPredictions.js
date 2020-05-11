import React, {Component} from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import 'bootstrap/dist/css/bootstrap.css';

export class SelectPredictions extends Component {

    recordPrediction = (id, choice) => {
        this.setState({
            matches: this.state.matches.map(matches => {
                if(matches.id===id){
                    matches.teams[choice].selected = true;
                    matches.teams[choice%1].selected = false;
                }
                return matches;
            })
        });
    };
    render() {
        return (
            <div>
                <h1>Make a Prediction</h1>
                <div>
                    <ToggleButtonGroup type="radio" defaultValue='none' name='options'>
                        <ToggleButton value={0} onChange={this.recordPrediction.bind(this, this.state.matches[0].id, 0)}>{this.state.matches[0].teams[0].name}</ToggleButton>
                        <ToggleButton value={1} onChange={this.recordPrediction.bind(this, this.state.matches[0].id, 1)}>{this.state.matches[0].teams[1].name}</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <br/>
                <div>
                    <button>{this.state.matches[1].teams[0].name}</button>
                    <button>{this.state.matches[1].teams[1].name}</button>
                </div>
            </div>


        );
    }
}

export default MakePrediction;