import { configureStore } from "@reduxjs/toolkit";

import entriesReducer from "./entries";
import entryAlertDeleteReducer from "../components/AlertDeleteEntries/store";

const store = configureStore({
  reducer: {
    entriesSlice: entriesReducer,
    entryAlertDeleteSlice: entryAlertDeleteReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store