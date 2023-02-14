import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slices/other/modalSlice';
import cartReducer from '../slices/cart/cartSlice';
import authReducer from '../slices/auth/authSlice';
import productReducer from '../slices/products/productSlice';
import filterReducer from '../slices/other/filterSlice';
import adminReducer from '../slices/admin/adminSlice';

// just setting up the store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    modal: modalReducer,
    cart: cartReducer,
    filter: filterReducer,
    admin: adminReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
