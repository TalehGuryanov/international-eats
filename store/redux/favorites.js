import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.splice(state.indexOf(action.payload), 1)
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
