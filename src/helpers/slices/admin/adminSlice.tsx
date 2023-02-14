import * as toolkitRaw from '@reduxjs/toolkit';
import { RootState } from '../../other/store';
const { createSlice, createSelector } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;

// values to keep track of so elements requiring them can be rendered
const initialState: {
  showDelBtns: boolean;
  confirmDel: boolean;
  showAddProductModal: boolean;
  showEditProductModal: boolean;
  productEditIndex: number;
  setOfDelProducts: { [productINDEX: number]: boolean };
  loadingModal: boolean;
  resetInputs: boolean;
} = {
  showDelBtns: false,
  confirmDel: false,
  showAddProductModal: false,
  showEditProductModal: false,
  productEditIndex: 0,
  setOfDelProducts: {},
  loadingModal: false,
  resetInputs: false,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    toggleEditModal: (state, action) => {
      return {
        ...state,
        showEditProductModal: action.payload,
      };
    },
    newProductIndex: (state, action) => {
      return {
        ...state,
        productEditIndex: action.payload,
      };
    },
    toggleDelBtns: (state, action) => {
      return {
        ...state,
        showDelBtns: action.payload,
      };
    },
    toggleConfirmDel: (state, action) => {
      return {
        ...state,
        confirmDel: action.payload,
      };
    },
    toggleAddModal: (state, action) => {
      return {
        ...state,
        showAddProductModal: action.payload,
      };
    },
    toggleLoaderModal: (state, action) => {
      return {
        ...state,
        loadingModal: action.payload,
      };
    },
    toggleResetInputs: (state, action) => {
      return {
        ...state,
        resetInputs: action.payload,
      };
    },
    // if the key already exists its deleted alse its added
    // can't use sets with redux 😢
    alterDelProductSet(state, action: toolkitRaw.PayloadAction<number>) {
      if (state.setOfDelProducts[action.payload]) {
        delete state.setOfDelProducts[action.payload];
      } else {
        state.setOfDelProducts[action.payload] = true;
      }
    },
    ClearProductInSet(state) {
      state.setOfDelProducts = {};
    },
  },
});

export const {
  toggleEditModal,
  newProductIndex,
  toggleDelBtns,
  toggleConfirmDel,
  toggleAddModal,
  alterDelProductSet,
  ClearProductInSet,
  toggleLoaderModal,
  toggleResetInputs,
} = adminSlice.actions;
// get the unique array of selected items to delete
export const getProductSet = createSelector(
  (state: RootState) => state.admin.setOfDelProducts,
  (productsToDel) => {
    // alters the del object to an array of numbers
    let array = Object.keys(productsToDel).map((key) => Number(key));
    return array;
  }
);
export const getEditProduct = createSelector(
  (state: RootState) => state.products.products,
  (state: RootState) => state.admin.productEditIndex,
  (products, index) => {
    return products[index];
  }
);
export default adminSlice.reducer;
