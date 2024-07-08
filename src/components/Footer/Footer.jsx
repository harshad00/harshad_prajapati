import React, {useState, useEffect} from  'react';
import { InstagramIcon, LinkedInIcon, CodepenIcon } from '../svgIcon/Svg';
import { Link } from 'react-router-dom';

const Footer = () => {

  // const [isconBtn, setIsconBtn] = useState(false); 
  // useEffect(() => {
  //   const handleLocationChange = () => {
  //     setIsconBtn(window.location.pathname === '/contact'); // Update state based on URL
  //   };

  //   // Add event listener for initial state and cleanup on unmount
  //   window.addEventListener('popstate', handleLocationChange);
  //   handleLocationChange(); // Call handler initially
  //   return () => window.removeEventListener('popstate', handleLocationChange);
  //  }, [isconBtn ,setIsconBtn]);
  return (
    <div>
 
<footer className="bg-black  text-white p-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Left side - Logo, Email, and Mobile */}
    <div className="text-center md:text-left mb-4 md:mb-0">
      <div className="text-2xl font-bold">HP</div>
      <div>Email: <a href="mailto:harshad00912@gmail.com" className="text-white">harshad00912@gmail.com</a></div>
      <div>Mobile: <a href="tel:+7874982315" className="text-white">7874982315</a></div>
    </div>

    {/* Center - Connect Button */}
    <div className="mb-4 md:mb-0">
   <Link to={'/contact'}>   <button className="bg-white text-black px-4 py-2 rounded">Connect Me</button> </Link>
    </div>

    {/* Right side - Social Icons */}
    <div className="flex space-x-5 p-2 rounded-md  bg-white">
      <a className='w-10' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon className="w-8 h-8" />
      </a>
      <a className='w-10' href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="w-6 h-6" />
      </a>
      <a className='w-10' href="https://x.com/home" target="_blank" rel="noopener noreferrer">
        <CodepenIcon className="w-6 h-6" />
      </a>
    </div>
  </div>
</footer>
  
    </div>
  );
}

export default Footer;

