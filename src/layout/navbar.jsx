import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
 
 
 
    return (
    <div>
        
        
        <div className="top--navbar--container">

            <div className="top--navbar--logo"><img src="/assets/img/Frame 1.png" alt="logo" height={100} width={100} /></div>

                <div className="top--navbar--menu">

                <li> <Link>Home</Link></li>    


                <li> <Link>Movie</Link></li>    


                <li> <Link>TV / Series</Link></li>    


                <li> <Link>Animation</Link></li>    


                <li> <Link>Home</Link></li>    


                </div>


        </div>
        



    </div>
  )
}

export default Navbar