import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import home from "../Home.PNG";

export default class CheerSent extends Component {
    render(){
        return(
            <div>
                <div className="home">
                    <Link to={{
                        pathname: '/'
                    }}>
                        <Button><img src={home} alt="Home" /></Button>
                    </Link>
                </div>
                <div className="top">
                    <h1>Send a Cheer</h1>
                </div>
              <br/>
              <div className="teams">
                <h1>Your cheer was sent to your teams</h1>
              </div>
                <h4>Your cheer will be displayed on the external screens!</h4>
              <div className="sent">
                <img src="https://i.pinimg.com/originals/b5/0a/a2/b50aa2af9e269b0c520d383cad0e3aae.gif" alt="Go Huskies!" height="400"/>
              </div>
              <div className="controlbutton">
                <Link to={{
                  pathname: '/',
                }}>
                  <br/><br/>
                  <Button>Done</Button>
                </Link>
              </div>
            </div>
        )
    }
}