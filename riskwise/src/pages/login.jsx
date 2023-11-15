import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";
import InputGroup from "../components/common/InputGroup";
import ButtonGroup from "../components/common/ButtonGroup";

import LeftSection from "../components/landingpage/LeftSection";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen">
      <LeftSection />
      <div className="basis-1/3 px-7 my-auto flex items-center justify-center">
        <div className="w-[450px]">
          <TextGroup text="Risk Wise" type="h4-b" />
          <TextGroup text="." type="h4-b" color="text-color-error1" />
          <div className="mt-10 3xl:mt-[107px]">
            <div>
              <TextGroup text="Sign In" type="p2-m" />
            </div>
            <div className=" text-color-neutral3 mt-3">
              <TextGroup
                text="Welcome! Please signin to continue."
                type="p5-r"
              />
            </div>
            <form noValidate onSubmit={onSubmit}>
              <label className="block mt-5  text-[14px] font-medium text-color-neutral4">
                Email Address
                <InputGroup
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors}
                />
              </label>
              <label className="block mt-5  text-[14px] font-medium text-color-neutral4">
                Password
                <InputGroup
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors}
                />
              </label>
              <div className="text-right mt-0 3xl:mt-3">
                <Link
                  className="hover:underline decoration-color-error"
                  to="/forgot"
                >
                  <TextGroup
                    text="Forgot your password?"
                    type="ol-m"
                    color="text-color-error"
                  />
                </Link>
              </div>
              <div className="text-justify mt-3">
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
                  type="md-pr"
                  width="w-full"
                  icon="left"
                  iconImg="arrow-right-circle"
                />
              </div>
              <div className="flex justify-between items-center my-2">
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
                  type="md-pr"
                  width="w-1/2"
                  icon="left"
                  iconImg="link"
                />
                <ButtonGroup
                  text="OTP"
                  type="md-pr"
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
    </div>
  );
};

export default Login;
