import React from "react";
import OurWork from "../components/OurWork/our-work.tsx";
import OurMilestones from "../components/Milestones/milestones.tsx";
import Testimonials from "../components/Testimonials/testimonials.tsx";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <video
          className="w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/path-to-your-poster-image.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1)",
          }}
        >
          <source src="/assets/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="px-44 w-full my-10">
        <div>
          <h1 className="w-4/5 my-5 text-7xl font-bold font-sans text-justify leading-tight text-[#2e2e2e]">
            We let you build relations through our tailored digital products.
          </h1>
        </div>

        <div className="flex justify-end">
          <p className="text-2xl w-2/3 leading-snug text-[#7f7f7f]">
            We create digital products and platforms that drive user engagement
            and redefine industries by developing an intimate knowledge of our
            clients and their audiences.
          </p>
        </div>

        <div className="w-full flex justify-end">
          <div className="w-2/3 my-5">
            <button className="p-5 bg-[#2957a7] w-60 rounded-full text-white text-xl font-bold hover:scale-110 duration-700">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <OurWork />
      <OurMilestones />
      <Testimonials />

      <div className="px-44 py-20">
        <h1 className="text-6xl text-center">
          This is not the end but a beginning
        </h1>

        <div className="flex justify-center py-20">
          <button className="border-2 p-4 w-52 text-xl font-semibold text-[#2957a7] hover:text-white hover:bg-[#2957a7] duration-700 hover:scale-105 border-[#2957a7] rounded-full">
            Let&apos;s begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
