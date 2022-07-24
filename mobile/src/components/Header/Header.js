import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import styles from './styles.js';

export class Header extends Component {
  render() {
    const {
      title = false,
      showMenu = false,
      menuPress,
      showLogout = false,
      isConnected,
      leftIcon,
      rightIcon,
      navigation
    } = this.props;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <View style={styles.header}>
          {showMenu && (
            <TouchableOpacity
              transparent
              style={styles.marginRight}
              onPress={menuPress}>
              <Image style={{height:30,width:30,tintColor:'white'}} resizeMode="contain" source={leftIcon} />
            </TouchableOpacity>
          )}
          {!!title && (
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.titleText}>
                {title}
              </Text>
            </View>
          )}
          {/* {!isConnected && (
            <Image style={styles.marginRight} source={Assets.offline} />
          )} */}
          {showLogout && (
            <TouchableOpacity transparent onPress={() => this.props.logout()}>
              <Image source={rightIcon} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
