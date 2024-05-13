import "./product.css";

import { useLocation, useParams } from "react-router-dom";
//import Rater from "react-rater";
import ReactImageGallery from "react-image-gallery";
import ProductDescription from "../ProductDescription/ProductDescription";

const Product = (prope) => {
  let { card_s } = useParams();
  const location = useLocation();

  // console.log(location.state.card_s);
  console.log(location);
  const cards = card_s || (location.state && location.state.card_s) || [];
  // console.log(cards);

  return (
    <div>
      <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
        {/* image gallery */}
        <div className="container mx-auto px-4 ">
          <ReactImageGallery
            showNav={false}
            // disableSwipe={true}
            items={cards.img}
          />

          {/* /image gallery  */}
        </div>
        {/* description  */}
         <ProductDescription cards={cards}/>
       
      </section>
    </div>
  );
};

export default Product;
