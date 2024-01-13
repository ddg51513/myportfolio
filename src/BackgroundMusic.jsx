import React from 'react';


const BackgroundVideo = () => {
    return (
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default BackgroundVideo;





