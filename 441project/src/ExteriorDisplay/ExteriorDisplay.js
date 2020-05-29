import React, { Component } from "react";
import storage from '../base';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


export default class ExteriorDisplay extends Component {
  constructor() {
    super();
    this.state = {
      image : ''
    }

    this.getImage();
  }

  getImage = () => {
    const storageRef = storage.ref();
    storageRef.child('images/').getDownloadURL().then((url) => {
      console.log(url);
    }).catch((error) => {
      console.log(error);
    });
  }

  render () {
    return (
        <div>
          <h1>Cheers</h1>
        </div>
    );
  }
}