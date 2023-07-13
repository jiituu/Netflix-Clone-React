import React from 'react';
import "./Banner.css"
import axios from "./axios"
import requests from "./Request"
function Banner() {

  const [movie, setMovie]=React.useState([])
        
       React.useEffect(()=>{
         async function fetchData(){
          const request = await axios.get(requests.fetchNeteflixOriginals);
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
          
          return requests

         }

        fetchData();

       },[])

console.log(movie)
    function truncate(string, n){
        return string?.length > n ? string.substr(0,n-1) + "...":string
    }




  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        // backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
        backgroundImage:
        `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition:'center center',





    }}>
        <div className="banner__contents">
              <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_title}
              </h1>
              <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
              </div>
              <h1 className="banner__description">
                {truncate(movie?.overview, 100) }
              </h1>

        </div>
        <div className="banner--fadeButton"/>
      
    </header>
  )
}

export default Banner
