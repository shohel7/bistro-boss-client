import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"From Our Menu"}
        heading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button className="mt-7 bg-white py-3 px-3 rounded-md text-gray-800 hover:text-white hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-gray-800 font-semibold">
          VIEW FULL MENU
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
