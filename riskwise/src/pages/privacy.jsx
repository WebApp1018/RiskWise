import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";

const Privacy = () => {
  return (
    <div className="flex min-h-screen">
      <div className="basis-1/4 relative">
        <img
          className="w-full h-full object-cover align-middle"
          src="/images/bg1.png"
          alt=""
        />
        <div className="text-white">
          <div className="absolute left-0 top-0 pl-4 3xl:pl-8 pr-4 mt-5 3xl:mt-8 mb-8">
            <div className="mb-5">
              <TextGroup text="Risk Wise" type="h3-b" />
              <TextGroup text="." type="h3-b" color="text-color-error1" />
            </div>
          </div>

          <div className="absolute pl-4 3xl:pl-8 pr-4 mt-5 3xl:mt-8 mb-8 left-0 bottom-0">
            <TextGroup
              text="Unlock the Power of Governance, Risk Management, Compliance, and Assurance with Risk Wise."
              type="p1-s"
            />
            <div className="mt-5">
              <div className="">
                <TextGroup text="Seamless Integration:" type="p5-b" />
                <TextGroup
                  text=" Risk Wise seamlessly integrates all facets of GRC into a unified platform, enhancing collaboration and boosting efficiency across your organization."
                  type="ol-m"
                />
              </div>
              <div className="mt-3">
                <TextGroup text="Real-time Insights:" type="p5-b" />
                <TextGroup
                  text=" Gain actionable insights with our comprehensive analytics, providing the foresight needed to make informed decisions."
                  type="ol-m"
                />
              </div>
              <div className="mt-3">
                <TextGroup text="Assured Compliance:" type="p5-b" />
                <TextGroup
                  text=" Navigate the complex regulatory landscape effortlessly while ensuring adherence to industry standards."
                  type="ol-m"
                />
              </div>
              <div className="mt-3">
                <TextGroup text="Risk Mitigation:" type="p5-b" />
                <TextGroup
                  text=" Identify and mitigate risks proactively, protecting your organization from potential threats."
                  type="ol-m"
                />
              </div>
              <div className="mt-3">
                <TextGroup text="Audits Made Easy:" type="p5-b" />
                <TextGroup
                  text=" Streamline audit processes and achieve compliance with ease."
                  type="ol-m"
                />
              </div>
              <div className="mt-3">
                <TextGroup text="User-friendly Interface:" type="p5-b" />
                <TextGroup
                  text=" Our intuitive design ensures that everyone in your organization can harness the power of Risk Wise."
                  type="ol-m"
                />
              </div>
            </div>
            <div className="mt-3">
              <TextGroup
                text="©2019-2023 All Rights Reserved. Risk Wise."
                type="ol-m"
              />
            </div>
            <div className="mt-3 flex text-[12px]">
              <Link className="mr-2 underline" to="/privacy">
                Privacy Policy
              </Link>
              <Link className="mr-2 underline" to="/terms">
                Terms and Conditions
              </Link>
              <Link className="mr-2 underline" to="/about">
                About ThinkFirm
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-3/4 px-4 3xl:px-10 my-5 3xl:my-8 text-justify">
        <div>
          <div>
            <TextGroup
              text="Public Policy"
              type="p2-m"
              color="color-neutral5"
            />
          </div>
          <div className="mt-3">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
          <div className="mt-2">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
        </div>
        <div className="mt-8">
          <div>
            <TextGroup
              text="Public Policy sub heading"
              type="p2-m"
              color="color-neutral5"
            />
          </div>
          <div className="mt-3">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
          <div className="mt-2">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
        </div>
        <div className="mt-8">
          <div>
            <TextGroup
              text="Public Policy sub heading"
              type="p2-m"
              color="color-neutral5"
            />
          </div>
          <div className="mt-3">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
          <div className="mt-2">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
        </div>
        <div className="mt-8">
          <div>
            <TextGroup
              text="Public Policy sub heading"
              type="p2-m"
              color="color-neutral5"
            />
          </div>
          <div className="mt-3">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
          <div className="mt-2">
            <TextGroup
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              color="color-neutral4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
