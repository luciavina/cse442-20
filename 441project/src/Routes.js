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
import history from './history'
import CameraTwo from "./SendCheer/CameraTwo";
import CameraTwo2 from "./SendCheer/CameraTwo2";
import CheerSent from "./SendCheer/CheerSent"
import Info from "./Home/Info";
import ExteriorDisplay from "./ExteriorDisplay/ExteriorDisplay";

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/Info" exact component={Info} />
            <Route path="/Login"exact component={Login} />
            <Route path="/MakePrediction" exact component={MakePrediction} />
            <Route path="/MakePrediction/Sent" exact component={EmailSent}/>
            <Route path="/SendCheer" exact component={SendCheer} />
            <Route path="/SendCheer/Camera" exact component={CameraTwo} />
            <Route path="/SendCheer/Edit" exact component={CameraTwo2} />
            <Route path="/Results" exact component={Results} />
            <Route path="/Results/WeekOneResults" exact component = {WeekResults}/>
            <Route path="/Results/WeekTwoResults" exact component = {WeekResults}/>
            <Route path="/Results/WeekThreeResults" exact component = {WeekResults}/>
            <Route path="/SendCheer/Sent" exact component = {CheerSent}/>
            <Route path="/ExteriorDisplay" exact component = {ExteriorDisplay}/>
        </BrowserRouter>
    )
  }
}
