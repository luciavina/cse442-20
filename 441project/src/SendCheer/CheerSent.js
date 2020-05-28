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
                <h1>your cheer was sent</h1>
            </div>
        )
    }
}