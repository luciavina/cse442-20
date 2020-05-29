import React, {Component} from 'react';
import history from './../history';
import {button} from 'react';
import "./Home.css"
import logo from './DawgPack.png'
import leader from './Leaderboard.PNG'

export default class Home extends Component {
  render () {
    return (
          <div className="screen">
            <div className="logo">
              <div className="info">
                <form>
                <button onClick={() => history.push('/Info')}><div id="ques">?</div></button>
                </form>
              </div>
            <img src={logo} alt="Dawg Pack Showdown" />
            </div>
            <div className="nav">
              <form>
                <button onClick={() => history.push('/Login')}>Make Your Predictions</button>
                <br/>
                <button onClick={() => history.push('/SendCheer')}>Send a Cheer</button>
                <br/>
                <button onClick={() => history.push('/Results')}>View Results</button>
              </form>
            </div>
              <div className="container">
                <h2>Week 4 - Which teams can do the most pushups in <u>1 minute</u>?</h2><br/>
                <h2><b>Current Leaderboard</b></h2>
                  <img src={leader} alt="Leaderboard" />
                <br/>
              </div>
          </div>
    );
  }
}
