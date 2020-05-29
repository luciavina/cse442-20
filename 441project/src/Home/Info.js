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
      <div>
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
      </div>
    );
  }
}
