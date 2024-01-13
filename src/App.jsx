import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BackgroundVideo from './BackgroundVideo';
import spotify from './pictures/white.png';
import google from './pictures/google.png';
import instagram from './pictures/instagram.png';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BackgroundVideo id = "video"></BackgroundVideo>
        <div id ="content">
        <a href='https://www.youtube.com/watch?v=mkhrUM35CQo'><h1 id = "hello" >THE EMPIRE CITY</h1></a>
        </div>
        <div id ="list">
           <div class ="item" ><a href='https://i.imgflip.com/57i49c.jpg?a473280'><img src = {google} height = "80" width = "80"></img></a></div>
           <div class = "item"><a href='https://www.youtube.com/watch?v=TQQLcJbel88'><img src= {instagram} height = "80" width = "80"></img></a></div>
           <div class = "item"><a href='https://www.youtube.com/watch?v=1E411wZ_YYo'><img src= {spotify} height = "80" width = "80"></img></a></div>
           

        </div>
         <iframe src="https://open.spotify.com/embed/track/7dFGkZbmm6cVlI28bfMaWE?utm_source=generator&theme=0" allow="autoplay;" frameborder="0" id="spotify" ></iframe>
        {/* width="100%" height="352" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius: 12px;" */}
      </>
  )
}

export default App
