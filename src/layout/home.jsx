import Navbar from './navbar';
import { TypeAnimation } from 'react-type-animation';
// import MovableElements from '../component/moveable';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import MovieList from '../component/movielist';



const Home = () => {

  const wrapperRef = useRef(null);
  const [showMovieList, setShowMovieList] = useState(false);


  useEffect(() => {
    const throttledMouseMoveHandler = (e) => {
      // Throttle logic or use a library like lodash.throttle
      const movableElements = wrapperRef.current.querySelectorAll('.movable');
      movableElements.forEach((element) => {
        const shiftValue = parseInt(element.getAttribute('data-value'), 10);
        const moveX = (e.clientX * shiftValue) / 250;
        const moveY = (e.clientY * shiftValue) / 250;
        
        gsap.to(element, { x: moveX, y: moveY, duration: 1 });
      });
    };

    const wrapper = wrapperRef.current;
    wrapper.addEventListener('mousemove', throttledMouseMoveHandler);

    return () => {
      wrapper.removeEventListener('mousemove', throttledMouseMoveHandler);
    };
  }, []);



  const toggleMovieList = () => {
    setShowMovieList(!showMovieList);
  };

    return (
        <div>

          <div className="home-page--outer--container">

          <svg class="home-page-arrows" onClick={toggleMovieList}>
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
            
            
            <div className="home-page--intro" ref={wrapperRef}> 
    
            <div className='home-page--wallpaper movable'  id="box" data-value="-9">
            </div>
            
            <div className='col-6 movable'  id="box" data-value="-3">  <h6>Watch<TypeAnimation
                sequence={[
                  ' Movies',
                  2000,
                  ' Tv Series',
                  2000,
                  ' Animations',
                  2000,
                ]}
                speed={50}
                className='ms-3'
                repeat={Infinity}
              /> on</h6>
                <div className="home-page-intro-text-container"> 
                 <svg width="120" height="150"   viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <h1 className='xtream-hompeage-intro-animation'> TREAM</h1>
                  </div> 
            </div>
              
                </div>  
                <Navbar/>
                  
                <div className={`movie-list-outer-container ${showMovieList ? 'show' : ''}`}>
               
                  <MovieList showMovieList={showMovieList} toggleMovieList={toggleMovieList}  />
                </div>

          </div>
                
    </div>
  )
}

export default Home 