import { configureStore } from "@reduxjs/toolkit";
import taskReduceSlice from './taskReducerSlice';

export default configureStore({
   reducer:
   {
      taskReducer : taskReduceSlice
   },
});