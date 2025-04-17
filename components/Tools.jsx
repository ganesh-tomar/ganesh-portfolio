import React from "react";
import Image from "next/image";

export default function Tools() {
  const tools = [
    {
      name: "React",
      description: "JavaScript library",
      logo: "/react_logo.png",
    },
    {
      name: "Next.js",
      description: "React framework",
      logo: "/nextjs_logo.png",
    },
    {
      name: "Firebase",
      description: "BaaS platform",
      logo: "/firebase_logo.png",
    },
    {
      name: "WordPress",
      description: "Content Management System",
      logo: "/wordpress_logo.webp",
    },
    {
      name: "JavaScript",
      description: "Programming language",
      logo: "/javascript_logo.png",
    },
  ];

  return (
    <section className="tools">
      <h2 className="font-bold uppercase">
        PREMIUM <span className="text-[#626166]">TOOLS</span>
      </h2>
      <div className="wapper flex flex-wrap mt-[50px]">
        {tools.map((tool, index) => (
          <div key={index} className="toolCard w-1/2 flex mb-[40px]">
            <div className="imageWrap max-w-[60px] max-h-[60px] w-full h-full text-[0] overflow-hidden rounded-lg">
              <Image
                src={tool.logo}
                alt={`${tool.name} Logo`}
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="contentWrap pl-[30px]">
              <h5>{tool.name}</h5>
              <p className="small">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
