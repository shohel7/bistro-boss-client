import React from "react";
// import img from "../../../assets/menu/salad-bg.jpg";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] bg-slate-100"
        src={image}
        alt="recipe-image"
      />
      <div>
        <h3 className="uppercase">{name} ----------------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
