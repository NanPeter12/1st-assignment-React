import React from "react";

import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./../NavBar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
