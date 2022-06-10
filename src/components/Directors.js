import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div key={index}>
            <h2 >Name: {director.name}</h2>
            <h3> Movies: {director.movies.map((movie,indx)=>{
              return <li key={indx}>{movie}</li>
            })}</h3>
          </div>
        )
      })}

    </div>
  );
}

export default Directors;
