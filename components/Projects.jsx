import React from "react";
import Image from "next/image";

const projectsData = [
  {
    title: "Clear Digital",
    description: "Digital Agency Website",
    image: "/clear_logo.jpg",
  },
  {
    title: "Veritone",
    description: "AI Solutions Website",
    image: "/veritone_logo.jpg",
  },
  {
    title: "Surescripts",
    description: "Healthcare Tech Website",
    image: "/surescripts_logo.png",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 data-aos="fade-up" className="font-bold uppercase">
        RECENT <span className="text-[#626166]">PROJECTS</span>
      </h2>
      <div className="wapper mt-[50px]">
        {projectsData.map((project, index) => (
          <div
            data-aos-delay={100 * (index + 1)}
            data-aos="fade-up"
            key={index}
            className="projectCard flex items-center mb-[30px]"
          >
            <div className="imageWrap max-w-[130px] max-h-[130px] w-full h-full text-[0] overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="contentWrap pl-[30px]">
              <h5>{project.title}</h5>
              <p className="small mt-[2px]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
