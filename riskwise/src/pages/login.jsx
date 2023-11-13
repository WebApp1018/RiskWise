import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";
import ButtonGroup from "../components/common/ButtonGroup";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div
        className="w-2/3 min-h-screen flex items-end"
        style={{
          backgroundImage: `url(/images/bg1.png)`,
          backgroundRepeat: "round",
        }}
      >
        <div className="w-full pl-5 pr-16 mb-5 text-white">
          <TextGroup
            text="Unlock the Power of Governance, Risk Management, Compliance, and Assurance with Risk Wise."
            type="h4-m"
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
      <div className="w-1/3 px-7 mt-24 mb-10">
        <TextGroup text="Risk Wise" type="h4-b" />
        <TextGroup text="." type="h4-b" color="text-color-error1" />
        <div className="mt-10">
          <div>
            <TextGroup text="Sign In" type="p2-m" />
          </div>
          <div className=" text-color-neutral3 mt-3">
            <TextGroup text="Welcome! Please signin to continue." type="p5-r" />
          </div>
          <form className="" noValidate onSubmit={onSubmit}>
            <label className="block mt-5 mb-2 text-[14px] font-medium text-color-neutral4">
              Email Address
              <InputGroup
                name="email"
                type="email"
                placeholder="enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors}
              />
            </label>
            <label className="block mt-5 mb-2 text-[14px] font-medium text-color-neutral4">
              Password
              <InputGroup
                name="password"
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors}
              />
            </label>
            <div className="text-right">
              <Link
                className="hover:underline decoration-color-error"
                to="/forgot"
              >
                <TextGroup
                  text="Forgot your password?"
                  type="p5-m"
                  color="text-color-error"
                />
              </Link>
            </div>
            <div className="text-justify">
              <TextGroup
                text="By clicking"
                type="ol-m"
                color="text-color-neutral3"
              />
              <TextGroup
                text=" Sign In"
                type="ol-m"
                color="text-color-primary"
              />
              <TextGroup
                text=" below, you agree to our Terms and Conditions and Privacy Policy."
                type="ol-m"
                color="text-color-neutral3"
              />
            </div>
            <div className="mt-6 flex">
              <ButtonGroup
                text="Sign"
                type="sm-pr"
                width="w-full"
                icon="left"
                iconImg="arrow-right-circle"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="w-1/3 border-t-2"></div>
              <div className="">
                <TextGroup
                  text="OR SIGN IN WITH"
                  type="st-r"
                  color="text-color-neutral3"
                />
              </div>
              <div className="w-1/3 border-t-2"></div>
            </div>
            <div className="flex justify-between gap-[10px]">
              <ButtonGroup
                text="MAGIC LINK"
                type="sm-pr"
                width="w-1/2"
                icon="left"
                iconImg="link"
              />
              <ButtonGroup
                text="OTP"
                type="sm-pr"
                width="w-1/2"
                icon="left"
                iconImg="smartphone"
              />
            </div>
            <div className="mt-8 text-center">
              <TextGroup
                text="Don’t have an account? "
                type="ol-m"
                color="text-color-neutral3"
              />
              <Link
                className="hover:underline decoration-color-primary"
                to="/register"
              >
                <TextGroup
                  text="Sign Up"
                  type="ol-m"
                  color="text-color-primary"
                />
              </Link>
            </div>
            <div className="text-center">
              <TextGroup
                text="Need assistance or have questions? "
                type="ol-m"
                color="text-color-neutral3"
              />
              <Link
                className="hover:underline decoration-color-error"
                to="/contact"
              >
                <TextGroup
                  text="Contact Support"
                  type="ol-m"
                  color="text-color-error"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
