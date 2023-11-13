import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";
import ButtonGroup from "../components/common/ButtonGroup";

const Privacy = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div
        className="w-1/3 min-h-screen flex"
        style={{
          backgroundImage: `url(/images/bg1.png)`,
          backgroundRepeat: "round",
        }}
      >
        <div className="w-full px-5 mb-5 mt-16 text-white">
          <div className="mb-10">
            <TextGroup text="Risk Wise" type="h4-b" />
            <TextGroup text="." type="h4-b" color="text-color-error1" />
          </div>
          <TextGroup
            text="Unlock the Power of Governance, Risk Management, Compliance, and Assurance with Risk Wise."
            type="h5-s"
          />
          <div className="mt-5">
            <div className="">
              <TextGroup text="Seamless Integration:" type="p3-b" />
              <TextGroup
                text=" Risk Wise seamlessly integrates all facets of GRC into a unified platform, enhancing collaboration and boosting efficiency across your organization."
                type="p4-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Real-time Insights:" type="p3-b" />
              <TextGroup
                text=" Gain actionable insights with our comprehensive analytics, providing the foresight needed to make informed decisions."
                type="p4-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Assured Compliance:" type="p3-b" />
              <TextGroup
                text=" Navigate the complex regulatory landscape effortlessly while ensuring adherence to industry standards."
                type="p4-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Risk Mitigation:" type="p3-b" />
              <TextGroup
                text=" Identify and mitigate risks proactively, protecting your organization from potential threats."
                type="p4-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Audits Made Easy:" type="p3-b" />
              <TextGroup
                text=" Streamline audit processes and achieve compliance with ease."
                type="p4-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="User-friendly Interface:" type="p3-b" />
              <TextGroup
                text=" Our intuitive design ensures that everyone in your organization can harness the power of Risk Wise."
                type="p4-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup
                text="©2019-2023 All Rights Reserved. Risk Wise ® is a registered trademark of ThinkFirm."
                type="p4-m"
              />
            </div>
            <div className="mt-3 flex">
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
      <div className="w-2/3 px-4 py-5 text-justify">
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
