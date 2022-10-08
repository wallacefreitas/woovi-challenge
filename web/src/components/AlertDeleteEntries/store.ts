import { createSlice } from "@reduxjs/toolkit";

const entryAlertDeleteSlice = createSlice({
  name: 'entryAlertDeleteSlice',
  initialState: {
    openAlertDelete: false
  },
  reducers: {
    showAlert(state, { payload }) {
      state.openAlertDelete = payload
    },
  }
})

export const { showAlert } = entryAlertDeleteSlice.actions;
export default entryAlertDeleteSlice.reducer;
