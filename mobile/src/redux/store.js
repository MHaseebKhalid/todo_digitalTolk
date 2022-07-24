import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Reducers

import userReducer from './userSlice/userSlice';
import taskReducer from './taskSlice/taskSlice';
import checkInReducer from './checkInSlice/checkInSlice';

const reducers = combineReducers({
  userReducer,
  taskReducer,
  checkInReducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
