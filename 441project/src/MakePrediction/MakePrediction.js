import React, {Component} from "react";
import Matches from "../components/Matches";
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import "./Prediction.css"

export class MakePrediction extends Component {
  state= {
    netId: '',
    matches: [
      {
        id: 0,
        teams: [
          {
            name: 'M. Baseball',
            selected: false
          },
          {
            name: 'M. Basketball',
            selected: false
          }
        ]
      },
      {
        id:1,
        teams: [
          {
            name: 'M. Cross Country',
            selected: false
          },
          {
            name: 'M. Football', 
            selected: false
          }
        ]
      },
      {
        id:2,
        teams: [
          {
            name: 'M. Golf',
            selected: false
          },
          {
            name: 'M. Rowing',
            selected: false
          }
        ]
      },
      {
        id:3,
        teams: [
          {
            name: 'M. Soccer',
            selected: false
          },
          {
            name: 'M. Tennis',
            selected: false
          }
        ]
      },
      {
        id:4,
        teams: [
          {
            name: 'M. Track & Field',
            selected: false
          },
          {
            name: 'W. Basketball',
            selected: false
          }
        ]
      },
      {
        id:5,
        teams: [
          {
            name: 'W. Beach Volleyball',
            selected: false
          },
          {
            name: 'W. Cross Country',
            selected: false
          }
        ]
      },
      {
        id:6,
        teams: [
          {
            name: 'W. Golf',
            selected: false
          },
          {
            name: 'W. Gymnastics',
            selected: false
          }
        ]
      },
      {
        id:7,
        teams: [
          {
            name: 'W. Rowing',
            selected: false
          },
          {
            name: 'W. Soccer',
            selected: false
          }
        ]
      },
      {
        id:8,
        teams: [
          {
            name: 'W. Softball',
            selected: false
          },
          {
            name: 'W. Tennis',
            selected: false
          }
        ]
      },
      {
        id:9,
        teams: [
          {
            name: 'W. Track & Field',
            selected: false
          },
          {
            name: 'W. Volleyball',
            selected: false
          }
        ]
      }
    ],
    isConfirmation: false
  }
  componentDidMount() {
    const { netId } = this.props.location.state;
    this.setState({
      netId: netId
    });
  }
  //set state to match users selection by switching boolean values of 'selected'
  //fot the teams with this match id 
  recordPrediction = (id, choice) => {
    this.setState({
      matches: this.state.matches.map(matches => {
        if(matches.id===id){
          matches.teams[(choice===1) ? 1 : 0 ].selected = true; // if/else '?' = if and ':' = else
          matches.teams[(choice===1)  ? 0 : 1].selected = false;
        }
        return matches;
      })
    });
    console.log(this.state.matches);
    console.log(this.state.netId);
  };
  
  render() {
    return (
      <div>
        <h1>Make a Prediction</h1>
        <br/>
        <h2> Week 4: most push-ups in 1 minute</h2>
        <br/>
        <h4>Tap to select winning teams</h4>
        <Matches matches={this.state.matches} conf={this.state.isConfirmation} recordPrediction={this.recordPrediction}/>
        <div className="controlbutton">
          <Link to={{
            pathname: '/Login',
          }}>
            <br/>
            <Button>Back</Button>
          </Link>
          <Link to={{
            pathname: '/MakePrediction/Confirm',
            state: {
              matches: this.state.matches,
              netId: this.state.netId
            }
          }}>
            <Button>Next</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MakePrediction;