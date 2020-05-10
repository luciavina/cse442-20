import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MakePrediction from "./MakePrediction/MakePrediction";
import App from "./App";

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={App} />
            <Route path="/MakePrediction" component={MakePrediction} />
        </BrowserRouter>
    )
  }
}
