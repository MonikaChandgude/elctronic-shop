import React from "react";

export default function ProductDescription({ cards }) {
  return (
    <div>
      <div className="px-3">
        <h3 className="font-bold text-start ">{cards.title}</h3>
        <div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-start">vsp</p>
              <h3 className="text-2xl text-start"> {cards.price_after} </h3>
            </div>

            <h6 className="text-center pl-4">
              <p className="text-center">mrp</p>
              <span className="text-gray-400 line-through">
                {cards.price_before}
              </span>
            </h6>
          </div>

          <p className="text-start text-green-500 text-xl font-semibold">
            Save 12%
          </p>
          <p className="text-start">Inclusive of all taxes</p>
          <p className="text-start text-lg">
            Standard EMI starting from ₹1,308/month{" "}
          </p>
        </div>
        <div className="pl-2  my-5 p-2">
          <p className="text-start font-bold">Heighlghts</p>
          <ul className="text-justify px-4">
            <li style={{ listStyleType: "circle" }}>
              1.5 Ton Capacity (Suitable for Areas upto 180 Sq Ft) 3 Star Energy
            </li>
            <li style={{ listStyleType: "circle" }}>
              Rating with Inverter Technology Convertible 5 in 1 Cooling -
            </li>
            <li style={{ listStyleType: "circle" }}>
              Adjust Cooling Capacity as per your needs 100% Copper Condenser -
            </li>
            <li style={{ listStyleType: "circle" }}>
              Helps in Faster Cooling Self-Cleaning Function - Prevents the
            </li>
            <li style={{ listStyleType: "circle" }}>
              Growth of Airborne bacteria High Ambient Cooling - Operations at
            </li>
            <li style={{ listStyleType: "circle" }}>
              High Ambient Temperature upto 54 ° C Anti Rust (Anti-Corrosion)
              coating on Indoor Unit for Increased Durability ECO Mode - Reduces
            </li>
            <li style={{ listStyleType: "circle" }}>
              Energy Consumption Anti Viral Filter - Protecting against harmful
              germs Stabilizer Free Operation* - Protect AC from Voltage
              Fluctuation (145V to 280V) Dry Mode - Efficiently Reduce Humidity
            </li>
            <li style={{ listStyleType: "circle" }}>
              Level Turbo Cool - Enhances Cooling Performance by Rapidly
              increasing Airflow R-32 Refrigerant - Reduces Environmental Impact
              Sleep Mode - Optimises Comfort During Nighttime by Gradually
            </li>
            <li style={{ listStyleType: "circle" }}>
              Adjusting Temperatures 1 Year Warranty on Entire Product, 5 Years
              Warranty on PCB, 10 Years Warranty on Compressor Get 2 Free On
              -Demand Services
            </li>
          </ul>
        </div>
        <div className="lg:justify-start lg:pl-2 mt-7 flex flex-row items-center justify-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
            {/* <BiShoppingBag className="mx-2" /> */}
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            {/* <AiOutlineHeart className="mx-2" /> */}
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
