import React from "react";
import { Link } from "react-router-dom";
import TextGroup from "../common/TextGroup";

const LeftSection = () => {
  return (
    <div className="basis-2/3 relative min-h-[700px]">
      <img
        className="w-full h-full object-cover align-middle"
        src="/images/bg1.png"
        alt=""
      />
      <div className="absolute left-0 bottom-0 max-w-[800px] pl-8 3xl:pl-12 pr-16 mb-8 text-white">
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
          <div className="mt-8 3xl:mt-10">
            <TextGroup
              text="©2019-2023 All Rights Reserved. Risk Wise ® is a registered trademark of ThinkFirm."
              type="p4-m"
            />
          </div>
          <div className="flex">
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
  );
};

export default LeftSection;
