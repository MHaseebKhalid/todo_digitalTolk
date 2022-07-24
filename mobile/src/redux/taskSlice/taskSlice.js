import {
  createSlice,
  createAsyncThunk,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { getTasksApi,postTasksApi } from '../../services/api/methods/tasks';
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const fetchTasks = createAsyncThunk(
  'get/fetchTasks',
  async () => {
    try {
      const response = await getTasksApi();
      const data = response.data;
      return data;
    } catch (err) {
      throw err.message == 'Network Error' ? err?.message : err?.response?.data;
    }
  },
);

export const postTasks = createAsyncThunk(
  'post/Tasks',
  async (payload) => {
    try {
      const response = await postTasksApi(payload);
      const data = response.data;
      return data;
    } catch (err) {
      throw err.message == 'Network Error' ? err?.message : err?.response?.data;
    }
  },
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskData: [],
    loading: false,
    error: '',
  },
  reducers: {
    clearTask: (state, action) => {
      state.taskData = [];
    },
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.taskData = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.loading = false;
      alert(action?.error?.message)
      
    },

    //post
    [postTasks.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [postTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [postTasks.rejected]: (state, action) => {
      state.loading = false;
      alert(action?.error?.message)
      
    },
  },
});

export const {clearTask } = taskSlice.actions;
export default taskSlice.reducer;
