import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MakePrediction from "./MakePrediction/MakePrediction";
import SendCheer from "./SendCheer/SendCheer";
import Camera from "./SendCheer/Camera";
import Results from "./Results/Results";
import WeekResults from "./Results/WeekResults";
import Home from "./Home/Home";
import EmailSent from "./MakePrediction/EmailSent";
import Login from "./Login/Login"
import history from './history';
import ImageUpload from "./SendCheer/ImageUpload";

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/Login"exact component={Login} />
            <Route path="/MakePrediction" exact component={MakePrediction} />
            <Route path="/MakePrediction/Sent" exact component={EmailSent}/>
            <Route path="/SendCheer" exact component={SendCheer} />
            <Route path="/SendCheer/Camera" exact component={Camera} />
            <Route path="/Results" exact component={Results} />
            <Route path="/Results/WeekOneResults" exact component = {WeekResults}/>
            <Route path="/Results/WeekTwoResults" exact component = {WeekResults}/>
            <Route path="/Results/WeekThreeResults" exact component = {WeekResults}/>
            <Route path={'/ImageUploader'} exact component = {ImageUpload}/>
        </BrowserRouter>
    )
  }
}
