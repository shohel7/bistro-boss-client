import React from "react";
import "./Featured.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="mb-20 pt-8 bg-fixed featured-item text-white">
      <SectionTitle subHeading={"Check it Out"} heading={"Featured Items"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-black bg-opacity-40 text-white ">
        <div>
          <img src={featuredImg} alt="feature-image" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            earum unde quibusdam ullam! Exercitationem, maxime quibusdam itaque
            recusandae beatae quas. Ad minima molestias nesciunt explicabo totam
            rem aut atque illum ut, nemo repellat ipsa, rerum perspiciatis?
            Ipsam quo doloremque autem inventore perferendis laudantium aut
            officia natus eligendi, accusantium eaque qui!
          </p>
          <button className="mt-5 bg-transparent py-3 px-3 rounded-md text-white hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-white font-semibold">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
