import React, { useEffect, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import {
  MdOutlineMenu,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { navMenus } from "./data";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cartLength } = useCart();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userCredentials = localStorage.getItem("user");
    if (userCredentials) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    alert("You have been logged out.");
    navigate("/");
  };

  const navMenuss = (
    <>
      {navMenus?.map((menu, i) => {
        return menu?.submenu ? (
          <li
            key={i}
            className="text-[16px] font-medium text-[#270A05]"
            style={{
              fontFamily: "value_sans_promedium",
            }}>
            <details>
              <summary>{menu?.menu_name}</summary>
              <ul className="p-2 z-10">
                {menu?.submenu?.map((menu2, i) => {
                  return (
                    <li key={i}>
                      <Link to={menu2?.link} className="text-nowrap">
                        {menu2?.menu_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        ) : (
          <li
            className="text-[16px] font-medium text-[#270A05]"
            style={{
              fontFamily: "value_sans_promedium",
            }}>
            <Link to={menu?.link}>{menu?.menu_name}</Link>
          </li>
        );
      })}
    </>
  );

  return (
    <div className="border-0 border-b border-[#101113] border-opacity-10 pt-[7px] lg:pt-[20px] pb-[7px] lg:pb-[35px]">
      <div className="navbar bg-base-100 w-[390px] lg:w-[1366px] mx-auto ">
        <div className="navbar-start relative">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden flex justify-normal items-center gap-3">
              <MdOutlineMenu className="text-xl mt-3" />{" "}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-[4px] w-52">
              {navMenuss}
              <div className="flex flex-col justify-normal items-center gap-[px]">
                <div className="flex justify-start items-center gap-[3px] relative">
                  <input type="text" className="border rounded-[4px] py-1" />
                  <MdOutlineSearch className="text-[#270A05] text-[22px] absolute top-1 right-2" />
                </div>

                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle mr-auto pl-10">
                  <div className="indicator">
                    <p className="px-3">Wishlist</p>
                    <GoHeart className="text-[#270A05] text-[18px]" />{" "}
                    <span className="badge badge-sm indicator-item bg-[#270A05] text-white">
                      8
                    </span>
                  </div>
                </div>

                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle mr-auto pl-2.5 mt-[-12px]">
                  <div className="indicator">
                    <p className="px-3">Cart</p>
                    <MdOutlineShoppingCart className="text-[#270A05] text-[18px]" />
                    <span className="badge badge-sm indicator-item bg-[#270A05] text-white">
                      {cartLength}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-normal items-center gap-2 pl-2">
                <div className="w-[26px] h-[26px] bg-[#270A05] flex justify-center items-center rounded-full">
                  <AiOutlineUser className="text-white text-[18px]" />
                </div>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="text-[16px] font-medium text-[#270A05]">
                    Logout
                  </button>
                ) : (
                  <p
                    className="text-[16px] font-medium text-[#270A05]"
                    style={{
                      fontFamily: "value_sans_promedium",
                    }}>
                    Sign in
                  </p>
                )}
              </div>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navMenuss}
          </ul>{" "}
          <img src={logo} alt="" width={120} className="lg:hidden" />
        </div>
        <div className="navbar-center">
          <img src={logo} alt="" className="lg:flex hidden" />
        </div>
        <div className="lg:flex hidden navbar-end gap-x-[101px]">
          <div className="flex justify-normal items-center gap-[30px]">
            <div
              className="drawer drawer-end"
              style={{
                fontFamily: "value_sans_promedium",
              }}>
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <MdOutlineSearch className="text-[#270A05] text-[22px] cursor-pointer" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  <label className="text-[17px] py-2 font-medium">
                    Search by menu or product name:
                  </label>
                  <input
                    type="text"
                    className="border py-1 px-1"
                    placeholder="Search ..."
                  />
                </ul>
              </div>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <div className="indicator">
                <GoHeart className="text-[#270A05] text-[18px]" />{" "}
                <span className="badge badge-sm indicator-item bg-[#270A05] text-white">
                  8
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <div className="indicator">
                <MdOutlineShoppingCart className="text-[#270A05] text-[18px]" />
                <span className="badge badge-sm indicator-item bg-[#270A05] text-white">
                  {cartLength}
                </span>
              </div>
            </div>
          </div>
          {isLoggedIn ? (
            <Link
              to={"/login"}
              className="flex justify-normal items-center gap-2 cursor-pointer rounded-full px-3 border border-[#86371C] py-0.5">
              <IoLogOutOutline className="text-[#86371C] text-[18px]" />

              <p
                className="text-[16px] font-medium text-[#86371C]"
                style={{
                  fontFamily: "value_sans_promedium",
                }}>
                Log out
              </p>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="flex justify-normal items-center gap-[15px] cursor-pointer group hover:bg-[#270A05] rounded-full px-3">
              <div className="w-[30px] h-[30px] bg-[#270A05] flex justify-center items-center rounded-full">
                <AiOutlineUser className="text-white text-[18px]" />
              </div>
              <p
                className="text-[16px] font-medium text-[#270A05] group-hover:text-white"
                style={{
                  fontFamily: "value_sans_promedium",
                }}>
                Sign in
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
