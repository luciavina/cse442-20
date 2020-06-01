import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import home from "../Home.PNG";
import {Carousel} from "react-responsive-carousel";

export default class CheerSent extends Component {
  state  = {
    opt: true,
    teams: []
  }

  componentDidMount() {
    const { opt, teams } = this.props.location.state;
    this.setState({
      opt: opt,
      teams: teams
    });
  }

    render(){
      console.log(this.state.teams)
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
                  {this.state.teams.map((team) => (
                      <div className="teams">
                         <p> {team} </p>
                      </div>
                  ))}

              </div>
              {this.state.opt ?
                <h4>Your cheer <b>will</b> be displayed on the exterior screens!</h4>
              : <h4>Your cheer <b>will not</b> be displayed on the external screens!</h4>}

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