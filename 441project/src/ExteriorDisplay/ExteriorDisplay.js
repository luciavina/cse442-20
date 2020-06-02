import React, { Component } from "react";
import storage from '../base';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import Slideshow from "./Slideshow";
import logo from "../stickers/Filter2.png"

export default class ExteriorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: []
    };
    this.getImages();
  }

  getImages = () => {
    const storageRef = storage.ref("images");

    storageRef.listAll().then((result) => {

      result.items.forEach((imageRef) => {

        imageRef.getDownloadURL().then((url) => {
          this.setState({imageUrls: this.state.imageUrls.concat(url)});
        })
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render () {
    return (
        <div className="displayCheer">
          <div className="cheerImg">
          <img src={logo} alt="logo" width='210'/>
          </div>
          <p><b>FAN CHEERS</b></p>
          <div className="slide">
            <Slideshow imageUrls={this.state.imageUrls}/>
          </div>
          <div className="slide">
            <Slideshow imageUrls={this.state.imageUrls}/>
          </div>
          <div className="slide">
            <Slideshow imageUrls={this.state.imageUrls}/>
          </div>
        </div>
    );
  }
}