import React, {Component} from "react";
import Matches from "../components/Matches";
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import "./Prediction.css"
import data from "../data/Matches.json";
import home from "../Home.PNG";

export default class MakePrediction extends Component {

  // Gets data from json and uses it to set up matches
  constructor(props) {
    super(props);
    this.state.matches = data.matches;
  }

  state= {
    netId: '',
    matches: [],
    isConfirmation: false
  }
  componentDidMount() {
    const { netId } = this.props.location.state;
    this.setState({
      netId: netId
    });
  }

  //Set state to match users selection by switching boolean values of 'selected'
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

  // Sends email confirmation to the email corresponding with the current UW netID
  sendEmail(e) {
    const email = this.state.netId + "@uw.edu";
    console.log({email});
    window.emailjs.send('dawg_pack_showdown', 'test_mailing',
        {user_email : email}, 'user_vqodUUOyI7ku3p5VP4m8a')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  }
  
  render() {
    return (
      <div>
        <div className="home">
          <Link to={{
            pathname: '/'
          }}>
            <Button><img src={home} alt="Home" /></Button>
          </Link>
        </div>
        <div className="top">
          <h1>MAKE YOUR PREDICTIONS</h1>
        </div>
        <br/>
        <h2>Week 4</h2>
        <h3>Which teams do you think can do the most pushups in <u>1 minute</u>?</h3>
        <h4><b>Tap which teams you think will win!</b></h4>
        <Matches matches={this.state.matches} conf={this.state.isConfirmation} recordPrediction={this.recordPrediction}/>
        <div className="controlbutton">
          <Link to={{
            pathname: '/Login',
          }}>
            <br/>
            <Button>Back</Button>
          </Link>
          <Link to={{
            pathname: '/MakePrediction/Sent',
            state: {
              netId: this.state.netId
            }
          }}>
            <Button onClick = {() => {this.sendEmail()}}>Confirm and Email Receipt</Button>
          </Link>
        </div>
      </div>
    );
  }
}