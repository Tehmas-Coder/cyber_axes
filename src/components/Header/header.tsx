import React from "react";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="flex justify-between p-5">
      <a href="/">
        <div className="px-20">
          <h1 className="text-4xl">CyberAxes</h1>
        </div>
      </a>

      <div className="flex items-center">
        <a href="/about">
          <div className="w-28">
            <h1 className="text-center">About</h1>
          </div>
        </a>

        <a href="/services">
          <div className="w-28">
            <h1 className="text-center">Services</h1>
          </div>
        </a>

        <div className="w-28">
          <h1 className="text-center">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Header1;
