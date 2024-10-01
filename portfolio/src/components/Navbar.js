// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "./favicon.ico";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-indigo-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-300"
          >
            {menuOpen ? "X" : "|||"}
          </button>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex space-x-4 mt-4 md:mt-0 md:space-x-4`}
        >
          <li>
            <Link
              to="/"
              className={`text-white ${
                menuOpen ? "ml-4" : ""
              } hover:text-yellow-300`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-yellow-300">
              About me
            </Link>
          </li>
          <li>
            <Link
              to="/technical-skills"
              className="text-white hover:text-yellow-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-yellow-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-yellow-300">
              Contact me
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <a
              href="https://github.com/sarakahaveci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/sara-kahveci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
