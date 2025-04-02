import React from "react";

export default function Banner() {
  return (
    <section className="banner no-padding-top">
      <h1 className="font-bold uppercase">
        Web <span className="text-[#626166]">Developer</span>
      </h1>
      <p className="mt-[10px] text-[#626166] max-w-[500px]">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <div className="col-three-wrap w-[100%+20px] flex ml-[-10px] mt-[50px]">
        <div className="col-three w-[22%] mx-[10px]">
          <span className="h2"> +3</span>
          <p className="small text-gray max-w-[120px]">YEARS OF EXPERIENCE</p>
        </div>
        <div className="col-three w-[25%] mx-[10px]">
          <span className="h2"> +46</span>
          <p className="small text-gray max-w-[120px]">PROJECTS COMPLETED</p>
        </div>
        <div className="col-three w-[25%] mx-[10px]">
          <span className="h2"> +20</span>
          <p className="small text-gray max-w-[120px]">WORLDWIDE CLIENTS</p>
        </div>
      </div>
      <div className="flex mt-[50px]">
        <div className="col-two w-[calc(50%-20px)] mx-[10px] bg-orange py-[30px] px-[20px] rounded-lg min-h-[240px]">
          <div className="icon mb-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(255, 255, 255)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h5>DYNAMIC ANIMATION, MOTION DESIGN</h5>
        </div>
        <div className="col-two w-[calc(50%-20px)] mx-[10px] bg-green py-[30px] px-[20px] rounded-lg min-h-[240px]">
          <div className="icon mb-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--token-796ee79d-fa4e-4408-bc78-57c89a70fe0d, rgb(21, 19, 18))"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              // style="width: 100%; height: 100%;"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h5 className="text-black">FRAMER, FIGMA, WORDPRESS, REACTJS</h5>
        </div>
      </div>
    </section>
  );
}
