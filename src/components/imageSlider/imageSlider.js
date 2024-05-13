import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageSlider.css'; // Import your CSS file for custom styles/animations

const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: false, // Hide navigation arrows
    };
  
    return (
      <div className="animated-slider">
        <Slider {...settings}>
          <div>
            <img className='img-fluid' src="https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg" alt="Slide 1" />
          </div>
          <div>
            <img className='img-fluid' src="https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg" alt="Slide 2" />
          </div>
          <div>
            <img className='img-fluid' src="https://img.freepik.com/free-vector/realistic-cyber-monday-twitter-header_23-2149816807.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default ImageSlider;
  