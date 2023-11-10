import React from "react";
import { Link } from "react-router-dom";
import TextGroup from "../components/common/TextGroup";

const Home = () => {
  return (
    <div>
      <TextGroup text="Home" type="h1-b" />
      <div>
        <Link to="/typography" className=" underline">
          Typography
        </Link>
      </div>
      <div>
        <Link to="/button" className=" underline">
          Button
        </Link>
      </div>
      <div>
        <Link to="/notification" className=" underline">
          Notification
        </Link>
      </div>
      <div>
        <Link to="/modal" className=" underline">
          Modal
        </Link>
      </div>
    </div>
  );
};

export default Home;
