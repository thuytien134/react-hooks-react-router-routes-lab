import React from "react";
import { actors } from "../data";

function Actors() {
  return (
  <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actors.map((actor,index)=>{
      return (
        <div key={index}>
          <h2>{actor.name}</h2>
          <h2>Movies: {actor.movies.map((movie,indx)=>{
            return <li key={indx}>{movie}</li>
          })}</h2>
        </div>
      )
    })}
    </div>
    );
}

export default Actors;
