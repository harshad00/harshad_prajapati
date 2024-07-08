import React, { useState, useEffect } from 'react';
import projectData from './ProjectData'; // Assuming projectData is imported
import { Link } from 'react-router-dom';

const ProjectComparison = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(
    decodeURIComponent(window.location.pathname.split('/').pop()) // Extract district from URL
  );

  const [matchingProjects, setMatchingProjects] = useState([]);

  useEffect(() => {
    const matchProjects = projectData.filter(
      (project) => project.title === selectedDistrict
    );
    setMatchingProjects(matchProjects);
  }, [selectedDistrict]);

  return (
    <div className="p-6  bg-gray-100">
      <h2 className="text-5xl text-black/75 font-bold mb-4">Projects for District: {selectedDistrict}</h2>
      {matchingProjects.length > 0 ? (
        <ul className=" w-full ">
          {matchingProjects.map((project) => (
            <li
              key={project.title}
              className=" w-full bg-white justify-center shadow-md rounded-lg p-6 flex flex-col items-center space-y-4 "
            >
              <img
                className="w-[60%] h-[50vh]  rounded-lg object-cover mb-4 "
                src={`.${project.imgUrl}`}
                alt={`${project.title}`}
              />
              <div className="w-[60%] flex-1">
                <h3 className="text-3xl   font-semibold mb-2">{project.title}</h3>
                <label htmlFor="" className='text-xl font-semibold'>Description:</label>
                <p className="text-gray-700  mb-4"> {project.summary}</p>
                <div className=' flex gap-2'>
                <Link
                  to={project.project}
                  className="text-white bg-blue-400 rounded-md hover:bg-blue-700    p-2 hover:underline"
                >
                  Go to project
                </Link>
                <Link
                  to={project.gitUrl}
                  className="text-white bg-blue-400 rounded-md hover:bg-blue-700    p-2 hover:underline"
                >
                  Go to Github
                </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No projects found for this district.</p>
      )}
    </div>
  );
};

export default ProjectComparison;
