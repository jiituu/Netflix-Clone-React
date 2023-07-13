import React from 'react'
import './row.css'
import axios from './axios';
function Row( {title,fetchUrl,isLargeRow}) {
    const [ movies, setMovies]=React.useState([]);
   const base_url ="https://image.tmdb.org/t/p/original"

    React.useEffect(()=>{
      async function fetchData(){
        const request =await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData()

    },[fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
<div className="row__posters">

      {movies.map(
        (movie)=>
        ((isLargeRow && movie.poster_path)||
        (!isLargeRow && movie.backdrop_path)) &&(
          
          <img 
          className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
          src={`${base_url}${
            isLargeRow ? movie.poster_path: movie.backdrop_path
          }`}
           alt={movie.name}
           />
        )
        
        )}
</div>
    </div>
  )
}

export default Row
