import { configureStore } from "@reduxjs/toolkit";
import Watchlistreducer from "./Watchlistreducer";
const store = configureStore({
  reducer: {
    watchlist: Watchlistreducer,
  },
});

export default store;
