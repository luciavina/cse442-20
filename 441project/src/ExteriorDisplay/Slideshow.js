import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PropTypes from "prop-types";
import "shuffle-array";

export default class Slideshow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0
    }

    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(this.changeImage, 1000);
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  changeImage () {
    this.setState(function ({ imageIndex }) {
      const nextImageIndex = ++imageIndex % this.props.imageUrls.length

      return { imageIndex: nextImageIndex }
    }, function () {
      this.timeout = setTimeout(
          this.changeImage,
          1000
      )
    })
  }

  render() {
    let shuffle = require('shuffle-array'),
        collection = this.props.imageUrls;

    if (this.props.imageUrls.length < 1) return  <div></div>

    return (
        <div>
          <img src= {shuffle(collection)[this.state.imageIndex]} height='360' width='640'/>
        </div>
    );
  }
}

Slideshow.propTypes = {
  imageUrls: PropTypes.array.isRequired
};

