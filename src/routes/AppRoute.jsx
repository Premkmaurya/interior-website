import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home_page/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import SingleProduct from "../pages/SingleProduct.jsx";
import Term from "../pages/Term.jsx";
import TandC from "../pages/T&C.jsx";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/single-product" element={<SingleProduct />} />
      <Route path="/terms-of-use" element={<Term />} />
      <Route path="/terms-and-conditions" element={<TandC />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoute;
