import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './component/movielist';
import { Row } from 'react-bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './layout/home';


function App() {
  
  

  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const url = "http://www.omdbapi.com/?s=avatar&apikey=fab886bf";
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home /> ,
  },
  {
    path: "/here",
    element:<MovieList movies={movies} /> ,
  },  
]);


  return (
    <div className="App">
      <div className="row">
        {/* <MovieList movies={movies} /> */}
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
