import React, {useEffect, useState} from 'react';
import {View, Text, Animated, StatusBar,Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import 'react-native-gesture-handler';

import {Login} from '../screens/auth/Login';
import {Tasks,Location} from '../screens/home';

import CustomDrawerContent from '../components/Drawer/CustomDrawerContent';

const StackApp = createStackNavigator();
const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="TaskScreen"
      drawerContent={props => (
        <CustomDrawerContent {...props} navigation={navigation} />
      )}>
      <Drawer.Screen
        name="TaskScreen"
        component={Tasks}
        options={navOptionHandler}
      />
      <Drawer.Screen
      name="Location"
      component={Location}
      options={navOptionHandler}
    />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <View style={{ flex: 1,marginTop:Platform.OS='android'?StatusBar.currentHeight:0 }}>
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        {/* Login */}
        <StackApp.Screen
          name="Login"
          component={Login}
          options={navOptionHandler}
        />

        {/* Tasks Screen */}
        <StackApp.Screen
          name="HomeStack"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
     </View>
  );
};
export default App;
