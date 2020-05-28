import React, {Component} from 'react';
import history from './../history';
import {button} from 'react';
import Container from 'react-bootstrap/Container'
import "./Home.css"
import logo from './DawgPack.png'

export default class Home extends Component {
  render () {
    return (
          <div className="screen">
            <div className="info">
              <button onClick={() => history.push('/Login')}>?</button>
            </div>
            <div className="logo">
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
                <h2>Week 4 - Which team in each face off can do the most pushups in <u>1 minute</u></h2><br/>
                <br/>
                <div className="leader">
                <h2><b>Top 5 Leaderboard</b></h2>
                <p>1. M. Baseball</p>
                <p>2. W. Golf</p>
                <p>3. W. Soccer</p>
                <p>4. M. Basketball</p>
                <p>5. M. Rowing</p>
                </div>
                <br/>
              </div>
          </div>
    );
  }
}
