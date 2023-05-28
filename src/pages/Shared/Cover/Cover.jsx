import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ img, title, height }) => {
  console.log(img);
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[660px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl py-20 px-12 bg-black bg-opacity-40">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              impedit distinctio sapiente soluta optio asperiores itaque fugiat
              iure excepturi et, dolor voluptatum facilis maiores
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
