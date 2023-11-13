import React from "react";
import { Link } from "react-router-dom";
import TextGroup from "../common/TextGroup";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen fixed top-0 box-border border-r bg-white shadow-sm z-30">
      <Link
        className="w-full h-[72px] flex items-center border-b px-5"
        to="/dashboard"
      >
        <TextGroup text="Risk Wise" type="h4-b" />
        <TextGroup text="." type="h4-b" color="text-color-error1" />
      </Link>
      <div className="relative overflow-hidden ">
        <div className="flex justify-between border-b px-5 py-3 hover:cursor-pointer">
          <div>
            <TextGroup
              text="Dashboard"
              type="p5-m"
              color="text-color-neutral3"
            />
          </div>
          <img src="/images/icons/chevron-down.svg" alt="" />
        </div>
        <div className="flex justify-between border-b px-5 py-3 hover:cursor-pointer">
          <div>
            <TextGroup
              text="Applications"
              type="p5-m"
              color="text-color-neutral3"
            />
          </div>
          <img src="/images/icons/chevron-down.svg" alt="" />
        </div>
        <div className="flex justify-between border-b px-5 py-3 hover:cursor-pointer">
          <div>
            <TextGroup
              text="Settings"
              type="p5-m"
              color="text-color-neutral3"
            />
          </div>
          <img src="/images/icons/chevron-down.svg" alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t shadow-sm">
        <div className="h-16 pr-3 pl-4">
          <div className="flex items-center mt-2">
            <div className="bg-color-success w-2 h-2 rounded-full mr-1"></div>
            <div>Online</div>
          </div>
          <div>
            <TextGroup
              text="Support expires in 61 days."
              type="ol-m"
              color="text-color-neutral3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
