import { configureStore } from "@reduxjs/toolkit";
import data from "./dataSlice";

export default configureStore({
  reducer: {
    userData: data,
  },
});