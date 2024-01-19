import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Add the new item to the watchlist
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove the item from the watchlist based on some identifier (e.g., symbol)
      state = state.filter((item) => item.symbol !== action.payload.symbol);
      return state;
    },
  },
});

export const { addItem, removeItem } = watchlistSlice.actions;
export default watchlistSlice.reducer;
