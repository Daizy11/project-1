import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hamburger from 'hamburger-react'
import Slideover from "../utils/slide-overs";

export default function Navbar() {
  const [slide, setSlide] = useState(false);

  const handleClick = () => {
    setSlide(!slide);
  };
  return (
    <div className="ml-[1rem]">
      <div className="flex h-[3.5rem] w-screen top-0 pt-1  ">
        <div
          className="flex justify-start items-center w-full h-full gap-5"
          id="name"
        >
          <button type="button" onClick={handleClick} >
           <Hamburger toggled={slide} size={20}/>
          </button>
          {slide && <Slideover/>}
          <a href="/">
            <b>
              <i>
                <h4 className="">E-Commerce</h4>
              </i>
            </b>
          </a>
        </div>
        <div className="flex gap-2">
          <input
            style={{ backgroundColor: "#F0F0F0" }}
            className="text-black rounded-md w-[30rem] px-3 h-[2rem] mt-[0.8rem] flex justify-center items-center"
            placeholder="Search"
          />
          <button className=" rounded-lg h-[2rem] mt-[0.8rem] w-[3rem] flex justify-center items-center ">
            <BsSearch />
          </button>
        </div>

        <div class="flex justify-end items-center w-full  mr-[3rem] gap-4">
          <a href="/cart" className="mr-[1rem] w-[1rem] ">
            <AiOutlineShoppingCart />
          </a>
          <a className="border-white z-10" href="/login">
            Login
          </a>
          <a className="border-white" href="/logout">
            Logout
          </a>
        </div>
      </div>
      <hr className="mt-2  mr-[3rem]"  />
    </div>
  );
}
