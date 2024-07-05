import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

function Image() {
  useGSAP( () =>
    gsap.from('.img-hero', 
      {
        x:200,
            delay:1,
            duration:2,
            opacity:0

      }
    )

  )
  return (
    <div className=' w-full flex items-center overflow-hidden justify-center'>
       <img className=' img-hero w-[80%]   h-[70vh]  rounded-[2%] ' src='.\images\home-img.png' alt="not" />
    </div>
  );
}

export default Image;
