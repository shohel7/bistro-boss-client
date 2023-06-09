import React from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* main content start here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart />
              My Cart
              <span className="badge badge-secondary">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars />
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShoppingBag />
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
