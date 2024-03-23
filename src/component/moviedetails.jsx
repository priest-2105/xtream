import React, { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SimilarMovieList from './similarmovies';
import MoviePlayer from './movieplayer';

const MovieDetails = () => {

 
  const [backgroundGradient, setBackgroundGradient] = useState('transparent');
  const imageSrc = '/assets/img/movieposters/Movie Poster 100.jpg';
  const imgRef = useRef();
  const [textColor, setTextColor] = useState('#000'); 
  const [isMoviePlayerOpen, setIsMoviePlayerOpen] = useState(false);
  


  useEffect(() => {
    const imgEl = imgRef.current;
    if (imgEl.complete) {
      extractColors(imgEl);
    } else {
      imgEl.onload = () => extractColors(imgEl);
    }
  }, []);

  // Convert RGB to relative luminance
const getRelativeLuminance = ([r, g, b]) => {
  const a = [r, g, b].map(function(v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Decide on text color based on luminance
const decideTextColor = (rgb) => {
  const luminance = getRelativeLuminance(rgb);
  return luminance > 0.179 ? '#000' : '#FFF';
};



  const invertColor = (rgb) => {
    return rgb.map(color => 255 - color);  
  };

  const extractColors = (imageElement) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = imageElement.naturalWidth;
    canvas.height = imageElement.naturalHeight;
    context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
    
    // Adjust these values as needed to avoid white borders
    const offset = {
      x: Math.round(canvas.width * 0.05), 
      y: Math.round(canvas.height * 0.05)     
    };
  
    const bottomRightOffset = {
      x: Math.round(canvas.width * 0.9), 
      y: Math.round(canvas.height * 0.9) 
    };
    
    // Sample the color a bit inward from the top left to avoid white borders
    const topLeftPixel = context.getImageData(offset.x, offset.y, 1, 1).data;
    const topLeftColor = `rgb(${topLeftPixel[0]}, ${topLeftPixel[1]}, ${topLeftPixel[2]})`;
  
    // Sample the color at the center
    const centerPixel = context.getImageData(canvas.width / 2, canvas.height / 2, 1, 1).data;
    const centerColor = `rgb(${centerPixel[0]}, ${centerPixel[1]}, ${centerPixel[2]})`;
   

    // Sample the color a bit inward from the bottom right to avoid white borders
    const bottomRightPixel = context.getImageData(bottomRightOffset.x, bottomRightOffset.y, 1, 1).data;
    const bottomRightColor = `rgb(${bottomRightPixel[0]}, ${bottomRightPixel[1]}, ${bottomRightPixel[2]})`;
  
  // Invert the center color for text
   const invertedColor = invertColor([centerPixel[0], centerPixel[1], centerPixel[2]]);
  //  const textColor = `rgb(${invertedColor[0]}, ${invertedColor[1]}, ${invertedColor[2]})`;

  // Set state for both gradient and text color
  setBackgroundGradient(`linear-gradient(to bottom right, ${topLeftColor}, ${centerColor}, ${bottomRightColor})`);
  const dynamicTextColor = decideTextColor([centerPixel[0], centerPixel[1], centerPixel[2]]);
  setTextColor(dynamicTextColor);
};


  
  const togglemovieplayer = () => {
    setIsMoviePlayerOpen(prevState => {
      if (prevState) {
        return false;
      } else {
        return true;
      }
    });
  }
  
 
  return (
    <>
    <div>{isMoviePlayerOpen &&<MoviePlayer togglemovieplayer={isMoviePlayerOpen} />}</div>

    <div className="movie-details-container">

    <div className="movie-container-inner">

    <div className='movie-details-background-color-picker' style={{ background: backgroundGradient}}>
      <div className="movie-details-image-poster-container">
        <div className="movie-details-image-poster">
          <img ref={imgRef} src={imageSrc} alt="Movie title"/>
          </div>
          <div className="movie-details-summary" style={{ color: textColor }}>
             <div className="small-width-movie-detail-summary">
             <div className="small-width-movie-details-image-poster">
              <img ref={imgRef} src={imageSrc} alt="Movie title"/>
              </div>
           <div className="small-width-movie-details-image-poster-title-container">
            <button onClick={togglemovieplayer}> {/* <span> Watch Now </span> */} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg> </button>

          <h2><TypeAnimation sequence={['STARWARS: LEGACY',2000, ]} cursor={false} speed={50} repeat={1}
              /></h2> 
            </div> 
           </div> 
       
          <p><TypeAnimation sequence={['Follow the mythic journey of Paul Atreides as he unites with Chani  and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee',2000, ]}speed={90} repeat={1}/></p>
          <div className="movie-details-summary-details">
           <li><b> Released:</b> <TypeAnimation sequence={['2024-02-27',2000, ]} cursor={false} speed={50} repeat={1}/> </li> 
            <li><b>Genre:</b> <TypeAnimation sequence={[' Science Fiction, Adventuret',2000, ]} cursor={false} speed={50} repeat={1}/> </li> 
            <li><b> Duration:</b> <TypeAnimation sequence={['167 min',2000, ]} cursor={false} speed={50} repeat={1}/></li> 
            <li><b> Country:</b> <TypeAnimation sequence={['United States of America',2000, ]} cursor={false} speed={50} repeat={1}/></li>
            <li><b> Production:</b> <TypeAnimation sequence={['Legendary Pictures, Legendary Entertainment',2000, ]} cursor={false} speed={50} repeat={1}/> </li>
            {/* <li><b> Casts: </b> <TypeAnimation sequence={['Josh Brolin, Dave Bautista, Tony Cook, Italo Amerighi, Stellan Skarsgård',2000, ]} cursor={false} speed={50} repeat={1}/></li>  */}
        </div> </div>  
          </div>


        <div className="movie-details-cast-list-container" style={{ color: textColor }}>
          <h2>CAST</h2>
        <div className="movie-details-cast-list">

        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (2).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (3).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (4).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (5).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (6).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (7).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (7).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (7).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>
        <div className="movie-details-cast-list-each">
          <img src="/assets/img/casts/download (7).webp" alt="" />
          <h5>Bruce Wayne</h5>
          <p>Robert Pattisson </p>
          </div>

       </div>
     
       </div>








       <div>
        <SimilarMovieList textColor={textColor} backgroundGradient={backgroundGradient}/>
       </div>


      </div>

    </div>

    </div>

    </>
  )
}

export default MovieDetails