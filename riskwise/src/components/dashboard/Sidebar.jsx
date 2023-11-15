import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import TextGroup from "../common/TextGroup";

const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={classnames(
        "w-60 h-screen fixed top-0 left-0 box-border border-r bg-white shadow-sm z-40",
        { block: showSidebar, hidden: !showSidebar }
      )}
    >
      <Link
        className="w-full h-[72px] flex items-center border-b px-5"
        to="/dashboard"
      >
        <TextGroup text="Risk Wise" type="h4-b" />
        <TextGroup text="." type="h4-b" color="text-color-error1" />
      </Link>

      <div id="menu-accordion" data-accordion="open">
        <h2 id="dashboard-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full px-5 py-3 text-gray-500 gap-3"
            data-accordion-target="#dashboard-body-1"
            aria-expanded="true"
            aria-controls="dashboard-body-1"
          >
            <span className="flex items-center">
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
          id="dashboard-body-1"
          className="hidden mb-5"
          aria-labelledby="dashboard-heading-1"
        >
          <div className="px-5 py-2 flex items-center gap-2 hover:cursor-pointer">
            <img src="/images/icons/pie-chart.svg" alt="" />
            <TextGroup
              text="Welcome screen"
              type="p4-m"
              color="text-color-neutral3"
            />
          </div>
          <div className="px-5 py-2 flex items-center gap-2 hover:cursor-pointer">
            <img src="/images/icons/pie-chart.svg" alt="" />
            <TextGroup
              text="Risk Profile"
              type="p4-m"
              color="text-color-neutral3"
            />
          </div>
        </div>
        <h2 id="application-heading-2" className="border-t">
          <button
            type="button"
            className="flex items-center justify-between w-full px-5 py-3 text-gray-500 gap-3"
            data-accordion-target="#application-body-2"
            aria-expanded="false"
            aria-controls="application-body-2"
          >
            <span className="flex items-center">
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
          id="application-body-2"
          className="hidden"
          aria-labelledby="application-heading-2"
        >
          {/* submenu start */}
          <div
            id="submenu-accordion"
            data-accordion="open"
            className="border-gray-200"
          >
            <h2 id="risk-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full px-5 py-3 text-gray-500 gap-3"
                data-accordion-target="#risk-body-1"
                aria-expanded="true"
                aria-controls="risk-body-1"
              >
                <span className="flex items-center gap-2">
                  <img src="/images/icons/pie-chart.svg" alt="" />
                  <TextGroup
                    text="Risk Management"
                    type="p5-m"
                    color="text-color-neutral3"
                  />
                </span>
                <img src="/images/icons/chevron-right.svg" alt="" />
              </button>
            </h2>
            <div
              id="risk-body-1"
              className="hidden"
              aria-labelledby="risk-heading-1"
            >
              <div className="px-5 py-2 flex items-center gap-2 hover:cursor-pointer">
                <img src="/images/icons/minus.svg" alt="" />
                <TextGroup
                  text="Risk Dashboard"
                  type="p5-m"
                  color="text-color-neutral3"
                />
              </div>
              <div className="px-5 py-2 flex items-center gap-2 hover:cursor-pointer">
                <img src="/images/icons/minus.svg" alt="" />
                <TextGroup
                  text="All Risks"
                  type="p5-m"
                  color="text-color-neutral3"
                />
              </div>
            </div>
            <h2 id="interal-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full px-5 py-3 text-gray-500 gap-3"
                data-accordion-target="#interal-body-2"
                aria-expanded="false"
                aria-controls="interal-body-2"
              >
                <span className="flex items-center gap-2">
                  <img src="/images/icons/pie-chart.svg" alt="" />
                  <TextGroup
                    text="Internal controls"
                    type="p5-m"
                    color="text-color-neutral3"
                  />
                </span>
                <img src="/images/icons/chevron-right.svg" alt="" />
              </button>
            </h2>
            <div
              id="interal-body-2"
              className="hidden"
              aria-labelledby="interal-heading-2"
            >
              <div className="border-gray-200">
                <div className="px-5 py-2 flex items-center gap-2 hover:cursor-pointer">
                  <img src="/images/icons/minus.svg" alt="" />
                  <TextGroup
                    text="Control Dashboard"
                    type="p5-m"
                    color="text-color-neutral3"
                  />
                </div>
                <div className="px-5 py-2 flex items-center gap-2 hover:cursor-pointer">
                  <img src="/images/icons/minus.svg" alt="" />
                  <TextGroup
                    text="Control Category"
                    type="p5-m"
                    color="text-color-neutral3"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* submenu end */}
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
