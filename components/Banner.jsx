import React, { useEffect, useRef, useState } from "react";
import useCountUp from "../hooks/useCountUp";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 3, label: "Years of Experience" },
    { value: 46, label: "Projects Completed" },
    { value: 20, label: "Worldwide Clients" },
  ];

  const animatedCounts = stats.map((stat) =>
    useCountUp(isVisible ? stat.value : 0, 0, 2000)
  );

  const highlights = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      title: "Motion Design & Dynamic Animation",
      bg: "bg-orange",
      textColor: "text-white",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "Framer, Figma, WordPress, ReactJS",
      bg: "bg-green",
      textColor: "text-black",
    },
  ];

  // Detect if stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="banner no-padding-top">
      <h1 data-aos="fade-up" className="font-bold uppercase">
        Web <span className="text-[#626166]">Developer</span>
      </h1>
      <p
        data-aos-delay="300"
        data-aos="fade-up"
        className="mt-[10px] text-[#626166] max-w-[500px]"
      >
        I build clean, high-performing websites and apps focused on user
        experience, speed, and modern aesthetics.
      </p>

      <div
        data-aos-delay="600"
        data-aos="fade-up"
        className="col-three-wrap w-[100%+20px] flex ml-[-10px] mt-[50px]"
      >
        {stats.map((stat, index) => (
          <div key={index} className="col-three w-[25%] mx-[10px]">
            <span className="h2">{animatedCounts[index]}+</span>
            <p className="small text-gray max-w-[120px]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex mt-[50px]">
        {highlights.map((item, index) => (
          <div
            key={index}
            data-aos-delay={400 * (index + 3)}
            data-aos="fade-up"
            className={`col-two w-[calc(50%-20px)] mx-[10px] ${item.bg} py-[30px] px-[20px] rounded-lg min-h-[240px]`}
          >
            <div className="icon mb-[20px]">{item.icon}</div>
            <h5 className={item.textColor}>{item.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
