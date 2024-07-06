import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);


const Card = ({ imgUrl, title, summary, project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          // markers: true, // Uncomment to see the markers for debugging
        },
      }
    );
  }, []);

  return (

    <div ref={cardRef} className="max-w-sm  border border-black rounded overflow-hidden shadow-lg m-4">
      <Link to={`/project/${title}`}>
      <img className="w-full" src={imgUrl} alt={title} />
      </Link>
      <div className="px-6  py-4">
        <div className="font-bold  text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
          {summary}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <Link to={`${project}`}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
         Go to project
        </span>
      </Link>
      </div>
    </div>
   
  );
};

export default Card;
