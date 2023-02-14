import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice, createSelector } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
import { toast } from 'react-toastify';
import type { RootState } from '../../other/store';
import { totalInfo } from '../../other/types';

export interface CartState {
  items: { [productINDEX: number]: number };
  onCheckout: boolean;
}
const initialState: CartState = {
  items: {},
  onCheckout: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: toolkitRaw.PayloadAction<number>) {
      if (state.items[action.payload]) {
        toast.error('Item alread in cart');
      } else {
        state.items[action.payload] = 1;
      }
    },
    increaseItemQty(state, action: toolkitRaw.PayloadAction<number>) {
      if (state.items[action.payload]) {
        state.items[action.payload]++;
      } else {
        state.items[action.payload] = 1;
      }
    },
    decreaseItemQty(state, action: toolkitRaw.PayloadAction<number>) {
      if (state.items[action.payload] > 1) {
        state.items[action.payload]--;
      } else {
        delete state.items[action.payload];
      }
    },
    removeItem(state, action: toolkitRaw.PayloadAction<number>) {
      delete state.items[action.payload];
    },
    clearAllItems(state) {
      state.items = {};
    },
    updateCheckout(state, action) {
      state.onCheckout = action.payload;
    },
  },
});

export const {
  addItem,
  increaseItemQty,
  decreaseItemQty,
  removeItem,
  clearAllItems,
  updateCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;

// use a create selector as to not mutate redux and optimize performance

// this selector returns the cart items as an array of products with their qty being listed
export const getCart = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,
  (items, products) => {
    // 1. turn the obj to an array
    // 2. use the map method to make a copy where the array items are product objects with the qty record being altered
    // 3. the products state is used to get the right product
    let array = Object.entries(items).map(([index, quantity]) => ({
      ...products[Number(index)],
      qty: quantity,
    }));
    return array;
  }
);
// this is the selector used on the cart icon in the navbar and modal
export const getTotalQty = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    // it simply gets the qty of each item and saves it to a sum value
    let numItems = 0;
    for (let index in items) {
      numItems += items[index];
    }
    return numItems;
  }
);

// this is selector gets amount info related to the cart items
export const getTotalInfo = createSelector(
  (state: RootState) => state.cart.items,
  (state: RootState) => state.products.products,

  (items, products) => {
    let sum = 0;
    for (let index in items) {
      // 1. the price of the specific items multiplied by its qty is tracked by the sum variable
      sum += products[index].price * items[index];
    }
    // calculations to get specific cart info
    const subTotal = Number(sum.toFixed(2));
    // the + infront converts string type to number
    const fee = +(subTotal * 0.06).toFixed(2);
    const totalPrice = (subTotal + fee).toFixed(2);
    // designed the info as a structed object to be easily accessed
    const info: totalInfo = { subTotal: subTotal, fee: fee, total: totalPrice };
    return info;
  }
);
