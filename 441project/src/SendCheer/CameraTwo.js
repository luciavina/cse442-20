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
    retake = () => {
        this.setState({
            img_data: null
        })
    }
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
                            <CameraTwo2 img_data={this.state.img_data} img_id={this.state.img_id}/>
                            <Button onClick={this.retake}>Back</Button>
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
                            <Link to={{pathname: '/SendCheer'}}>
                                <br/>
                                <Button>Back</Button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default CameraTwo;