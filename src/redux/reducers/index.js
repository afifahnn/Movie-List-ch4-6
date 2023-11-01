import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";
// import authRetingSlice from "./rating/authRetingSlice";

export default combineReducers({
  auth: authLoginSlice,
  movie: authMovieSlice,
//   rating:authRetingSlice,
}); 