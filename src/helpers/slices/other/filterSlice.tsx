import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
// simple slice where the reducers just get altered by the payload
// two reducers are needed because of the home and menu version of the data  needed to be filtered
const filterSlice = createSlice({
  name: 'filter',
  initialState: { category: 'Menu', category2: 'Menu' },
  reducers: {
    categoryFilter: (state, action) => {
      return {
        ...state,
        category: action.payload,
      };
    },
    categoryFilter2: (state, action) => {
      return {
        ...state,
        category2: action.payload,
      };
    },
  },
});
export const { categoryFilter, categoryFilter2 } = filterSlice.actions;

export default filterSlice.reducer;
