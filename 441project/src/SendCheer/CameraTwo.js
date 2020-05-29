import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import home from "../Home.PNG";
import CameraTwo2 from "./CameraTwo2"

class CameraTwo extends Component {

    constructor(props){
        super(props);
        this.state = {
            img_id: 0,
            img_data: null
        }
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        const imageSrcShort = this.webcam.getScreenshot().substring(23, imageSrc.length);
        this.setState({
            img_id: Date.now(),
            img_data: imageSrc
        });
    };
    
    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div>
                <div className="home">
                    <Link to={{
                        pathname: '/'
                    }}>
                        <Button><img src={home} alt="Home" /></Button>
                    </Link>
                </div>
                <div className="controlbutton">
                    <div className="top">
                        <h1>Send a Cheer</h1>
                    </div>
                    <br/>
                    {this.state.img_data ?
                    <div>
                        <img ref="photo" src={this.state.img_data} alt="" />
                    </div>
                    :
                    <div>
                        <Webcam
                            audio={false}
                            height={500}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={1000}
                            videoConstraints={videoConstraints}
                        />
                        <div className="cam">
                            <Button onClick={this.capture}> </Button>
                        </div>
                    </div>}
                    <Link to={{pathname: '/SendCheer'}}>
                        <br/>
                        <Button>Back</Button>
                    </Link>
                    {this.state.img_data ?
                        <Link to={{
                            pathname: "/SendCheer/Edit",
                            state: {
                                img_data: this.state.img_data,
                                img_id: this.state.img_id
                            }
                        }}>
                            <Button>Next</Button>
                        </Link>
                        :null
                    }

                </div>
            </div>
        );
    }
}

export default CameraTwo;