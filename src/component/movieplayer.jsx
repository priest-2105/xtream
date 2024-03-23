import React, { useRef } from 'react';

const MoviePlayer = () => {

  const videosrc = '../../assets/video/Video.mp4';

  const videoRef = useRef(null);
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

return (
  <div className="video-container">
    <video ref={videoRef} src={videosrc} className="video-player"></video>
    <button onClick={togglePlay} className="play-pause-btn">Play/Pause</button>
  </div>
);
};

export default MoviePlayer;