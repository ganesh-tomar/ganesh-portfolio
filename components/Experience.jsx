import React from "react";

export default function Experience() {
  const experienceData = [
    {
      company: "Bright Code",
      description:
        "Led a cross-functional team in building responsive mobile and web applications. Focused on enhancing user experience, boosting engagement, and implementing scalable front-end architecture.",
    },
    // {
    //   company: "NovaTech Studio",
    //   description:
    //     "Collaborated with designers and backend developers to deliver clean, performant React interfaces and reusable components for client-facing platforms.",
    // },
    // {
    //   company: "PixelCraft Labs",
    //   description:
    //     "Spearheaded the transition from legacy codebases to modern frameworks, improving load time by 40% and increasing maintainability.",
    // },
  ];

  return (
    <section className="experience">
      <h2 className="font-bold uppercase">
        3+ Years of <span className="text-[#626166]">Experience</span>
      </h2>
      <div className="wapper mt-[50px]">
        {experienceData.map((item, index) => (
          <div key={index} className="experienceCard mb-[30px]">
            <div className="contentWrap">
              <h5>{item.company}</h5>
              <p className="small mt-[2px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
