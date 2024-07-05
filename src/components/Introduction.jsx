import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { Link } from 'react-router-dom';

function Introduction() {
 

    useGSAP(
      () => {
        gsap.from('.text-h1',
          {
            y:-50,
            delay:1,
            duration:2,
            opacity:0
        })

        gsap.from('.text-h2',
          {
            y:50,
            delay:1.2,
            duration:2,
            opacity:0,
          }
        )
        gsap.from('.text-p',
          {
            x:50,
            delay:1.5,
            duration:2,
            opacity:0,
          }
        )
        
        gsap.from('.btn-hero',
          {
           scale:0,
            delay:1.5,
            duration:2,
            opacity:0,
          }
        )
        

      }
    )




  return (
<div className='w-full flex gap-5 flex-col justify-center items-center pt-5 sm:pt-16 md:pt-12 lg:pt-8'>
  <h1 className='text-h1 text-center text-3xl sm:text-5xl md:text-5xl'>Hi, I&apos;m Harshad Prajapati</h1>
  <h2 className='text-h2 text-2xl sm:text-2xl md:text-3xl pt-3 text-blue-600'>Web Developer & Designer</h2>
  <p className='text-p pt-5 font-semibold text-center px-4 sm:px-8 md:px-16'>Passionate About Creating Seamless Digital Experiences</p>
 <Link  to={'/contact'} >  <button className='btn-hero text-white hover:bg-blue-700 p-2 w-32 sm:w-40 md:w-48 my-3 sm:mt-20  rounded-md bg-blue-500'>Contact Me</button></Link>
</div>

  );
}

export default Introduction;
 