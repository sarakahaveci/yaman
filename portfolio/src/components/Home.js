import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Add class to body to prevent scrolling
    document.body.classList.add("overflow-hidden");

    const container = document.getElementById("home");
    const lights = document.createElement("div");
    lights.className = "lights";
    container.appendChild(lights);

    return () => {
      // Remove class from body when component unmounts
      document.body.classList.remove("overflow-hidden");
      container.removeChild(lights);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden h-screen">
      <div className="lights"></div>

      <section className="parallax">
        <div className="text-center">
          <h1 className="text-indigo-900 mt-4 text-6xl font-bold mb-6">
            Yaman Kahveci
          </h1>
          <span className="custom-span md:text-xl sm:text-lg text-indigo-900 mt-4">
            Passionate front-end developer with global experience and a
            hunger for innovation.
          </span>
          <div className="hero-buttons mt-5 flex justify-center">
          <Link
          to="/projects"
          className="bg-indigo-700 text-white py-2 px-6 rounded-lg m-2"
        >
          See My Work
        </Link>
        <Link
          to="/contact"
          className="bg-transparent text-white bg-indigo-900 py-2 px-6 border border-indigo-900 rounded-lg m-2"
        >
          Get in Touch
        </Link>          </div>
        </div>
        
        <div className="parallax-content">
          <div className="mt-5 inset-0 flex flex-col justify-center items-center text-white z-10">
            <div className="container mx-auto flex flex-col justify-center items-center h-full">
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
