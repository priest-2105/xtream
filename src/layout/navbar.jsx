import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
 
 
 
    return (
    <div>
        
        
        <div className="top--navbar--container">

            <div className="top--navbar--logo">X Movies</div>

                <div className="top--navbar--menu">

                <Link>Home</Link>    

                <Link>Movies</Link>    

                <Link>Series/TV</Link>    

                <Link>Home</Link>    

                <Link>Home</Link>    


                </div>


        </div>
        



    </div>
  )
}

export default Navbar