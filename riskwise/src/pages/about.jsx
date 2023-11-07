import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div>About page</div>
            <Link to="/" className=" underline">Home</Link>
        </div>
    )
}

export default About;