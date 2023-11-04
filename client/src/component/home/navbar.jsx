import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Slideover from "../utils/slide-overs";

export default function Navbar() {
  const [slide, setSlide] = useState(false);

  const handleClick = () => {
    setSlide(!slide);
  };
  return (
      <div className="flex bg-[#FFFF] z-20 fixed ml-[1rem] h-[3.5rem] w-full top-0 pt-1  ">
        <div
          className="flex justify-start items-center w-full h-full gap-5"
          id="name"
        >
          <button type="button" onClick={handleClick}>
            <Hamburger toggled={slide} size={20} />
          </button>
          {slide && <Slideover isTrue={slide} />}
          <a href="/">
            <b>
              <i>
                <h4 className="">E-Commerce</h4>
              </i>
            </b>
          </a>
        </div>
        <div className="flex justify-center items-center gap-1 mb-2">
          <input
            style={{ backgroundColor: "#F0F0F0" }}
            className="text-black rounded-xl w-[30rem] px-3 h-[2rem] mt-[0.8rem] flex justify-center items-center"
            placeholder="Search"
          />
          <button className=" h-[2.1rem] mt-[0.8rem] w-[2.3rem] flex justify-center items-center rounded-full bg-black ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[20px]">
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                fill="rgba(250,247,247,1)"
              ></path>
            </svg>
          </button>
        </div>

        <div class="flex flex-row justify-end items-center w-full  mr-[3rem] gap-4">
          <a href="/cart" className="mr-[0.8rem]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[18px]"
            >
              <path d="M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.00241H20.6603C21.2126 5.00241 21.6603 5.45012 21.6603 6.00241C21.6603 6.09973 21.6461 6.19653 21.6182 6.28975L19.2182 14.2898C19.0913 14.7127 18.7019 15.0024 18.2603 15.0024H6.00436V17.0024H17.0044V19.0024H5.00436C4.45207 19.0024 4.00436 18.5547 4.00436 18.0024V6.41662ZM6.00436 7.00241V13.0024H17.5163L19.3163 7.00241H6.00436ZM5.50436 23.0024C4.67593 23.0024 4.00436 22.3308 4.00436 21.5024C4.00436 20.674 4.67593 20.0024 5.50436 20.0024C6.33279 20.0024 7.00436 20.674 7.00436 21.5024C7.00436 22.3308 6.33279 23.0024 5.50436 23.0024ZM17.5044 23.0024C16.6759 23.0024 16.0044 22.3308 16.0044 21.5024C16.0044 20.674 16.6759 20.0024 17.5044 20.0024C18.3328 20.0024 19.0044 20.674 19.0044 21.5024C19.0044 22.3308 18.3328 23.0024 17.5044 23.0024Z"></path>
            </svg>
          </a>
          
          <a className="border-white z-10" href="/login">
            Login
          </a>
          <a className="border-white" href="/logout">
            Register
          </a>
        </div>
      </div>
  );
}
