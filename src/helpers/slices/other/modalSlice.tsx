import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
// simple slice where the reducers is used to hide and show an element
const modalSlice = createSlice({
  name: 'modal',
  initialState: { nav: false },
  reducers: {
    toggleNav: (state, action) => {
      return {
        ...state,
        nav: action.payload,
      };
    },
  },
});
export const { toggleNav } = modalSlice.actions;

export default modalSlice.reducer;
