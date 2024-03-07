import React from "react";
import {
  MdOutlineMenu,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navMenus = (
    <>
      <li
        className="text-[16px] font-medium text-[#270A05]"
        style={{
          fontFamily: "value_sans_promedium",
        }}>
        <a>Home</a>
      </li>
      <li
        className="text-[16px] font-medium text-[#270A05]"
        style={{
          fontFamily: "value_sans_promedium",
        }}>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li
        className="text-[16px] font-medium text-[#270A05]"
        style={{
          fontFamily: "value_sans_promedium",
        }}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li
        className="text-[16px] font-medium text-[#270A05]"
        style={{
          fontFamily: "value_sans_promedium",
        }}>
        <a>Contact Us</a>
      </li>
    </>
  );
  return (
    <div className="border-0 border-b border-[#aeaeaf] py-[35px]">
      <div className="navbar bg-base-100 w-[1366px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdOutlineMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navMenus}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navMenus}
          </ul>
        </div>
        <div className="navbar-center">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-end gap-x-[101px]">
          <div className="flex justify-normal items-center gap-[30px]">
            <MdOutlineSearch className="text-[#270A05] text-[18px]" />

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
                  8
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-normal items-center gap-[15px] cursor-pointer">
            <div className="w-[30px] h-[30px] bg-[#270A05] flex justify-center items-center rounded-full">
              <AiOutlineUser className="text-white text-[18px]" />
            </div>
            <p
              className="text-[16px] font-medium text-[#270A05]"
              style={{
                fontFamily: "value_sans_promedium",
              }}>
              Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
