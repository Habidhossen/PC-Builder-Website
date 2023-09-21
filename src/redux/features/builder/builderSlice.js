// builderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const builderSlice = createSlice({
  name: "builder",
  initialState: {
    selectedComponents: [],
  },
  reducers: {
    addToBuilder: (state, action) => {
      state.selectedComponents.push(action.payload);
    },
  },
});

export const { addToBuilder } = builderSlice.actions;
export default builderSlice.reducer;
