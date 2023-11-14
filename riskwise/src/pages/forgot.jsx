import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";
import ButtonGroup from "../components/common/ButtonGroup";

const Forgot = () => {
  const [email, setEmail] = useState();
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen">
      <div className="basis-2/3 relative">
        <img
          className="w-full h-full object-cover align-middle"
          src="/images/bg1.png"
          alt=""
        />
        <div className="absolute left-0 bottom-0 max-w-[1000px] pl-8 3xl:pl-12 pr-16 mb-8 text-white">
          <TextGroup
            text="Unlock the Power of Governance, Risk Management, Compliance, and Assurance with Risk Wise."
            type="h2-m"
          />
          <div className="mt-5">
            <div className="">
              <TextGroup text="Seamless Integration:" type="p3-b" />
              <TextGroup
                text=" Risk Wise seamlessly integrates all facets of GRC into a unified platform, enhancing collaboration and boosting efficiency across your organization."
                type="p4-m"
              />
            </div>
            <div className="mt-3 3xl:mt-8">
              <TextGroup text="Real-time Insights:" type="p3-b" />
              <TextGroup
                text=" Gain actionable insights with our comprehensive analytics, providing the foresight needed to make informed decisions."
                type="p4-m"
              />
            </div>
            <div className="mt-3 3xl:mt-8">
              <TextGroup text="Assured Compliance:" type="p3-b" />
              <TextGroup
                text=" Navigate the complex regulatory landscape effortlessly while ensuring adherence to industry standards."
                type="p4-m"
              />
            </div>
            <div className="mt-3 3xl:mt-8">
              <TextGroup text="Risk Mitigation:" type="p3-b" />
              <TextGroup
                text=" Identify and mitigate risks proactively, protecting your organization from potential threats."
                type="p4-m"
              />
            </div>
            <div className="mt-3 3xl:mt-8">
              <TextGroup text="Audits Made Easy:" type="p3-b" />
              <TextGroup
                text=" Streamline audit processes and achieve compliance with ease."
                type="p4-m"
              />
            </div>
            <div className="mt-3 3xl:mt-8">
              <TextGroup text="User-friendly Interface:" type="p3-b" />
              <TextGroup
                text=" Our intuitive design ensures that everyone in your organization can harness the power of Risk Wise."
                type="p4-m"
              />
            </div>
            <div className="mt-3 3xl:mt-8">
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
      <div className="basis-1/3 px-7 3xl:px-16 mt-10 3xl:my-auto mb-10">
        <TextGroup text="Risk Wise" type="h4-b" />
        <TextGroup text="." type="h4-b" color="text-color-error1" />
        <div className="mt-10 3xl:mt-[107px]">
          <div>
            <TextGroup text="Forget Password" type="p2-m" />
          </div>
          <div className="text-color-neutral3 mt-3">
            <TextGroup
              text="Welcome! Please use below form to reset your account."
              type="p5-r"
            />
          </div>
          <form className="" noValidate onSubmit={onSubmit}>
            <label className="block mt-5 text-[14px] font-medium text-color-neutral4">
              Email Address
              <InputGroup
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors}
              />
            </label>
            <div className="text-justify mt-3 3xl:mt-8">
              <TextGroup
                text="By clicking "
                type="ol-m"
                color="text-color-neutral3"
              />
              <TextGroup text="Reset" type="ol-m" color="text-color-primary" />
              <TextGroup
                text=" below, you agree to our Terms and Conditions and Privacy Policy."
                type="ol-m"
                color="text-color-neutral3"
              />
            </div>
            <div className="mt-6 flex">
              <ButtonGroup
                text="Reset"
                type="md-pr"
                width="w-full"
                icon="left"
                iconImg="lock"
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

export default Forgot;
