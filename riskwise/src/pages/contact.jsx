import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";
import ButtonGroup from "../components/common/ButtonGroup";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

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
            <TextGroup text="ContactSupport" type="p2-m" />
          </div>
          <div className="text-color-neutral3 mt-3">
            <TextGroup
              text="Welcome! Please use below form to contact."
              type="p5-r"
            />
          </div>
          <form className="" noValidate onSubmit={onSubmit}>
            <label className="block mt-5 mb-2 text-[14px] font-medium text-color-neutral4">
              Full Name
              <InputGroup
                name="name"
                placeholder="enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors}
              />
            </label>
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
              Subject
              <InputGroup
                name="subject"
                placeholder="enter your subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                error={errors}
              />
            </label>
            <label className="block mt-5 mb-2 text-[14px] font-medium text-color-neutral4">
              Subject
              <textarea
                name="message"
                placeholder="enter your message"
                className="border border-color-neutral3 text-color-neutral5 text-sm focus:border-color-secondary block w-full p-1.5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <div className="text-justify">
              <TextGroup
                text="By clicking "
                type="ol-m"
                color="text-color-neutral3"
              />
              <TextGroup text="Submit" type="ol-m" color="text-color-primary" />
              <TextGroup
                text=" below, you agree to our Terms and Conditions and Privacy Policy."
                type="ol-m"
                color="text-color-neutral3"
              />
            </div>
            <div className="mt-6 flex">
              <ButtonGroup
                text="Submit"
                type="sm-pr"
                width="w-full"
                icon="left"
                iconImg="user-check"
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

export default Contact;
