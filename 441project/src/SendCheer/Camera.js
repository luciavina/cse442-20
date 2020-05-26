import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import {base} from '../base';

class Camera extends Component {

    constructor(){
      super();
      const storageRef = firebase.storage().ref();
      this.saveImage = this.saveImage.bind(this);
      this.state = {
            img_id: null,
            img_data: null,
            saveImage: false,
            images: { }
          }
    }
    
    // componentDidMount() {
    //    this.imgRef = base.syncState('images', {
    //      context:this,
    //      state:'images'
    //     });
    // }
    //
    // componentWillUnmount() {
    //   base.removeBinding(this.imgRef);
    // }

    setRef = (webcam) => {
        this.webcam = webcam;
      }
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      const imageSrcShort = this.webcam.getScreenshot().substring(23, imageSrc.length);
      console.log(imageSrc);
      console.log(imageSrcShort);
      this.setState({
        img_id: Date.now(),
        img_data: imageSrc
      });
    };
    
    saveImage = () => {
      const imgs = {...this.state.words};
      imgs[this.state.img_id] = 'apple';
      console.log('here');
      base.putString(message, 'base64').then(function(snapshot) {
        console.log('Uploaded a base64 string!');
      });
    }

    handleChange = (e) => {
      e.persist();
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  

    retake = (e) => {
      e.persist();
      this.setState({
        img_id: null,
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
        <div className="controlbutton">
          {this.state.img_data ?
              <div className="camerabutton">
                <p><img src={this.state.img_data} alt=""/></p>
                <span><Button onClick={this.retake}>Retake</Button></span>
                <span><Button onClick={this.saveImage}>Save</Button></span>
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
            <div className="camerabutton">
              <Button onClick={this.capture}>Capture Photo</Button>
            </div>
          </div>}

          <Link to={{
            pathname: '/SendCheer'
          }}>
            <br/>
            <Button>Back</Button>
          </Link>
        </div>
        );
  }
}

export default Camera;