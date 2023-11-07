import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>Home page</div>
            <Link to="/about" className=" underline">about</Link>
        </div>
    )
}

export default Home;