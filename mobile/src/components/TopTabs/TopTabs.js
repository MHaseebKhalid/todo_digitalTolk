import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import {Colors} from '../../constants/colors';

export const TopTabs = (props) => {
  let {
    leftTabText,
    rightTabText,
    leftTabPress,
    rightTabPress,
    leftTabColor,
    rightTabColor,
    showDot,
    navigation,
    mainStyle
  } = props;
  return (
    <View style={[styles.mainContainer,mainStyle]}>
      <TouchableOpacity onPress={leftTabPress} style={{}}>
        <Text
          style={[
            styles.textStyle,
            { color: leftTabColor ? Colors.black : Colors.grey },
          ]}
        >
          {leftTabText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={rightTabPress} style={{}}>
        <Text
          style={[
            styles.textStyle,
            { color: rightTabColor ? Colors.black : Colors.grey },
          ]}
        >
          {rightTabText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};