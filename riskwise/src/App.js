import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Forgot from "./pages/forgot";
import Reset from "./pages/reset";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import MagicLink from "./pages/magiclink";
import Dashboard from "./pages/dashboard";
import Product from "./pages/dashboard/product";
import Report from "./pages/dashboard/report";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/magiclink" element={<MagicLink />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
