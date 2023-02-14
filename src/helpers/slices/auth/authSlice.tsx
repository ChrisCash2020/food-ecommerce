import * as toolkitRaw from '@reduxjs/toolkit';
import { RootState } from '../../other/store';
const { createSlice, createAsyncThunk } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
import {
  editProfile,
  gBody,
  loginData,
  userAuth,
  userData,
} from '../../other/types';
import authService from '../../services/authService';
const user = null;

if (typeof window !== 'undefined') {
  // Perform localStorage action if user is available
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem('Authorization'));
}

// to perform fetch requests with redux you need a creatAsyncThunk to keep track where the fetch request was fufilled or rejected

// values to keep track of so elements requiring auth can be rendered
// 1. the user recored that holds user info
// 2. the error record that can signal a toast error msg
// 3. the success to set the state of the user info
const initialState: {
  user: null;
} = {
  user: user ? user : null,
};

//  **** Internal Auth ****

export const register = createAsyncThunk(
  'auth/register',
  async (user: userData, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user: loginData, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//  **** External Auth ****

export const externalRegister = createAsyncThunk(
  'auth/externalRegister',
  async (user: gBody, thunkAPI) => {
    try {
      return await authService.externalRegister(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const externalLogin = createAsyncThunk(
  'auth/externalLogin',
  async (email: string, thunkAPI) => {
    try {
      return await authService.externalLogin(email);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

//  **** Auto login a validated user ****

export const getCredentials = createAsyncThunk(
  'auth/getCredentials',
  async (_, thunkAPI) => {
    try {
      return await authService.getCredentials();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// **** Allow user to update certian credentials ****

export const editCredentials = createAsyncThunk(
  'auth/editCredentials',
  async (user: editProfile, thunkAPI) => {
    try {
      return await authService.editCredentials(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refresh: (state) => ({ ...state }),
    edit: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
  // the extra reduceers are needd for when fetching data with redux
  extraReducers: (builder) => {
    builder

      // FULFILLED

      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(externalRegister.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(externalLogin.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getCredentials.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(editCredentials.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      // REJECTED

      .addCase(register.rejected, (state) => {
        state.user = null;
      })
      .addCase(externalRegister.rejected, (state) => {
        state.user = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
      })
      .addCase(externalLogin.rejected, (state) => {
        state.user = null;
      })
      .addCase(getCredentials.rejected, (state) => {
        state.user = null;
      })
      .addCase(editCredentials.rejected, (state) => {
        state.user = null;
      });
  },
});
export const getUser = toolkitRaw.createSelector(
  (state: RootState) => state.auth.user,
  (user: userAuth) => {
    return user;
  }
);
export const { refresh, edit } = authSlice.actions;
export default authSlice.reducer;
