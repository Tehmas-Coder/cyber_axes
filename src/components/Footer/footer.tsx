import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="bg-white px-44 py-10">
        <div className=" flex justify-between text-[#7f7f7f]">
          <div>
            <div className="flex">
              <FaLinkedinIn className="" size={24} />
              <CiMail className="ml-2" size={24} />
              <LuPhone className="ml-2" size={24} />
            </div>
            <div className="my-5">
              <h1 className="text-lg">HQ ADDRESS</h1>
              <p>5117 Joseph St Lewisville, TX 75056, Texas, USA</p>
            </div>

            <div className="my-5">
              <h1 className="text-lg">OFFSHORE OFFICE 1</h1>
              <p>Augustine Heights, Queensland, 4300, Australia</p>
            </div>

            <div className="my-5">
              <h1 className="text-lg">OFFSHORE OFFICE 2</h1>
              <p>Office 4019, 4th Floor, WTC, GIGA, DHA 2, Islamabad</p>
            </div>
          </div>

          <div>
            <h1>COMPANY</h1>
            <div className="my-5">
              <p className="my-2">About</p>
              <p className="my-2">Work</p>
              <p className="my-2">Contact</p>
            </div>
          </div>

          <div>
            <h1>SERVICES</h1>
            <div className="my-5">
              <p className="my-2">Business Analysis</p>
              <p className="my-2">Product / Solution Design</p>
              <p className="my-2">Branding and Brand Identity</p>
              <p className="my-2">UI / UX Design</p>
              <p className="my-2">Web Based Solutions</p>
              <p className="my-2">Mobile Applications</p>
              <p className="my-2">GIS Based Solutions</p>
              <p className="my-2">AI / ML Solutions</p>
            </div>
          </div>

          <div>
            <h1>CONTACT</h1>
            <p className="my-5">Contact</p>
          </div>
        </div>
        <p className="flex justify-end w-full bg-white text-[#7f7f7f] my-5 text-xs">
          Terms & Conditions Privacy Policy Copyrights@2024 All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
