import React from "react";
import { movies } from "../data";

function Movies() {
  
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map((movie,index)=>{
       return (
       <div key={index}>
         <h2>Name: {movie.title}</h2>
         <h3>Time: {movie.time}</h3>
         <h3>Genres: {movie.genres.map((genre,indx)=>{
           return <li key={indx}>{genre}</li>
         })}</h3>
       </div>
       )
      })}
    </div>
  );
}

export default Movies;
