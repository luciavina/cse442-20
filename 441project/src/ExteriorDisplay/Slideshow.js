import React, { Component } from "react";

export default class Slideshow extends Component {
  render() {
    return (
        <div>
          <img src={this.props.imageURL} alt={"Uploaded Image"} height="1500" width="2500"/>
        </div>
    );
  }
}