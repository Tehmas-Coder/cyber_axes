import React from "react";

const About = () => {
  return (
    <div className="px-44 py-28">
      <h1 className="text-7xl w-4/5 leading-tight">
        <span className="font-bold">Accelerating Innovation:</span> Where your
        business goals transform into exceptional products.
      </h1>
      <div className="w-full py-5 my-5 flex justify-end">
        <p className="w-1/2 text-2xl">
          Revolutionizing product delivery with AI Precision: From Development
          to Data-Driven Market Validation.
        </p>
      </div>

      <div className="bg-white m-24 rounded-3xl p-20">
        <h1 className="text-center text-6xl my-5">About Us</h1>
        <p className="text-center text-xl">
          We at the Joyn Group are proud to be at the forefront of the
          technology revolution. Our core purpose is to provide our clients with
          the best possible solutions in shape of products, solutions, services
          and consultancies to keep pace with technology.
        </p>
      </div>

      <div className="text-6xl">
        <h1>
          The <span className="font-bold">descision makers</span>
        </h1>

        <div className="flex my-10">
          <div className="w-1/3">
            <img
              src="/assets/person.png"
              alt="1"
              className="rounded-2xl border-2"
            />
          </div>

          <div className="w-1/3">
            <img src="/assets/person.png" alt="2" />
          </div>

          <div className="w-1/3">
            <img src="/assets/person.png" alt="3" />
          </div>
        </div>

        <div className="text-6xl my-20">
          <h1 className="my-5">
            The <span className="font-bold">team at work</span>
          </h1>
          <div>
            <div className="w-full h-[24rem] flex justify-between">
              <div className="w-1/3 p-2">
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src="/assets/UniCover1.jpg"
                />
              </div>
              <div className="w-2/3 p-2">
                <img
                  src="/assets/UniCover5.png"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            <div className="p-2 w-full h-[30rem]">
              <img
                src="/assets/UniCover3.jpeg"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="w-full h-[24rem] flex justify-between">
              <div className="w-2/3 p-2">
                <img
                  src="/assets/UniCover4.jpeg"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="w-1/3 p-2">
                <img
                  src="/assets/UniCover2.jpg"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
