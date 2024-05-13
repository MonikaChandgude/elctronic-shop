import React from 'react';
import "../home/home.css"
import ImageSlider from '../../components/imageSlider/imageSlider';
import ProductCard from '../../components/productCarousal/productCarousal.js';
// import ViewProduct from "../../components/productCard/product/ViewProduct"

const Home = () => {
  return (
    <div className="home">
      {/* <ImageSlider /> */}
      <ProductCard/>
      
    </div>
  );
};

export default Home;
