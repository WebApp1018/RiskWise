import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";
import ButtonGroup from "../components/common/ButtonGroup";

import LeftSection from "../components/landingpage/LeftSection";

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
    <div className="flex min-h-screen">
      <LeftSection />
      <div className="basis-1/3 px-7 my-auto flex items-center justify-center">
        <div className="w-[350px]">
          <TextGroup text="Risk Wise" type="h4-b" />
          <TextGroup text="." type="h4-b" color="text-color-error1" />
          <div className="mt-10 3xl:mt-[107px]">
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
              <label className="block mt-5 text-[14px] font-medium text-color-neutral4">
                Full Name
                <InputGroup
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={errors}
                />
              </label>
              <label className="block mt-5 3xl:mt-8 mb-2 text-[14px] font-medium text-color-neutral4">
                Email Address
                <InputGroup
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors}
                />
              </label>
              <label className="block mt-5 text-[14px] font-medium text-color-neutral4">
                Subject
                <InputGroup
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  error={errors}
                />
              </label>
              <label className="block mt-5 text-[14px] font-medium text-color-neutral4">
                Message
                <textarea
                  name="message"
                  rows="5"
                  className="border border-color-neutral3 text-color-neutral4 font-normal text-sm focus:border-color-neutral4 focus:outline-none block w-full p-1.5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <div className="text-justify mt-3 3xl:mt-8">
                <TextGroup
                  text="By clicking "
                  type="ol-m"
                  color="text-color-neutral3"
                />
                <TextGroup
                  text="Submit"
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
    </div>
  );
};

export default Contact;
