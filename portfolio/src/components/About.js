import React from "react";
import Experience from "./Experience";

const educationData = [
  {
    institution: "Udemy Online Course",
    program: "Vue - The Complete Guide (w/ Router, Vuex, Composition API)",
    period: "2021-2022",
  },
  {
    institution: "Recoded Bootcamp (Re:Coded + Flatiron School)",
    program: "Front End Web Development (HTML, CSS, JavaScript, React)",
    period: "2020-2021",
    details:
      "5-month intense web development program run by Re: Coded with Flatiron School's curriculum.",
  },
  {
    institution: "Marmara University, Istanbul",
    program: "Bachelors in Computer Science and Engineering",
    period: "2014-2020",
  },
  {
    institution: "University of Michigan (Coursera)",
    program:
      "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    period: "2019",
    details:
      "Certified certificate in HTML5, CSS3, Interactivity with JavaScript, and Advanced Styling with Responsive Design.",
  },
];

const languagesData = [
  "Arabic (Native)",
  "English (Advanced)",
  "Turkish (Intermediate)",
];

const recommendationData = [
  {
    name: "Fikret Anıl Özörnek",
    email: "Anilozornek@emirdijital.com",
    phone: "+90 (554) 661 34 82",
  },
  {
    name: "Barış Bilen Vural",
    email: "barisbilenvural@yonetim.academy",
    phone: "+90 (531) 583 32 02",
  },
];

const About = () => {
  return (
    <>
      <div className="flex-col justify-center items-center">
        <section id="about" className="bg-indigo-900 text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="border-b border-yellow-300 pb-5">About Me</span>
            </h2>
            <p className="text-lg md:text-xl leading-loose pt-5">
              With an international background, I am a dedicated Front-End
              Developer who holds
              <br />
              a bachelor's degree in computer science and engineering from
              Marmara University.
              <br />
              To enhance my development skills, I successfully completed the
              <br />
              Front-End Development bootcamp at the Flatiron School.
              Additionally, I pursued <br />
              further education in web development through online courses at
              Washington University.{" "}
            </p>
            <p className="mt-6 text-lg md:text-xl leading-loose">
              I have more than three years of experience, including working as a
              freelancer for a U.S. company and collaborating with Turkish
              companies. This experience has taught me how to adapt to different
              situations and focus on satisfying the needs of customers. I'm
              good at combining creativity and technical skills to create
              visually appealing and strong solutions. I'm eager to explore new
              opportunities and contribute to innovative projects.
            </p>
          </div>
        </section>
        <Experience />
        <section id="education" className="bg-indigo-900 text-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="border-b border-yellow-300 pb-5">Eduaction</span>
            </h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-800 rounded-md"
                >
                  <h3 className="text-xl font-semibold">{item.institution}</h3>
                  <p className="text-gray-300">{item.program}</p>
                  <p className="text-gray-300">{item.period}</p>
                  {item.details && (
                    <p className="text-gray-300 mt-2">{item.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="languages" className="bg-indigo-900 text-white py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="border-b border-yellow-300 pb-5">Languages</span>
            </h2>
            <ul className="list-disc list-inside text-xl text-gray-300">
              {languagesData.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </section>
        <section
          id="recommendations"
          className="bg-indigo-900 text-white py-16"
        >
          <section
            id="recommendations"
            className="bg-indigo-900 text-white py-16"
          >
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="border-b border-yellow-300 pb-5">
                  Recommendations
                </span>
              </h2>
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {recommendationData.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-800 rounded-md"
                  >
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-300">Email: {item.email}</p>
                    <p className="text-gray-300">Phone: {item.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default About;
