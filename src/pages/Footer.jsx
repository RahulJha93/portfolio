import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useTheme } from "../components/ui/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();

  const footerClass =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800";

  return (
    <footer className={`w-full p-4 ${footerClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-l font-semibold">Rahul Jha</div>
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/rahuljha93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-jha-115723212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:rahulsjha24@gmail.com">
            <MdOutlineEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
