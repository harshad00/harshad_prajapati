import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skllsH1Ref = useRef(null);
  const skllstextRef = useRef(null);
  const skllsimgRef = useRef(null);
  const skllsimgRef1 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skllsH1Ref.current,
        start: "top 60%",
        end: "bottom top",
        scrub: true,
        // markers: true, // Remove markers in production
      }
    });

    // Animation for skllsH1Ref
    tl.fromTo(
      skllsH1Ref.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );

    // Animation for skllstextRef
    tl.fromTo(
      skllstextRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1,0.3)" }
    );

    // Animation for skllsimgRef
    tl.fromTo(
      skllsimgRef.current,
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );

    // Animation for skllsimgRef1
    tl.fromTo(
      skllsimgRef1.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="w-full flex justify-center mb-10">
        <h1 ref={skllsH1Ref} className="text-4xl sm:text-5xl md:text-7xl font-bold">
          Skills
        </h1>
      </div>
      <div className="w-full flex justify-center py-5">
        <p ref={skllstextRef} className="w-full sm:w-[90%] md:w-[80%] text-center text-base sm:text-lg md:text-2xl font-mono">
          I possess a versatile skill set that includes full-stack development and UI/UX design. I am proficient in JavaScript, React, and Node.js, and have a keen eye for creating responsive and user-friendly interfaces. Additionally, I am experienced in database management and familiar with design tools like Figma. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
      </div>
      <div className="w-full overflow-hidden flex flex-col gap-10 items-center justify-center py-5">
        <div ref={skllsimgRef} className="flex flex-wrap justify-center gap-5">
          <img className="skill-img w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/html-5.png" alt="HTML5" />
          <img className="skill-img w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/css-3 (1).png" alt="CSS3" />
          <img className="skill-img w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/js.png" alt="JavaScript" />
          <img className="skill-img w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/python.png" alt="Python" />
          <img className="skill-img w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/download (2).jpeg" alt="Skill 1" />
          <img className="skill-img w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/download.jpeg" alt="Skill 2" />
        </div>
        <div ref={skllsimgRef1} className="flex flex-wrap justify-center gap-5">
          <img className="w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/github.png" alt="GitHub" />
          <img className="w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/git.png" alt="Git" />
          <img className="w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/figma.png" alt="Figma" />
          <img className="w-20 sm:w-24 md:w-28 hover:scale-110 hover:shadow-custom" src="./images/express.png" alt="Express.js" />
          <img className="w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/programing.png" alt="Programming" />
          <img className="w-10 sm:w-12 md:w-14 hover:scale-110 hover:shadow-custom" src="./images/physics.png" alt="Physics" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
