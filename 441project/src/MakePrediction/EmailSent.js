import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Prediction.css"

export default class EmailSent extends Component {
  state  = {
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
    isConfirmation: true
  }
  componentDidMount() {
    const { matches, netId } = this.props.location.state;
    this.setState({
      matches: matches,
      netId: netId
    });
  }

  render() {
    return (
      <div className="controlbutton">
        <h1>Email receipt has been sent to:</h1>
        <br/>
        <h2> {this.state.netId}@uw.edu</h2>
        <br/>
        <img src="https://i.pinimg.com/originals/b5/0a/a2/b50aa2af9e269b0c520d383cad0e3aae.gif" alt="Go Huskies!" height="400"/>
          <Link to={{
            pathname: '/',
          }}>
            <br/><br/>
            <Button>Done</Button>
          </Link>
        </div>
    );
  }
}