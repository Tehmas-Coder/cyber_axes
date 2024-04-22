import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const OurWork = () => {
  return (
    <div className="my-32">
      <div className="px-44">
        <h1 className="text-6xl ">
          Here&apos;s our <span className="font-bold">work</span>
        </h1>

        <div className="bg-white rounded-3xl flex my-20">
          <div className="w-2/5 flex flex-col items-center justify-center">
            <div className="p-12">
              <img
                src="/assets/chatkrowlogo.svg"
                alt="Description of the SVG"
              />

              <p className="text-3xl my-5 leading-normal">
                <span className="font-bold text-[#2957a7]">
                  AI Based Chatbot
                </span>{" "}
                for Whatsapp and your Mobile
              </p>
              <p className="text-[#7f7f7f] leading-">
                ChatKrow is an AI companion designed to provide friendship,
                conversation, and entertainment to anyone who needs it. With
                Friday, you'll have a new virtual friend to chat with, learn
                from, and explore new ideas with.
              </p>

              <p className="flex items-center text-[#2957a7] my-2 font-semibold transition-transform hover:translate-x-4 duration-700 cursor-pointer w-28">
                View case <IoIosArrowRoundForward size={28} />
              </p>
            </div>
          </div>

          <div className="w-3/5 bg-[#193669] p-14 rounded-3xl rounded-l-none">
            <img src="/assets/image1.png" className="w-full h-full" />
          </div>
        </div>

        <div className="bg-white rounded-3xl flex my-20">
          <div className="w-3/5 bg-[#b31819] p-14 rounded-3xl rounded-r-none">
            <img src="/assets/image2.png" className="w-full h-full" />
          </div>

          <div className="w-2/5 flex flex-col items-center justify-center">
            <div className="p-12">
              <img
                src="/assets/luckycementlogo.svg"
                alt="Description of the SVG"
              />

              <p className="text-3xl my-5 leading-snug">
                <span className="font-bold text-[#eb2022]">
                  Sales and Distribution
                </span>{" "}
                network management digitisation end to end
              </p>
              <p className="text-[#7f7f7f]">
                End-to-End solution design and implementation to digitize Lucky
                Cements' Secondary Sales processes, Field Force Management,
                Sales Universe Management, CRM, AI Based Market Intelligence,
                Field Force Management, and finally AI / ML Based analytics.
              </p>

              <p className="flex items-center text-[#2957a7] my-2 font-semibold transition-transform hover:translate-x-4 duration-700 cursor-pointer w-28">
                View case <IoIosArrowRoundForward size={28} />
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-10">
          <button className="border-2 p-4 w-52 text-xl font-semibold text-[#2957a7] hover:text-white hover:bg-[#2957a7] duration-700 hover:scale-105 border-[#2957a7] rounded-full">
            see more work
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
