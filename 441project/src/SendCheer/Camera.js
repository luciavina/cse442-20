import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";

class Camera extends Component {

  state= {
    createImageData: null,
    image_name:"",
    saveImage: false
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    console.log("hello");
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      imageData : imageSrc
    })
  };

  saveForm = () => {
    return (
        <div>
          <form onSubmit={this.handleSaveSubmit}>
              <p>
                <label>Image name: </label>
                <input type="text"
                  name="image_name"
                       value={this.state.image_name}
                       onChange={this.handleChange} />
                       <input type="submit" value="Save" />
              </p>
          </form>
        </div>
    )
  }

  handleSaveSubmit = (e) => {
    e.preventDefault();
    let imageObject = {
      image_name: this.state.image_name,
      job_id: this.props.job.id,
      image_data: this.state.imageData
    }
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onClickSave = (e) => {
    e.persist();
    this.setState((previousState) => {
      return {
        saveImage: !previousState.saveImage
      }
    });
  }

  onClickRetake = (e) => {
    e.persist();
    this.setState({
      imageData: null
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
          {this.state.imageData ?
              <div className="camerabutton">
                <p><img src={this.state.imageData} alt=""/></p>
                <span><Button onClick={this.onClickRetake}>Retake</Button></span>
                <span><Button onClick={this.onClickSave}>Save</Button></span>
                {this.state.saveImage ? this.saveForm() : null}
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