import React from "react";
import Img1 from "../assets/img/Img1.png";
import Img2 from "../assets/img/movieo.png";
import Img3 from "../assets/img/project3.png";
import { FaGithub } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";

const Project = () => {
  const projects = [
    {
      image: Img2,
      title: "Movieo App",
      description: "A responsive movie and TV show discovery app built with React, Redux, and TMDB API integration for real-time data on popular, trending, and upcoming releases.",
      github: "https://github.com/RahulJha93/Movieo",
      liveLink: "https://movieo-lac.vercel.app/",
    },
    {
      image: Img1,
      title: "UrbanHub-Ecommerce Store",
      description: "An eCommerce platform using the MERN stack with user authentication, admin dashboard, and Stripe integration for secure online transactions.",
      github: "https://github.com/RahulJha93/urbanhub",
      liveLink: "https://urbanhub.vercel.app/",
    },
    {
      image: Img3,
      title: "Weathervue App",
      description: "A weather app built with React and JavaScript that provides real-time weather data and forecasts for various locations using a clean, user-friendly interface.",
      github: "https://github.com/RahulJha93/WeatherApp",
      liveLink: "https://rahul-jha-weathervue.netlify.app/",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
        My Latest Projects
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid gap-6 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <span className="sr-only">View Project</span>
              <img
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-4">{project.description}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center p-4">
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <FaGithub />
                    <span>Github</span>
                  </div>
                </a>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <CgMediaPodcast /> <span>Live</span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
