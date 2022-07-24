import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../../assets/images';
import {Colors} from '../../../constants/colors';
import {CheckBox} from '../../CheckBox/CheckBox';
import {styles} from './styles';

export const LocationCard = props => {
  let {navigation, key, disabled, title, lat = '1', lng = '2'} = props;
  return (
    <TouchableOpacity
      key={key}
      disabled={disabled}
      style={styles.cardContainer}>
      <Image source={images.pin} style={styles.pinStyle} />
      <View style={styles.topView}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.cordsTextStyle}>
          {lat}
          {'  , '}
          {lng}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
