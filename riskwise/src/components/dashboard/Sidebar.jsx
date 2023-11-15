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
      {/* <div className="relative overflow-hidden ">
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
      </div> */}

      <div id="accordion-open" data-accordion="open" className="">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full px-5 py-3 text-gray-500 border-b hover:bg-gray-100 gap-3"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              <TextGroup
                text="Dashboard"
                type="p5-m"
                color="text-color-neutral3"
              />
            </span>
            <img src="/images/icons/chevron-down.svg" alt="" />
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          className="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div className="p-5">Dashboard</div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full px-5 py-3 text-gray-500 border-b hover:bg-gray-100 gap-3"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 me-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <TextGroup
                text="Application"
                type="p5-m"
                color="text-color-neutral3"
              />
            </span>
            <img src="/images/icons/chevron-down.svg" alt="" />
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          className="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200">
            Application
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t shadow-sm bg-white">
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
