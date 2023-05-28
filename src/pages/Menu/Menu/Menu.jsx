import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
        height="py-14"
      ></MenuCategory>
      <MenuCategory items={pizzas} title="pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salads} title="salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soups} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
