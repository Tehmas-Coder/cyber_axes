import React from "react";

const OurMilestones = () => {
  return (
    <div className="px-44">
      <h1 className="text-6xl">
        Our <span className="font-bold">Milestones</span>
      </h1>

      <div className="flex justify-around py-20">
        <div className="text-center">
          <p className="text-6xl font-bold my-3">100+</p>
          <p className="text-lg font-semibold text-[#2957a7]">
            Satisfied clients
          </p>
        </div>

        <div className="text-center">
          <p className="text-6xl font-bold my-3">2000+</p>
          <p className="text-lg font-semibold text-[#eb2022]">
            Hours of staff augmentation
          </p>
        </div>

        <div className="text-center">
          <p className="text-6xl font-bold my-3">8000+</p>
          <p className="text-lg font-semibold text-[#2957a7]">
            Solar Sites on NOC
          </p>
        </div>

        <div className="text-center">
          <p className="text-6xl font-bold my-3">30+</p>
          <p className="text-lg font-semibold text-[#eb2022]">M&E Projects</p>
        </div>
      </div>
    </div>
  );
};

export default OurMilestones;
