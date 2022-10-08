import { createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../@types";

interface entryState {
  entries: Transaction[]
}

const initialState: entryState = {
  entries: []
}

const entriesSlice = createSlice({
  name: 'entriesSlice',
  initialState,
  reducers: {
    setEntries(state, { payload }) {
      state.entries = payload
    },
  }
})

export const { setEntries } = entriesSlice.actions;
export default entriesSlice.reducer;
