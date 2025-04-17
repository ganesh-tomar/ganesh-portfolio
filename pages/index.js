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
                  className="stickyCard sticky bg-white  top-[50px] px-[20px] py-[30px] shadow-lg text-center rounded-lg"
                >
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
