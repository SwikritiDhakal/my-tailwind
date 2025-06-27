import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    movies: [
        {
        id: 1,
        name:"Intestellar"
    }, 
        {
        id: 2,
        name:"ok"
    }
    
]
}


const movieSlice = createSlice({
name:"movies",
initialState,
reducers: {

        addMovie: (state, action)=>{
         const newMovie= { 
                id: state.movies[state.movies.length-1] +1, name: "action.payload"}
state.movies.push(action.payload)

        } ,
        removeMovie: (state, action)=> {

        }

}



})



export const{ addMovie, removeMovie}= movieSlice.actions;
export default movieSlice.reducer;