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
              <button onClick={() => history.push('/Login')}>i</button>
            </div>
            <div className="logo">
            <img src={logo} alt="Dawg Pack Showdown" />
            </div>
            <div className="nav">
              <form>
                <button onClick={() => history.push('/Login')}>Make a Prediction</button>
                <br/>
                <button onClick={() => history.push('/SendCheer')}>Send a Cheer</button>
                <br/>
                <button onClick={() => history.push('/Results')}>View Results</button>
              </form>
            </div>
              <div className="container">
                <h2>Week 4 - Which team in each face off can do the most pushups in <u>1 minute</u></h2><br/>
                <br/>
              </div>
          </div>
    );
  }
}
