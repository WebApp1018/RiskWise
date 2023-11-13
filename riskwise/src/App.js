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

import Login from "./pages/login";
import Register from "./pages/register";
import Forgot from "./pages/forgot";
import Reset from "./pages/reset";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/button" element={<ButtonList />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/modal" element={<ModalList />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
