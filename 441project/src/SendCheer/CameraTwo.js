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
            seconds: 3,
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

    countDown = () => {
        this.myInterval = setInterval(() => {
            const {seconds} = this.state;

            if (seconds > 1) {
                this.setState(({seconds}) => ({seconds: seconds - 1}))
            } else {
                this.capture();
                clearInterval(this.myInterval);
                this.setState({seconds: 3})
            }
        }, 1000)
    }

    render() {
        const { seconds } = this.state
        const videoConstraints = {
            width: 880,
            height: 495,
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
                            <div className="outer"><Button onClick={this.retake}><h4>x</h4></Button></div>
                            <CameraTwo2 img_data={this.state.img_data} img_id={this.state.img_id}/>
                        </div>
                        :
                        <div>
                            <Webcam
                                audio={false}
                                height={495}
                                ref={this.setRef}
                                screenshotFormat="image/jpeg"
                                width={880}
                                videoConstraints={videoConstraints}
                            />
                            <div className="cam">
                                <Button onClick={this.countDown}>{this.state.seconds}</Button>
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