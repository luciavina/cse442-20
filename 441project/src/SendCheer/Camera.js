import React, { Component } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import "../MakePrediction/Prediction.css";
import storage from '../base';
import emoji from '../stickers/emoji.png';
import smileyface from '../stickers/smileyface.png';
import Resizer from 'react-image-file-resizer';
// import { StickerPicker } from 'react-native-stickers';
// import { styles, View, Text } from "react-native";



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
            img_canvas: null
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

    setCanvasRef = (canvas) => {
        this.canvas = canvas;
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
      const canvas = this.canvas;
      this.makePic(canvas);
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
    
    selectSticker = (e) => {
        this.setState({
            sticker_id: emoji
        });
    }
    
    placeSticker = (e) => {
        
    }
    makePic = (canvas) => {
        console.log("hello");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = this.state.img_data;
        console.log('fjdksljf')
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 1280, 720);
        };
    }

    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

    return (
        <div className="controlbutton">
          <div className="top">
            <h1>Send a Cheer</h1>
          </div>
          <br/>
          {this.state.img_data ?
              <div className="camerabutton">
                  <canvas ref={this.setCanvasRef} width={1280} height={720} />
                <p><img ref="photo" src={this.state.img_data} alt="" onClick={this.placeSticker}/></p>
                <span><Button onClick={this.retake}>Retake</Button></span>
                <span><Button onClick={this.saveImage}>Save</Button></span>
                  <span><Button onClick={this.selectSticker}><img src={emoji} alt="emoji"/></Button></span>
                  <img src={emoji} alt="emoji"/>
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