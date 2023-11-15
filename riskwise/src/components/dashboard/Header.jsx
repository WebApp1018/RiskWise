import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Search from "./Search";
import TextGroup from "../common/TextGroup";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={classnames(
        "h-[72px] fixed top-0 right-0 border-b bg-white flex items-center justify-between px-5 shadow-sm z-20",
        { "left-60": showSidebar, "left-0": !showSidebar }
      )}
    >
      <div className="flex justify-center">
        <div
          className="flex items-center justify-center mr-5 hover:cursor-pointer"
          onClick={() => {
            showSidebar ? setShowSidebar(false) : setShowSidebar(true);
          }}
        >
          <img src="/images/icons/menu-2.svg" alt="" />
        </div>
        <Search />
      </div>
      <div className="flex justify-center">
        <div className="relative mr-3">
          <button
            className="relative mt-[5px]"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-notification"
          >
            <small className="absolute t-[-2px] -right-1 min-w-[14px] h-[14px] px-[3px] flex items-center rounded-[100%] bg-color-error text-white text-[9px] shadow-sm">
              323
            </small>
            <img src="/images/icons/bell.svg" alt="" />
          </button>
          <div
            id="dropdown-notification"
            className="hidden absolute w-[340px] border rounded-md shadow-md mt-[10px] z-40 bg-white"
          >
            <div className="h-12 border-b flex items-center px-4">
              <TextGroup
                text="Notifications"
                type="p3-m"
                color="text-color-neutral5"
              />
            </div>
            <div className="p-2">
              <div className="rounded bg-white">
                <div className="px-3 py-2 hover:bg-color-neutral1 hover:cursor-pointer">
                  <span className="bg-color-primary text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    Budges
                  </span>
                  <div className="leading-[15px] mt-1">
                    <TextGroup
                      text="NLorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et."
                      type="ol-m"
                      color="text-color-neutral3"
                    />
                  </div>
                  <div>
                    <TextGroup
                      text="Aug 20 08:55am"
                      type="st-m"
                      color="text-color-neutral3"
                    />
                  </div>
                </div>
                <div className="px-3 py-2 hover:bg-color-neutral1 hover:cursor-pointer">
                  <span className="bg-color-warning text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    Budges
                  </span>
                  <div className="leading-[15px] mt-1">
                    <TextGroup
                      text="NLorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et."
                      type="ol-m"
                      color="text-color-neutral3"
                    />
                  </div>
                  <div>
                    <TextGroup
                      text="Aug 20 08:55am"
                      type="st-m"
                      color="text-color-neutral3"
                    />
                  </div>
                </div>
                <div className="px-3 py-2 hover:bg-color-neutral1 hover:cursor-pointer">
                  <span className="bg-color-error text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                    Budges
                  </span>
                  <div className="leading-[15px] mt-1">
                    <TextGroup
                      text="NLorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et."
                      type="ol-m"
                      color="text-color-neutral3"
                    />
                  </div>
                  <div>
                    <TextGroup
                      text="Aug 20 08:55am"
                      type="st-m"
                      color="text-color-neutral3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ml-3">
          <button
            type="button"
            className="relative hover:cursor-pointer"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <img
              className="w-10 h-10 rounded-full"
              src="/images/avatars/user-01.png"
              alt=""
            />
            <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
          </button>
          <div
            className="z-50 hidden w-[230px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
            id="dropdown-user"
          >
            <div className="px-4 py-3">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/images/avatars/user-01.png"
                  alt=""
                />
                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <TextGroup
                  text="Neil Sims"
                  type="p4-s"
                  color="text-color-neutral4"
                />
              </div>
              <div>
                <TextGroup
                  text="Vice President Enterprise Risk"
                  type="ol-r"
                  color="text-color-neutral3"
                />
              </div>
            </div>
            <div className="py-1">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Earnings
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
