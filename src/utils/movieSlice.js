import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
   name:'movies',
   initialState:{
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRated:null,
    seriesTop: null,
   },
   reducers:{
    addNowPlayingMovies:(state,action) =>{
        state.nowPlayingMovies =  action.payload
    },
    addTrailerVideo:(state,action) =>{
        state.trailerVideo = action.payload;
    },
    addPopularMovies:(state,action)=>{
        state.popularMovies = action.payload;
    },
    addTopRated:(state,action)=>{
        state.topRated = action.payload;
    },
    addSeriesTop:(state,action)=>{
        state.seriesTop = action.payload;
    },
    RemoveTrailer:() =>{
        return null;
    },
   } 
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addSeriesTop,RemoveTrailer} = movieSlice.actions

export default movieSlice.reducer;