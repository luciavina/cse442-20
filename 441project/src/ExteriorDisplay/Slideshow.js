import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PropTypes from "prop-types";
import "shuffle-array";

export default class Slideshow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var shuffle = require('shuffle-array'),
        collection = this.props.imageUrls;

    if (this.props.imageUrls.length < 1) return  <div></div>

    return (
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={3500}>
              {shuffle(collection).map((image) => (
                <div>
                  <img src= {image} height='360' width='640'/>
                </div>
            ))}
        </Carousel>
    );
  }
}

Slideshow.propTypes = {
  imageUrls: PropTypes.array.isRequired
};

