import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PropTypes from "prop-types";

export default class Slideshow extends Component {

  render() {
    if (this.props.imageUrls.length < 1) return  <div> Images not fetched! </div>

    return (
        <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} interval={3500}>
              {this.props.imageUrls.map((image) => (
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

