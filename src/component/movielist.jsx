import React  from 'react'


const MovieList = ({ showMovieList }) => {

 

    return (
    <>  
    {/* {props.movies.map((movie, index) => (
      <div className="container-fluid d-flex justify-content-start">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    ))}     */}
    <div className="movie--list-page--container">
      

    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}>

    <div className="movie-list-each-bottom-description">
      <h3>MOvie Title</h3>
      <p>This is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the movie descriptio</p>
    </div>
 
     </div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}>  
    <div className="movie-list-each-bottom-description">
      <h3>MOvie TitleMOvie TitleMOvie TitleMOvie TitleMOvie Title</h3>
      <p>This is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the moThis is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the moThis is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the moThis is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the moThis is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the moThis is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the movie descriptio</p>
    </div> </div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}>  
    <div className="movie-list-each-bottom-description">
      <h3>MOvie Title</h3>
      <p>This is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the movie descriptio</p>
    </div> </div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}>   
    <div className="movie-list-each-bottom-description">
      <h3>MOvie Title</h3>
      <p>This is the movie description This is the movie descriptio
      This is the movie descriptioThis is the movie descriptio
      This is the movie descriptioThis is the movie descriptio</p>
    </div></div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}> </div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}> </div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}> </div>  
      
    <div className={`movie-list-each ${showMovieList ? 'show' : ''}`}> </div>  
      
      
      
       </div>

    </>
  )
}


export default MovieList
