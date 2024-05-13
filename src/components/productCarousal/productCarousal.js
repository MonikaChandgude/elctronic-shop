import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from "react-grid-carousel";
import cards from "../../db";

import ProductCrousel from "./carouselCard";
import ProductCategory from "../ProductCategory/ProductCategory";

const ProductCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (card) => {
    navigate("/product", { state: { card_s: card } });
  };

  const filteredProducts = selectedCategory
    ? cards.filter((product) => product.category === selectedCategory)
    : cards;

  return (
    <div className="mt-5">
      <h3>Products</h3>
      <ProductCategory
        setSelectedCategory={setSelectedCategory}
        filteredProducts={filteredProducts}
        cards={cards}
      />

      <div className="sm:hidden w-full">
        <Carousel cols={1} showDots loop>
          {filteredProducts.map((card, id) => (
            <Carousel.Item key={id}>
              <div onClick={() => handleItemClick(card)}>
                <ProductCrousel card={card} key={id} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="hidden sm:block w-full">
        <Carousel cols={4} showDots loop>
          {filteredProducts.map((card, id) => (
            <Carousel.Item key={id}>
              <div onClick={() => handleItemClick(card)}>
                <ProductCrousel card={card} key={id} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* <div>
        <Carousel cols={4} showDots loop>
          {filteredProducts.map((card, id) => (
            <Carousel.Item key={id}>
              <div onClick={() => handleItemClick(card)}>
                <ProductCrousel card={card} key={id} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div> */}
    </div>
  );
};

export default ProductCard;
