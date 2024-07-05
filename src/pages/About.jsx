import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function About() {

  const pdfUrl = "./mypdf/Hrashad Prajapati (1).pdf"

  const [isAboutPage, setIsAboutPage] = useState(false); 
  useEffect(() => {
    const handleLocationChange = () => {
      setIsAboutPage(window.location.pathname === '/about'); // Update state based on URL
    };

    // Add event listener for initial state and cleanup on unmount
    window.addEventListener('popstate', handleLocationChange);
    handleLocationChange(); // Call handler initially
    return () => window.removeEventListener('popstate', handleLocationChange);
   }, []);
  const aboutH1Ref = useRef(null);
  const abouttextRef = useRef(null);
  const aboutimgRef = useRef(null);
  const aboutbtnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutH1Ref.current,
        start: "top 60%",
        end: "bottom top",
        scrub: true,
        // markers: true // Remove markers in production
      }
    });

    // Animation for aboutH1Ref
    tl.fromTo(
      aboutH1Ref.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );

    // Animation for aboutimgRef
    tl.fromTo(
      aboutimgRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=1" // Offset the animation by 1 second relative to the previous animation
    );

    // Animation for abouttextRef
    tl.fromTo(
      abouttextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5" // Offset the animation by 0.5 seconds relative to the previous animation
    );

    // Animation for aboutbtnRef
    tl.fromTo(
      aboutbtnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5" // Offset the animation by 0.5 seconds relative to the previous animation
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full justify-between p-4">
    {isAboutPage ? (
       < div className="flex justify-center py-32">   
       
          <div className="flex   flex-col flex-nowrap items-center md:justify-between  md:items-start md:w-[30%] mb-4 md:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-0">
          About
        </h1>
        <img
          ref={aboutimgRef}
          className="rounded-full  w-40 sm:w-52 md:w-60"
          src="./images/profile-pic.png"
          alt=""
        />
      </div>
      <div className="md:w-[70%] text-justify flex-col flex justify-start items-start">
        <p className="text-pretty text-lg sm:text-xl md:text-2xl mb-4" >
          I am a skilled full-stack developer with a passion for developing
          innovative programs that expedite the efficiency and effectiveness
          of organizational success. Well-versed in technology and writing
          code to create systems that are reliable and user-friendly. Adept at
          identifying opportunities to enhance performance and implementing
          technology solutions in a way that optimizes productivity.
          Proficient in an assortment of technologies, including JavaScript,
          React, Node.js, and more.
        </p>
        <button
          // ref={aboutbtnRef}
          className=" text-white hover:bg-blue-700 p-2 w-[90%] sm:w-[60%] md:w-40 my-3 sm:mt-10 md:mt-20 rounded-md bg-blue-500"
        >
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download>
          Download Resume
      </a>
        </button>
      </div>
      </div>
      ):( 
        <>      <div className="flex flex-col flex-nowrap items-center md:justify-between  md:items-start md:w-[30%] mb-4 md:mb-0">
        <h1 ref={aboutH1Ref} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-0">
          About
        </h1>
        <img
          ref={aboutimgRef}
          className="rounded-full  w-40 sm:w-52 md:w-60"
          src="./images/profile-pic.png "
          alt="not"
        />
      </div>
      <div className="md:w-[70%] text-justify flex-col flex justify-start items-start">
        <p className="text-pretty text-lg sm:text-xl md:text-2xl mb-4" ref={abouttextRef}>
          I am a skilled full-stack developer with a passion for developing
          innovative programs that expedite the efficiency and effectiveness
          of organizational success. Well-versed in technology and writing
          code to create systems that are reliable and user-friendly. Adept at
          identifying opportunities to enhance performance and implementing
          technology solutions in a way that optimizes productivity.
          Proficient in an assortment of technologies, including JavaScript,
          React, Node.js, and more.
        </p>
        <button
          ref={aboutbtnRef}
          className=" text-white hover:bg-blue-700 p-2 w-[90%] sm:w-[60%] md:w-40 my-3 sm:mt-10 md:mt-20 rounded-md bg-blue-500"
        >
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download>
          Download Resume
      </a>
          
        </button>
      </div>
      </>
       )}
    </div>
  );
}

export default About;
