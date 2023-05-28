import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <section className="my-20 relative">
      <img src={chefService} alt="chefService-image" />
      <span className="absolute top-3 left-3 right-3 md:top-20 md:left-40 md:w-9/12 text-center bg-white p-1 md:p-20 shadow-xl">
        <h3 className="text-2xl md:mb-3 uppercase">Bistro Boss</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </span>
    </section>
  );
};

export default ChefService;
