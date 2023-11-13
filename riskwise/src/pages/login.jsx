import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className="w-2/3 relative">
        <img
          src="/images/bg1.jpg"
          className="w-full h-screen object-cover"
          alt=""
        />
        <div className="w-full absolute top-0 left-0 pl-5 pr-16 mt-16 text-white">
          <TextGroup
            text="Unlock the Power of Governance, Risk Management, Compliance, and Assurance with Risk Wise."
            type="h2-m"
          />
          <div className="mt-5">
            <div className="">
              <TextGroup text="Seamless Integration:" type="p3-b" />
              <TextGroup
                text=" Risk Wise seamlessly integrates all facets of GRC into a unified platform, enhancing collaboration and boosting efficiency across your organization."
                type="p3-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Real-time Insights:" type="p3-b" />
              <TextGroup
                text=" Gain actionable insights with our comprehensive analytics, providing the foresight needed to make informed decisions."
                type="p3-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Assured Compliance:" type="p3-b" />
              <TextGroup
                text=" Navigate the complex regulatory landscape effortlessly while ensuring adherence to industry standards."
                type="p3-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Risk Mitigation:" type="p3-b" />
              <TextGroup
                text=" Identify and mitigate risks proactively, protecting your organization from potential threats."
                type="p3-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="Audits Made Easy:" type="p3-b" />
              <TextGroup
                text=" Streamline audit processes and achieve compliance with ease."
                type="p3-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup text="User-friendly Interface:" type="p3-b" />
              <TextGroup
                text=" Our intuitive design ensures that everyone in your organization can harness the power of Risk Wise."
                type="p3-m"
              />
            </div>
            <div className="mt-3">
              <TextGroup
                text="©2019-2023 All Rights Reserved. Risk Wise ® is a registered trademark of ThinkFirm."
                type="p3-m"
              />
            </div>
            <div className="mt-3 flex">
              <Link className="mr-2 underline" to="">
                Privacy Policy
              </Link>
              <Link className="mr-2 underline" to="">
                Terms and Conditions
              </Link>
              <Link className="mr-2 underline" to="">
                About ThinkFirm
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 px-7 mt-7">
        <TextGroup text="Risk Wise." type="h3-s" />
        <div className="mt-10">
          <div>
            <TextGroup text="Sign In" type="h6-r" />
          </div>
          <div className=" text-color-neutral3 mt-3">
            <TextGroup text="Welcome! Please signin to continue." type="p4-r" />
          </div>
          <form className="space-y-6" noValidate onSubmit={onSubmit}>
            <label className="block mt-5 mb-2 font-medium text-color-neutral4">
              Your email
              <InputGroup
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors}
              />
            </label>
            <label className="block mt-5 mb-2 font-medium text-color-neutral4">
              Your password
              <InputGroup
                name="password"
                value={password}
                onChange={(e) => setEmail(e.target.value)}
                error={errors}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
