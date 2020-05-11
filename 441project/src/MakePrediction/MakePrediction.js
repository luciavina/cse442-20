import React, {Component} from "react";
import Matches from "../components/Matches";

export class MakePrediction extends Component {
  state= {
    matches: [
      {
        id: 0,
        teams: [
          {
            name: 'team A',
            selected: false
          },
          {
            name: 'team B',
            selected: false
          }
        ]
      },
      {
        id:1,
        teams: [
          {
            name: 'teamAA',
            selected: false
          },
          {
            name: 'teamBB', 
            selected: false
          }
        ]
      }
    ]
  }
  
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
        <Matches matches={this.state.matches} recordPrediction={this.recordPrediction}/>
      </div>


    );
  }
}

export default MakePrediction;