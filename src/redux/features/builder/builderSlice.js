import { createSlice } from "@reduxjs/toolkit";

const builderSlice = createSlice({
  name: "builder",
  initialState: {
    selectedComponents: [],
  },
  reducers: {
    addToBuilder: (state, action) => {
      // state.selectedComponents.push(action.payload);

      const existingProduct = state.selectedComponents.find(
        (product) => product._id === action.payload._id
      );

      if (!existingProduct) {
        state.selectedComponents.push(action.payload);
      }
    },
    removeFromBuilder: (state, action) => {
      state.selectedComponents = state.selectedComponents.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToBuilder, removeFromBuilder } = builderSlice.actions;
export default builderSlice.reducer;
