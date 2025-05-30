import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-0">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
