import React, { Component } from "react";
import storage from '../base';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import Slideshow from "./Slideshow";

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
        <div>
          <Slideshow imageUrls={this.state.imageUrls}/>
        </div>
    );
  }
}