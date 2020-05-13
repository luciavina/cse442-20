import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MakePrediction from "./MakePrediction/MakePrediction";
import SendCheer from "./SendCheer/SendCheer";
import Results from "./Results/Results";
import Home from "./Home/Home";
import ConfirmPrediction from './MakePrediction/ConfirmPrediction';
import EmailSent from "./MakePrediction/EmailSent";
import Login from "./Login/Login"
import history from './history';

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/Login"exact component={Login} />
            <Route path="/MakePrediction" exact component={MakePrediction} />
            <Route path="/MakePrediction/Confirm" exact component={ConfirmPrediction} />
            <Route path="/MakePrediction/Confirm/Sent" exact component={EmailSent}/>
            <Route path="/SendCheer" component={SendCheer} />
            <Route path="/Results" component={Results} />
        </BrowserRouter>
    )
  }
}
