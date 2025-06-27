import React from "react";
import { useSelector } from "react-redux"; 

export const MovieList=()=>{
const movies= useSelector((state)=>state.moviestore.movies)
return (
    <>
      <h1>Movie List</h1>
      {movies.map((movie) => (
  <div key={movie.name}>{movie.name}</div>
))}

    </>
  );
};