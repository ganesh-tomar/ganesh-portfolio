import React from "react";

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="font-bold uppercase">
        RECENT <span className="text-[#626166]">PROJECTS</span>
      </h2>
      <div className="wapper mt-[50px]">
        <div className="projectCard flex items-center mb-[30px]">
          <div className="imageWrap max-w-[130px] max-h-[130px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>Clear Digital</h5>
            <p className="small mt-[2px]">Digital Agency Website</p>
          </div>
        </div>
        <div className="projectCard flex items-center mb-[30px]">
          <div className="imageWrap max-w-[130px] max-h-[130px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>Clear Digital</h5>
            <p className="small mt-[2px]">Digital Agency Website</p>
          </div>
        </div>
        <div className="projectCard flex items-center mb-[30px]">
          <div className="imageWrap max-w-[130px] max-h-[130px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>Clear Digital</h5>
            <p className="small mt-[2px]">Digital Agency Website</p>
          </div>
        </div>
      </div>
    </section>
  );
}
