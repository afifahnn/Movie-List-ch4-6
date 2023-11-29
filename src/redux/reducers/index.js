import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";
import authDetailSlice from "./movie/authDetailSlice";

export default combineReducers({
  auth: authLoginSlice,
  movie: authMovieSlice,
  detail: authDetailSlice,
}); 