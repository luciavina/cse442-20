import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MakePrediction from "./MakePrediction/MakePrediction";
import SendCheer from "./SendCheer/SendCheer";
import Results from "./Results/Results";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/MakePrediction" component={MakePrediction} />
            <Route path="/SendCheer" component={SendCheer} />
            <Route path="/Results" component={Results} />
        </BrowserRouter>
    )
  }
}
