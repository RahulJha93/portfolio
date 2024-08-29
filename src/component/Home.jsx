import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Project from "@/pages/Project";
import Navbar from "@/pages/Navbar";
import Footer from "@/pages/Footer";

const Home = () => {
  return (
    <>
     <section className="px-9">
      <div className="flex flex-col min-h-[100dvh]" id="home">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
      </div>
    </section>
    <Footer/>
    </>
   
  );
};
export default Home;


