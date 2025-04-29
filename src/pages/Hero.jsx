import React, { useState, useEffect } from "react";
import avatar from "../assets/img/avatar.png";
import { RiMailSendLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  const descriptions = [
    "Fullstack Developer",
    "Programmer",
    "Designer",
    "Coder",
  ];
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescriptionIndex(
        (prevIndex) => (prevIndex + 1) % descriptions.length
      );
    }, 2000); // Change description every 2 seconds
    return () => clearInterval(interval);
  }, [descriptions.length]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden object-cover rounded-full
     w-full max-w-[550px] h-auto
     sm:max-w-[300px] sm:max-h-[300px]
     lg:order-last lg:max-w-[400px] lg:max-h-[400px]"
            src={avatar}
          />

          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl/none">
                Hello I'am, Rahul Jha
              </h1>
              <p className="text-3xl tracking-tighter sm:text-5xl xl:text-4xl/none max-w-[600px] text-gray-500 md:text-2xl dark:text-gray-400 font-bold pt-3">
                {descriptions[currentDescriptionIndex]}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="mailto:rahulsjha24@gmail.com"
              >
                <div className="flex items-center gap-2">
                  <RiMailSendLine className="" /> <span>Hire Me</span>
                </div>
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://drive.google.com/file/d/1aN-xjb3MqKJ7lCiMyRJkmHwmgBcTt5h3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2">
                  <FiDownload /> <span> Resume</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
