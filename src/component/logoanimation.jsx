import React, { useEffect } from 'react';
import gsap from 'gsap';
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin'; 

const LogoAnimation = () => {

  // useEffect(() => { 
  //   // gsap.registerPlugin(DrawSVGPlugin);

  //   // gsap.fromTo("path", 
  //     { drawSVG: "0%" },
  //     // { drawSVG: "100%", duration: 2, ease: "none" }
  //   );
  // }, []);

  return (
    <svg className='logo-animation' width="50" height="70" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.02439 10.5L163.198 227.999L0 404.786H36.75L179.588 249.961L295.024 404.786H420L248.735 175.085L400.601 10.5H363.915L232.345 153.059L126.064 10.5H1.02439ZM55.061 37.5991H112.491L366.027 377.622H308.598L55.061 37.5991Z" fill="url(#paint0_angular_281_117)"/>
      <defs>
        <radialGradient id="paint0_angular_281_117" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210 207.643) rotate(90) scale(197.143 210)">
          <stop stop-color="#D7D7D7"/>
          <stop offset="0.0201114" stop-color="#A3A2A2"/>
          <stop offset="0.200011" stop-color="#A3A2A2"/>
          <stop offset="0.200111" stop-color="#C7C6C6"/>
          <stop offset="0.355111" stop-color="#A3A2A2"/>
          <stop offset="0.480111" stop-color="#A3A2A2"/>
          <stop offset="0.590111" stop-color="#A3A2A2"/>
          <stop offset="0.595111" stop-color="#A3A2A2"/>
          <stop offset="0.775111" stop-color="#A3A1A1"/>
          <stop offset="1" stop-color="#949292"/>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default LogoAnimation;
