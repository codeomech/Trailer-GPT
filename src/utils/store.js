import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import audioReducer from "./audioSlice"

const appStore = configureStore({
    reducer:{
     user: userReducer,
     movies:movieReducer,
     gpt: gptReducer,
     audio:audioReducer,
    }
})

export default appStore;