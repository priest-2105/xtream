import Navbar from './navbar';
import { TypeAnimation } from 'react-type-animation';
// import MovableElements from '../component/moveable';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {

  const wrapperRef = useRef(null);

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


    return (
        <div>

          <div className="home-page--outer--container">

          <svg class="home-page-arrows">
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
                <h1 className='xtream-hompeage-intro-animation'>Xtream</h1>
            </div>
              
                </div>  
                <Navbar/>
                  

          </div>
                
    </div>
  )
}

export default Home 