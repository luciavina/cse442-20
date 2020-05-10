import React, {Component} from 'react';
import history from './../history';
import {button} from 'react';

export default class Home extends Component {
  render () {
    return (
        <div className="Home">
          <div className="container">
            <h1>Dawg Pack Showdown</h1>
            <form>
              <button onClick={() => history.push('/MakePrediction')}>Make a Prediction</button>
              <button onClick={() => history.push('/SendCheer')}>Send a Cheer</button>
              <button onClick={() => history.push('/Results')}>Results</button>
            </form>
          </div>
        </div>
    );
  }
}
