import React from "react";
import { Introduction, Image } from "../components";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
// import Contact from "./Contact";

function Hero() {
  return (
   <>
   <div className="flex pt-0 h-screen flex-col sm:pt-7 md:flex-row justify-around py-10">
      <Introduction />
      <Image />
    </div>

    <section className="m-10 " >
    <About/>

    </section>
    <section className="m-10 " >
    <Skills/>

    </section>
    <section className="m-10 " >
  <Projects/>

    </section>
    
    
    </>
  );
}

export default Hero;
