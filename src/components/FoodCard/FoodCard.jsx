import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, name, image, price, recipe } = item;

  const handleAddToCard = (item) => {
    console.log(item);
    if (user && user.email) {
      const orderItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch from the database tanstacks cart items
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="w-full bg-gray-100">
        <figure className="relative">
          <img className="w-full h-72" src={image} alt="salad-image" />
          <p className="absolute top-6 right-6 bg-slate-900 px-5 py-1.5 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body flex items-center">
          <h2 className="card-title text-center font-semibold">{name}</h2>
          <p className="text-center">{recipe.slice(0, 70) + " ..."}</p>
          <div className="card-actions justify-center mt-4">
            <button
              onClick={() => handleAddToCard(item)}
              className="bg-gray-300 py-3 px-3 rounded-md text-yellow-600 hover:bg-gray-800 transition-all duration-200 ease-in-out border-b-2 border-yellow-600 font-semibold"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
