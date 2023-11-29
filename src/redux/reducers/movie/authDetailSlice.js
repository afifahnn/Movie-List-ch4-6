import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details : []
}

const authDetailSlice = createSlice({
    name : "moviesData",
    initialState,
    reducers :{
        setDetail: (state, action) => {
            state.details = action.payload;
          }
    }
}) 

export const { setDetail } = authDetailSlice.actions;

export default authDetailSlice.reducer;