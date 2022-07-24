import {
  createSlice,
  createAsyncThunk,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { getCheckInApi,postCheckInApi } from '../../services/api/methods/checkin';
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const fetchCheckIn = createAsyncThunk(
  'get/fetchCheckIN',
  async () => {
    try {
      const response = await getCheckInApi();
      const data = response.data;
      return data;
    } catch (err) {
      throw err.message == 'Network Error' ? err?.message : err?.response?.data;
    }
  },
);

export const postCheckIn = createAsyncThunk(
  'post/CheckIN',
  async (payload) => {
    try {
      const response = await postCheckInApi(payload);
      const data = response.data;
      return data;
    } catch (err) {
      throw err.message == 'Network Error' ? err?.message : err?.response?.data;
    }
  },
);



const checkInSlice = createSlice({
  name: 'CheckIn',
  initialState: {
    checkInData: [],
    loading: false,
    error: '',
  },
  reducers: {
    clearCheckIn: (state, action) => {
      state.checkInData = [];
    },
  },
  extraReducers: {
    [fetchCheckIn.fulfilled]: (state, action) => {
      state.checkInData = action.payload.checkins;
      state.loading = false;
    },
    [fetchCheckIn.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCheckIn.rejected]: (state, action) => {
      state.loading = false;
      alert(action?.error?.message)
      
    },


    //post
    [postCheckIn.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [postCheckIn.pending]: (state, action) => {
      state.loading = true;
    },
    [postCheckIn.rejected]: (state, action) => {
      state.loading = false;
      alert(action?.error?.message)
      
    },

   
  },
});

export const {clearCheckIn } = checkInSlice.actions;
export default checkInSlice.reducer;
