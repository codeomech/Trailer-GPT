import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false,
        movieResults:null,
        movieNames:null,
        trailerId: null,
        loading: false,
    },
    reducers:{
        toggleGptSearchView: (state,action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        addTrailerId: (state, action) => {
            state.trailerId = action.payload;
          },
          setLoading: (state, action) => {
            state.loading = action.payload;
          },
    }
})

export const {toggleGptSearchView,addGptMovies,addTrailerId, setLoading} = gptSlice.actions;
export default gptSlice.reducer;