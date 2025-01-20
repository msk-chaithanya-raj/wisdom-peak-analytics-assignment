import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:text-gray-200 transition duration-300"
        >
          User Directory
        </Link>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
