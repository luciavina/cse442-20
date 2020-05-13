import React, {Component} from "react";
import ConfirmMatches from "../components/ConfirmMatches";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export class WeekResults extends Component {

  state = {
    matches: [
      {
        id: 0,
        teams: [
          {
            name: 'M. Baseball',
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
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
            selected: true
          }
        ]
      }
    ],
  }

  render() {
    return (
        <div>
          <h1>Results</h1>
          <ConfirmMatches matches={this.state.matches}/>
          <Link to={{
            pathname: '/Results'
          }}>
            <br/>
            <Button>Back</Button>
          </Link>
        </div>

    );
  }
}

export default WeekResults;