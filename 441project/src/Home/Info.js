import React, {Component} from 'react';
import history from './../history';
import {button} from 'react';
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import home from "../Home.PNG";

export default class Info extends Component {
  render () {
    return (
      <div className="infoPage">
        <div className="home">
          <Link to={{
            pathname: '/'
          }}>
            <Button><img src={home} alt="Home" /></Button>
          </Link>
        </div>
        <div className="top">
          <h1>WHAT IS DAWG PACK SHOWDOWN?</h1>
        </div>
        <div>
          <div className="infoHead">
            <br/>
            <p>Dawg Pack Showdown is a 10 week fitness based competition where UW athletic teams face off against one another to earn points and climb up the leaderboard!</p>
            <p>Your job is to support your favorite teams to do their best!</p>
          </div>
          <br/>
          <p><b>WHAT CAN YOU DO?</b></p>
          <div className="categories">
            <div className="boxes">
              <h3>Make your Predictions</h3>
              <p>Predict which teams will succeed in their face off challenge of the week!</p><p>These predictions will then be sent to your UW email for safe keeping.</p><p>Come back next week to compare your predictions with the results (in View Results).</p><p>Get all your friends involved! <h6>(Note: restricted to UW students/faculty only)</h6></p>
              <Link to={{
                pathname: '/Login'
              }}>
                <Button>START</Button>
              </Link>
            </div>
            <div className="boxes">
              <h3>Send a Cheer</h3>
              <p>Have a favorite team you want to support in the challenge?</p><p>Send them a fun photo of yourself (and friends) to boost their motivation!</p><p>Your cheer is then displayed along others on the external displays of the booth.</p><p>Go check out the awesome cheers by your fellow huskies!</p>
              <Link to={{
                pathname: '/SendCheer'
              }}>
                <Button>START</Button>
              </Link>
            </div>
            <div className="boxes">
              <h3>View Results</h3>
              <p>Want to know how your favorite teams are doing in their weekly challenges?</p><p>Check back every Monday at 8am to see updated the weekly challenge results.</p><p>Did you make your predictions last week? Check out who won!</p><p>Go see all the fun challenges that are coming up in the future!</p>
              <Link to={{
                pathname: '/Results'
              }}>
                <Button>START</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
