import React, {Component} from 'react';
import ConfirmMatches from "../components/ConfirmMatches";


export default class ConfirmPrediction extends Component {
    state  = {
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
        const { matches } = this.props.location.state;
        this.setState({
            matches: matches
        });
    }

    recordPrediction = () => {
        console.log('dont wanna do it')
    }
    
    render() {
        return (
            <div>
                <h1> Confirm </h1>
                <ConfirmMatches matches={this.state.matches}/>
            </div>
        );
    }
}