import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdAssignmentInd } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showMenu = () => {
    setToggle(!toggle);
  };

  const hideMenu = () => {
    setToggle(false);
  };
  return (
    <>
      <div
        className="fixed w-full h-full duration-500 black-overlay "
        onClick={hideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="h-full bg-white w-[500px] "
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></div>
      </div>

      <header className="p-[15px] pl-8 shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="max-w-[100px]">
            <img src="Images/SwiggyLogo.png" className="w-full" alt="Logo" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black hover:text-orange-600 mr-2">
              Ratanada
            </span>
            Jodhpur , Rajasthan , India
            <SlArrowDown
              className="inline ml-1 font-bold text-orange-600"
              onClick={showMenu}
            />
          </div>
          <nav className="flex list-none ml-auto gap-7 text-[17px] font-semibold ">
            <li className="flex items-center gap-2 hover:text-orange-600">
              <IoSearchOutline /> Search
            </li>
            <li className="flex items-center gap-2 hover:text-orange-600">
              <BiSolidOffer />
              Offers<sup className="text-orange-600">New</sup>
            </li>
            <li className="flex items-center gap-2 hover:text-orange-600">
              <IoIosHelpCircleOutline />
              Help
            </li>
            <li className="flex items-center gap-2 hover:text-orange-600">
              <MdAssignmentInd />
              Sign in
            </li>
            <li className="flex items-center gap-2 hover:text-orange-600">
              <BsCartDash />
              Cart
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
