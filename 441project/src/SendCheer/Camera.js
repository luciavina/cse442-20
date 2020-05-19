import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

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
        <div>
          {this.state.imageData ?
              <div>
                <p><img src={this.state.imageData} alt=""/></p>
                <span><button onClick={this.onClickRetake}>Retake</button></span>
                <span><button onClick={this.onClickSave}>Save</button></span>
                {this.state.saveImage ? this.saveForm() : null}
              </div>
              :
          <div>
            <Webcam
                audio={false}
                height={1000}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={1000}
                videoConstraints={videoConstraints}
            />
            <div>
              <button onClick={this.capture}>Capture Photo</button>
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