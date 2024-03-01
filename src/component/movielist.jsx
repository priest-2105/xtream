import React, { useEffect } from 'react'
import { useState } from 'react'


const MovieList = (props) => {


    return (
    <>  
    {props.movies.map((movie, index) => (
      <div className="container-fluid d-flex justify-content-start">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    ))}    


    </>
  )
}


export default MovieList
