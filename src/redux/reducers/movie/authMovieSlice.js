import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : []
}

const authMovieSlice = createSlice({
    name : "moviesData",
    initialState,
    reducers :{
        setMovie: (state, action) => {
            state.movies = action.payload;
          }
    }
}) 

export const { setMovie } = authMovieSlice.actions;

export default authMovieSlice.reducer;