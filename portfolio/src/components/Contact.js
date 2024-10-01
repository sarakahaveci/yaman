import React from "react";
import contactme from "./contactme.jpeg"; // Import your image

const Contact = () => {
  return (
    <section id="contact" className="bg-indigo-900 py-20 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        {/* Contact Me Section */}
        <div className="w-full max-w-xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="border-b border-yellow-300 pb-5">Contact Me</span>
          </h2>
          <div className="text-lg text-white font-semibold">
            <p className="p-5"> 📧: sarakahaveci3@gmail.com</p>
            <p className="p-5">📱: +90 539 449 9533</p>
          </div>
        </div>

        {/* Contact Image */}
        <div className="w-full max-w-xl px-6">
          <div className="flex justify-center items-center">
            <img
              src={contactme}
              alt="Contact"
              className="rounded-full max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div style={{ height: "17vh" }}> </div>
    </section>
  );
};

export default Contact;
