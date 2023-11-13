import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <div className="h-[72px] fixed top-0 left-60 right-0 border-b bg-white flex items-center justify-between px-5 shadow-sm z-20">
      <div className="flex justify-center">
        <div className="flex items-center justify-center mr-5 hover:cursor-pointer">
          <img src="/images/icons/align-justify.svg" alt=""></img>
        </div>
        <Search />
      </div>
      <div className="flex justify-center">
        <div className="relative mr-3">
          <div className="relative mt-[5px] hover:cursor-pointer">
            <small className="absolute t-[-2px] -right-1 min-w-[14px] h-[14px] px-[3px] flex items-center rounded-[100%] bg-color-error text-white text-[9px] shadow-sm">
              323
            </small>
            <img src="/images/icons/bell.svg" alt="" />
          </div>
          <div></div>
        </div>
        <div className="relative ml-3">
          <div className="relative hover:cursor-pointer">
            <img
              className="w-[34px]"
              src="/images/avatars/user-01.png"
              alt=""
            />
            <div className=" bg-color-success absolute bottom-0 right-[5px] w-[6px] h-[6px] rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
