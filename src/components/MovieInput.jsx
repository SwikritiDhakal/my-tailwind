import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput= ()=>{
const [newMovie, setNewMovie]= useState("");
const dispatch= useDispatch();


function handleAddButton(){
    if(newMovie){
       dispatch(addMovie(newMovie))
       setNewMovie("")
        }
    }


 

    return(
        <>
     <input type="text" value={newMovie} onChange={(e)=>setNewMovie(e.target.value)}/>
     <button onClick={handleAddButton}>Add movie</button>
     </>
    );
};
