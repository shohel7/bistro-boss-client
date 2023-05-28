import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-24">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slider1} alt="category-image" />
          <h3 className="text-4xl uppercase text-center absolute -mt-20 left-16 text-white drop-shadow-lg shadow-black">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider2} alt="category-image" />
          <h3 className="text-4xl uppercase text-center absolute -mt-20 left-16 text-white drop-shadow-lg shadow-black">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider3} alt="category-image" />
          <h3 className="text-4xl uppercase text-center absolute -mt-20 left-16 text-white drop-shadow-lg shadow-black">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider4} alt="category-image" />
          <h3 className="text-4xl uppercase text-center absolute -mt-20 left-16 text-white drop-shadow-lg shadow-black">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider5} alt="category-image" />
          <h3 className="text-4xl uppercase text-center absolute -mt-20 left-16 text-white drop-shadow-lg shadow-black">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
