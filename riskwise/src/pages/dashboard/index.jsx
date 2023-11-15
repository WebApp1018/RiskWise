import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";
import TextGroup from "../../components/common/TextGroup";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="bg-color-neutral6 z-10">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <div
        className={classnames("mt-[72px] pt-5 px-5", { "ml-60": showSidebar })}
      >
        {/* Main Content */}

        <div className=" min-h-screen">
          <div className="flex gap-1 text-color-neutral3">
            <Link className="hover:underline" to="/dashboard">
              <TextGroup text="Dashboard" type="p5-m" />
            </Link>
            <span> / </span>
            <Link className="hover:underline" to="/dashboard/user">
              <TextGroup text="Welcome Screen" type="p5-m" />
            </Link>
          </div>
          <TextGroup
            text="Welcome! Shaira Diaz"
            type="h6-r"
            color="text-color-neutral4"
          />
          <div className="mt-5">
            <TextGroup
              text="The dashboard below provides a comprehensive and personalized view, tailored to your needs. It offers a wealth of insights and information that empowers you to make informed and effective decisions. Unlock the power of data-driven decision-making and seize new opportunities with confidence."
              type="p5-m"
              color="text-color-neutral3"
            />
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t py-5 my-5">
          <TextGroup
            text="© 2023. Risk Wise. All Rights Reserved."
            type="p5-m"
            color="text-color-neutral3"
          />
          <div>
            <TextGroup
              text="Created by: "
              type="p5-m"
              color="text-color-neutral3"
            />
            <Link className="hover:underline decoration-color-error">
              <TextGroup
                text="ThinkFirm"
                type="p5-m"
                color="text-color-error"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
