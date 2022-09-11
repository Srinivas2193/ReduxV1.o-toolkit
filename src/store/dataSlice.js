import { createSlice } from "@reduxjs/toolkit";
import api from '../api/api';

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    isLoading: false
  },
  reducers: {
    isLoading: (state) => {
      state.isLoading = true;
    },

    isSuccess: (state, action) => {
      state.isLoading = false;
      state.data = [...action.payload];
    },
    isFailure: (state) => {
      state.isLoading = false;
      state.errors = true;
    }   
  },
});

export const { isLoading,isSuccess,isFailure} = dataSlice.actions;
export const getUsers = () => (dispatch)=>{
    dispatch(isLoading());
    api.get('/users')
    .then((res)=>{
      dispatch(isSuccess(res.data));
    })
    .catch((err)=> dispatch(isFailure()))
}

export const getPosts = () => (dispatch)=>{
  api.get('/posts')
  .then((res)=>dispatch(isSuccess(res.data)))
  .catch((err)=>console.log(err))
}

export default dataSlice.reducer;