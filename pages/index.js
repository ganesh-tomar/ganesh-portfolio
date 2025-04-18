import React from "react";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <main>
        <div className="pt-[200px] pb-[100px] bg-black">
          <div className="container">
            <div className="flex flex-wrap justify-between gap-10">
              {/* Left Content - Profile Card */}
              <div className="leftContent w-[30%]">
                <div
                  data-aos="fade-up"
                  className="stickyCard sticky bg-white  top-[50px] px-[20px] py-[30px] shadow-lg text-center rounded-lg overflow-hidden"
                >
                  <div className="absolute -top-[150px] -left-[150px] w-auto h-auto">
                    <svg
                      width="300"
                      height="300"
                      viewBox="0 0 300 300"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="150"
                        cy="150"
                        r="120"
                        fill="none"
                        stroke="#ff7a00"
                        strokeWidth="4"
                        strokeDasharray="7 10" // Bigger dots & spacing
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>

                  <div className="max-w-[240px] max-h-[284px] w-full h-full rounded-lg overflow-hidden mx-auto mb-[20px]">
                    <Image
                      width={1000}
                      height={1000}
                      src="/developer.png"
                      alt="Profile Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[36px] font-semibold">Ganesh Thakur</h3>
                  <div className=" rotate-[355deg] relative left-[-100px]">
                    <svg
                      width="200"
                      height="130"
                      viewBox="0 0 300 150"
                      xmlns="http://www.w3.org/2000/svg"
                      className="half-dotted-circle"
                    >
                      <path
                        d="M 30 0 A 120 120 0 0 0 270 0"
                        fill="none"
                        stroke="#ff7a00"
                        strokeWidth="4"
                        strokeDasharray="4 10"
                        strokeLinecap="square"
                      />

                      <circle cx="270" cy="0" r="17.5" fill="#ff7a00" />

                      <text
                        x="270"
                        y="5"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {"< / >"}
                      </text>
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Turning ideas into sleek, high-performance web experiences.
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href="#" className="text-blue-500">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-black">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-blue-400">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Content - Job Title & Description */}
              <div className="rightContent w-[60%] text-white">
                <Banner />
                <Projects />
                <Experience />
                <Tools />
                <ContactUs />
              </div>

              <div className="copyrightWrap w-full text-white text-center">
                Made by <span className="text-orange">Ganesh</span> Thakur
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
