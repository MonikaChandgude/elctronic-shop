const ProductCategory = (props) => {
  const { cards, setSelectedCategory } = props;

  return (
    <div className="w-full lg:w-full flex lg:flex-row  flex-wrap items-center justify-center  ">
      <div
        key={cards.id}
        className="lg:w-[14%] w-[25%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 mx-3"
        onClick={() => setSelectedCategory(null)}
      >
        <img
          src={cards[1].img[2].thumbnail}
          alt="product"
          className="w-full h-28 object-cover"
        />
        <div className="mt-2 mb-2 px-3">
          <div className="font-semibold">All</div>
        </div>
      </div>
      <div
        key={cards.id}
        className="lg:w-[14%] w-[25%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 mx-3"
        onClick={() => setSelectedCategory("AC")}
      >
        <img
          src={cards[0].img[1].thumbnail}
          alt="product"
          className="w-full h-28 object-cover"
        />
        <div className="mt-2 mb-2 px-3">
          <div className="font-semibold">Air Conditioner</div>
        </div>
      </div>
      <div
        key={cards.id}
        className="lg:w-[14%] w-[25%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 mx-3"
        onClick={() => setSelectedCategory("Phone")}
      >
        <img
          src={cards[1].img[1].thumbnail}
          alt="product"
          className="w-full h-28 object-cover"
        />
        <div className="mt-2 mb-2 px-3">
          <div className="font-semibold">Mobile</div>
        </div>
      </div>
      <div
        key={cards.id}
        className="lg:w-[14%] w-[25%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 mx-3"
        onClick={() => setSelectedCategory("TV")}
      >
        <img
          src={cards[6].img[1].thumbnail}
          alt="product"
          className="w-full h-28 object-cover"
        />
        <div className="mt-2 mb-2 px-3">
          <div className="font-semibold">TV</div>
        </div>
      </div>
      <div
        key={cards.id}
        className="lg:w-[14%] w-[25%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 mx-3"
        onClick={() => setSelectedCategory("Fridge")}
      >
        <img
          src={cards[7].img[1].thumbnail}
          alt="product"
          className="w-full h-28 object-cover"
        />
        <div className="mt-2 mb-2 px-3">
          <div className="font-semibold">Frigde</div>
        </div>
      </div>
      <div
        key={cards.id}
        className="lg:w-[14%] w-[25%] h-fit my-3 rounded-xl overflow-hidden border border-gray-200 mx-3"
        onClick={() => setSelectedCategory("Laptop")}
      >
        <img
          src={cards[3].img[1].thumbnail}
          alt="product"
          className="w-full h-28 object-cover"
        />
        <div className="mt-2 mb-2 px-3">
          <div className="font-semibold">Laptop</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
