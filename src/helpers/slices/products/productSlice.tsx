import * as toolkitRaw from '@reduxjs/toolkit';
const { createSlice, createAsyncThunk, createSelector } = ((toolkitRaw as any)
  .default ?? toolkitRaw) as typeof toolkitRaw;
import { RootState } from '../../other/store';
import { editProductBody, Food } from '../../other/types';
import productService from '../../services/productService';
// to perform fetch requests with redux you need a creatAsyncThunk to keep track where the fetch request was fufilled or rejected

// values to keep track of so elements requiring auth can be rendered
// 1. the products record stores the fetched response of all the products
// 2. the header record stores the fetched response but only the ones needed on the header
// 3. the error record that can signal a toast error msg
// 4. the success to set the state of the user info
// 4. the loading to set a placeholder if fetching is still occuring
const initialState: {
  products: Food[];
  header: Food[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
} = {
  products: [],
  header: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const editproduct = createAsyncThunk(
  'products/editProduct',
  async (productData: editProductBody, thunkAPI) => {
    try {
      return await productService.editProduct(productData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Create new product
export const createProduct = createAsyncThunk(
  'products/create',
  async (productData: editProductBody, thunkAPI) => {
    try {
      return await productService.createProduct(productData);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Get the menu products
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete user product
export const deleteProducts = createAsyncThunk(
  'products/delete',
  async (set: number[], thunkAPI) => {
    try {
      return await productService.deleteProducts(set);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.map((product: any, i: any) => ({
          ...product,
          index: i,
        }));
        // The images that are should in the header component
        state.header = [
          action.payload[26],
          action.payload[23],
          action.payload[9],
          action.payload[15],
        ];
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.filter(
          //@ts-ignore
          (product) => product._id !== action.payload.id
        );
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// selector to return the a copy of the header
export const getHeader = createSelector(
  (state: RootState) => state.products.header,
  (header) => header
);

// selector that returns the product array filtered by the showcase wanted ie "Fruits"
export const getShowcase = createSelector(
  (state: RootState) => state.products.products,
  (products) => products.filter((item) => item.category == 'Fruits')
);

/* ******Two selectors that store the products listed based on the state of the category being selected ****** */

export const getMenu1 = createSelector(
  (state: RootState) => state.products.products,
  (state: RootState) => state.filter.category,
  (products, category) => {
    let array: Food[] = [];
    products?.map((item, i) => {
      if (category == 'Menu') {
        array = products;
      }
      if (item.category == category) {
        array.push(item);
      }
    });
    return array;
  }
);
export const getMenu2 = createSelector(
  (state: RootState) => state.products.products,
  (state: RootState) => state.filter.category2,
  (products, category) => {
    let array: Food[] = [];
    products?.map((item, i) => {
      if (category == 'Menu') {
        array = products;
      }
      if (item.category == category) {
        array.push(item);
      }
    });
    return array;
  }
);
export const getMenuEdit = createSelector(
  (state: RootState) => state.products.products,
  (products) => {
    let array: Food[] = products;
    return array;
  }
);

export const { reset } = productSlice.actions;
export default productSlice.reducer;
