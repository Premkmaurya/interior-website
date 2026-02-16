import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home_page/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import SingleProduct from "../pages/SingleProduct.jsx";
import Term from "../pages/Term.jsx";
import TandC from "../pages/T&C.jsx";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart.jsx";
import Dashboard from "../pages/Dashboard.jsx";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/single-product" element={<SingleProduct />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
      <Route path="/terms-of-use" element={<Term />} />
      <Route path="/terms-and-conditions" element={<TandC />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
};

export default AppRoute;
