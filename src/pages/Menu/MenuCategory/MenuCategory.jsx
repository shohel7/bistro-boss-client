import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, height }) => {
  console.log(items);
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} height={height}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${title}`}
          className="mb-5 bg-white py-3 px-3 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-gray-800 font-semibold"
        >
          ORDER YOUR FAVORITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
