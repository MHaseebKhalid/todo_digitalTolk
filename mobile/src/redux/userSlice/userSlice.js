import {
  createSlice,
  createAsyncThunk,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { getUserApi } from '../../services/api/methods/users';
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const fetchUser = createAsyncThunk(
  'get/fetchTasks',
  async () => {
    try {
      const response = await getUserApi();
      const data = response.data;
      return data;
    } catch (err) {
      throw err.message == 'Network Error' ? err?.message : err?.response?.data;
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loading: false,
    error: '',
  },
  reducers: {
    logout: (state, action) => {
      state.userData = null;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.userData = action.payload.users;
      state.loading = false;
    },
    [fetchUser.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      alert(action?.error?.message)
      
    },
  },
});

export const {logout } = userSlice.actions;
export default userSlice.reducer;
