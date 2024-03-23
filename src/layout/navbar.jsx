import React from 'react';
import { motion, motionValue } from "framer-motion";
import { Link } from 'react-router-dom';
import LogoAnimation from '../component/logoanimation';


const Navbar = () => {

    const togglemenu = (event) => {
        if (window.innerWidth <= 991) {
          const nav = document.querySelector('.top--navbar--menu');
          nav.classList.toggle('nav--menu--active');
        }
      }

  return (
    <div>
      <div className="top--navbar--container">
        <div className="top--navbar--logo" id="box" data-value="-9">
          <LogoAnimation />
          {/* <img src="/assets/img/Frame 1.png" alt="logo" height={100} width={100} /> */}
        </div>
        <div className="top--navbar--menu">
          <li> <Link>Home</Link></li>
          <li> <Link>Movie</Link></li>
          <li> <Link to="/moviedetails">TV / Series</Link></li>
          <li> <Link>Animation</Link></li>
          <li> <Link>Home</Link></li>
        </div>
        <motion.button onClick={togglemenu} className='nav--menu--toggler' drag="y" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.5}>
          <img src="/assets/img/navbar/icons8-menu-480.png" height={50} width={50} alt="" />
        </motion.button>
      </div>
    </div>
  )
}

export default Navbar