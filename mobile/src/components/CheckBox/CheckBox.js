import React, { useRef, useState } from 'react';
import { Dimensions, TouchableOpacity,Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//Icons
import images from '../../assets/images';
//Styles
import styles from './styles';
//App Colors
import {Colors} from '../../constants/colors';
//Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CheckBox = (props) => {
  const { onPress, style, checked,disabled } = props;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, style]}>
      {checked && (
        <Image source={images.checked} style={styles.iconStyle} resizeMode="contain"/>
      )}
    </TouchableOpacity>
  );
};