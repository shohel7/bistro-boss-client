import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/slide5.jpg";

const ChefRecommend = () => {
  return (
    <section className="mb-20">
      <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="w-96 bg-gray-100">
          <figure>
            <img className="w-full h-72" src={img} alt="salad-image" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="card-title text-center font-semibold">
              Caeser Salads
            </h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="bg-gray-300 py-3 px-3 rounded-md text-yellow-600 hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-yellow-600 font-semibold">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-gray-100">
          <figure>
            <img className="w-full h-72" src={img} alt="salad-image" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="card-title text-center font-semibold">
              Caeser Salads
            </h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="bg-gray-300 py-3 px-3 rounded-md text-yellow-600 hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-yellow-600 font-semibold">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-gray-100">
          <figure>
            <img className="w-full h-72" src={img} alt="salad-image" />
          </figure>
          <div className="card-body flex items-center">
            <h2 className="card-title text-center font-semibold">
              Caeser Salads
            </h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="bg-gray-300 py-3 px-3 rounded-md text-yellow-600 hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-yellow-600 font-semibold">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
