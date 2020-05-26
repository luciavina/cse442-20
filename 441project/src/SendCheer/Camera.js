import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import storage from '../base';

class Camera extends Component {

    constructor(props){
      super(props);
      // const storageRef = firebase.storage().ref();
      // this.saveImage = this.saveImage.bind(this);
      this.state = {
            img_id: 0,
            img_data: null,
            ulr: "",
            progress: 0,
            saveImage: false,
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

        const image = this.state.img_data.substring(23, this.state.img_data.length);
        const uploadTask = storage.ref(`images/${this.state.img_id}`).putString(image, 'base64');
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                storage
                    .ref("images")
                    .child(this.state.img_id.toString())
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url });
                    });
            }
        );
      // });
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