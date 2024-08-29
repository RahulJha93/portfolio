import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript className="w-16 h-16" /> },
  { name: "React", icon: <FaReact className="w-16 h-16" /> },
  { name: "Python", icon: <FaPython className="w-16 h-16" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-16 h-16" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="w-16 h-16" /> },
  { name: "Bootstrap", icon: <BsBootstrapFill className="w-16 h-16" /> },
  { name: "Java", icon: <FaJava className="w-16 h-16" /> },
  { name: "SQL", icon: <DiMysql className="w-16 h-16" /> },
  { name: "MongoDB", icon: <DiMongodb className="w-16 h-16" /> },
  { name: "Postman", icon: <SiPostman className="w-16 h-16" /> },
];

const About = () => {
  return (
    <section
      className="w-full py-8 md:py-16 lg:py-24 bg-gray-100 dark:bg-gray-800"
      id="about"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-4">
              About Me
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I am a full-stack developer with a passion for creating
              user-friendly and visually appealing web applications. I have
              experience in a variety of technologies, including React, Tailwind
              CSS, and Node.js.
            </p>
          </div>
        </div>

        <section id="skills" className="w-full py-8 md:py-16 lg:py-24">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-4">
                  My Skills
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out the programming languages and frameworks I'm
                  proficient in.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  {skill.icon}
                  <p className="text-sm font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
