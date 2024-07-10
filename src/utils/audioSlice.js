import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
    name: 'audio',
    initialState: {
      isMuted: true,
    },
    reducers: {
      toggleMute: (state) => {
        state.isMuted = !state.isMuted;
      },
    },
  });

export const { toggleMute } = audioSlice.actions;
export default audioSlice.reducer;