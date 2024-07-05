import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/Card";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [isprojectPage, setIsProjectPage] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsProjectPage(window.location.pathname === "/projects");
    };

    window.addEventListener("popstate", handleLocationChange);
    handleLocationChange();
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const projectData = [
    {
      imgUrl: "src/images/cardimg/project1.png",
      title: "Mother's Market",
      summary:
        "This is a brief summary of the project. It explains the main features and objectives in a concise manner.",
      project: "https://mothers-market.netlify.app/",
      gitUrl: "",
    },
    {
      imgUrl: "src/images/cardimg/Screenshot 2024-07-03 161750.png",
      title: "Blog App",
      summary:
        "This is a brief summary of the project. It explains the main features and objectives in a concise manner.",
      project:
        "https://my-blog-appwrite-git-main-harshad00s-projects.vercel.app/",
    },
    {
      imgUrl: "./images/cardimg/omg.png",
      title: "OMG",
      summary:
        "This is a brief summary of the project. It explains the main features and objectives in a concise manner.",
      project: "",
      gitUrl: "",
    },
  ];

  const ProjectH1Ref = useRef(null);

  useEffect(() => {
    if (ProjectH1Ref.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ProjectH1Ref.current,
          start: "top 60%",
          end: "bottom top",
          scrub: true,
          // markers: true, // Uncomment to see the markers for debugging
        },
      });
      tl.fromTo(
        ProjectH1Ref.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5 }
      );
    }
  }, []);

  return (
    <>
     {isprojectPage ? ( 
      <div className="flex flex-col items-center py-10 px-4">
      <div className="w-full flex justify-center mb-10">
        <h1
          // ref={ProjectH1Ref}
          className="text-4xl sm:text-5xl md:text-7xl font-bold"
        >
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center items-center bg-gray-100">
        {projectData.map((d) => (
          <Card
            key={d.title}
            imgUrl={d.imgUrl}
            title={d.title}
            summary={d.summary}
            project={d.project || "/error"}
          />
        ))}
      </div>
    </div>
      
      
     
    ) : (
       <h1> <div className="flex flex-col items-center py-10 px-4">
      <div className="w-full flex justify-center mb-10">
        <h1
          ref={ProjectH1Ref}
          className="text-4xl sm:text-5xl md:text-7xl font-bold"
        >
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center items-center bg-gray-100">
        {projectData.map((d) => (
          <Card
            key={d.title}
            imgUrl={d.imgUrl}
            title={d.title}
            summary={d.summary}
            project={d.project || "/error"}
          />
        ))}
      </div>
    </div> </h1> )}
     </>
    
  );
}

export default Projects;
