const ProductCrousel = (props) => {
  const { card } = props;

  return (
    <div className="product__card">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96  my-3  flex-col ">
        <p className="my-3 text-red-500 dark:text-gray-400"> {card.tag}</p>
        <div className="container  flex justify-center">
          {/* {firstElement.img.map((firstElement) => {
              return (
                <div
                  key={0}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                >
                  {x}
                </div>
              );
            })} */}
          <img
            className="p-6 h-44 "
            src={card.img[0].thumbnail}
            alt="product_image"
          />
        </div>
        {/* {console.log(card)} */}

        <div className="px-5 pb-5 container row">
          <h6 className="text-xl font-semibold  text-gray-800 dark:text-white line-clamp-2">
            {card.title}
          </h6>

          <div className=" items-center my-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {card.price_after}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCrousel;
