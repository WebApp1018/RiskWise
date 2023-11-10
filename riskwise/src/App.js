import React from "react";
import { Routes, Route } from "react-router-dom";
import { getAuth } from "./app/authSlice";
import PrivateRoute from "./utils/privateRoute";
import setAuthToken from "./utils/setAuthToken";
import jwtDecode from "jwt-decode";
import logo from "./logo.svg";

import Home from "./pages";
import Typography from "./pages/typography";
import ButtonList from "./pages/button";
import Notification from "./pages/notification";
import ModalList from "./pages/modal";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/button" element={<ButtonList />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/modal" element={<ModalList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
