import React, { useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux/store';
import 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
isIphoneX = DeviceInfo.hasNotch();

LogBox.ignoreAllLogs(true);
StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');
StatusBar.setBarStyle('dark-content');
//local imports
import App from './App';

let persistor = persistStore(store);
const Setup = () => {
  useEffect(() => {
    setToken();
  }, []);

  const setToken=async()=>{
    let token='Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK'
    await AsyncStorage.setItem('userToken',JSON.stringify(token));
  }

  const getDeviceUniqueId = async () => {
    let uniqueId = DeviceInfo.getUniqueId();
    if (uniqueId) {
      await AsyncStorage.setItem('deviceID', uniqueId);
    }
  };

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App /> 
      </PersistGate>
    </Provider>
  );
};

export default Setup;
