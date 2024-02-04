import React from "react";
import Navbar from "./Navbar";
import "./header.css";

const Header = () => {
  return (
    <header className="color-opposite">
      <div className="main-header-name">
        <span>Adnan Ahmad</span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
