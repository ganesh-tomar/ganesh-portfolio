import React from "react";

export default function Tools() {
  return (
    <section className="tools">
      <h2 className="font-bold uppercase">
        PREMIUM <span className="text-[#626166]">TOOLS</span>
      </h2>
      <div className="wapper flex flex-wrap mt-[50px]">
        <div className="toolCard w-1/2 flex mb-[40px]">
          <div className="imageWrap max-w-[60px] max-h-[60px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>React</h5>
            <p className="small">JavaScript library</p>
          </div>
        </div>
        <div className="toolCard w-1/2 flex mb-[40px]">
          <div className="imageWrap max-w-[60px] max-h-[60px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>Nextjs</h5>
            <p className="small">React framework</p>
          </div>
        </div>
        <div className="toolCard w-1/2 flex mb-[40px]">
          <div className="imageWrap max-w-[60px] max-h-[60px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>Firebase</h5>
            <p className="small">BaaS platform</p>
          </div>
        </div>
        <div className="toolCard w-1/2 flex mb-[40px]">
          <div className="imageWrap max-w-[60px] max-h-[60px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>WordPress</h5>
            <p className="small">CMS</p>
          </div>
        </div>
        <div className="toolCard w-1/2 flex mb-[40px]">
          <div className="imageWrap max-w-[60px] max-h-[60px] w-full h-full text-[0] overflow-hidden rounded-lg">
            <img
              src="/profile.jpg"
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="contentWrap pl-[30px]">
            <h5>Javascript</h5>
            <p className="small">programming language</p>
          </div>
        </div>
      </div>
    </section>
  );
}
