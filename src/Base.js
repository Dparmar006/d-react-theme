import React from "react";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/navbar/Navbar";

const Base = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
