import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PropTypes from "prop-types";

export default class Slideshow extends Component {
  render() {
    return (
        <Carousel autoPlay={true} showArrows={false} showThumbs={false}>
          {this.props.imageUrls.map((image) => (
              <div>
                return <img src= {image} height='1000' width='1000'/>
              </div>
          ))}
        </Carousel>
    );
  }
}

Slideshow.propTypes = {
  imageUrls: PropTypes.array.isRequired
};

