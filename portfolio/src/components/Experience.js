import React from "react";

const experienceData = [
  {
    title: "Freelance Software Developer - Present",
    location: "Istanbul",
    period: "Freelancing",
    responsibilities: [
      "Built Alharamain website for a client",
      "Built my portfolio",
    ],
  },
  {
    title: "Front-end Developer - Yonetim Academy",
    location: "Istanbul",
    period: "June 2022 - December 2022 (Contract 6 months)",
    responsibilities: ["Developed a new website with React.js and APIs."],
  },
  {
    title: "Front-end Developer - Leon Invent Inc.",
    location: "USA",
    period: "April 2022 - May 2022 (Freelance)",
    responsibilities: [
      "Developed a new website with Nuxt.js and APIs in one month.",
    ],
  },
  {
    title: "Front-end Developer - Emir Dijital",
    location: "Istanbul",
    period: "December 2021 - April 2022 (Full-time)",
    responsibilities: [
      "Debugged WellIn app and Yapbitakas websites in four months.",
    ],
  },
  {
    title: "Front-end Developer - Acar Yatak",
    location: "Istanbul",
    period: "February 2021 - March 2021 (Freelance)",
    responsibilities: [
      "Worked on the main website, Acar Yatak, for one month.",
    ],
  },
  {
    title: "Internship - Blulogix",
    location: "Istanbul",
    period: "December 2020 - January 2021",
    responsibilities: [
      "Trained to use Angular and developed a simple E-commerce website in one month.",
    ],
  },
];

const Experience = () => {
  // Sort the experienceData array based on the period (assuming the period contains years)
  const sortExperienceData = experienceData.slice().sort((a, b) => {
    const aYear = parseInt(a.period.split(" - ")[0]);
    const bYear = parseInt(b.period.split(" - ")[0]);
    return aYear - bYear;
  });

  return (
    <section id="experience" className="bg-indigo-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="border-b border-yellow-300 pb-5">
            Work Experience
          </span>
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <div key={index} className="p-4 border border-gray-800 rounded-md">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300">{item.location}</p>
              <p className="text-gray-300">{item.period}</p>
              <ul className="list-disc list-inside pl-4 text-gray-300">
                {item.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
