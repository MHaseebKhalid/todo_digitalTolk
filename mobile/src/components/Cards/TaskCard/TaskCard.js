import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import images from '../../../assets/images';
import {Colors} from '../../../constants/colors';
import {CheckBox} from '../../CheckBox/CheckBox';
import {styles} from './styles';

export const TaskCard = props => {
  let {navigation,key,disabled, completed, title, showTime, time} = props;
  return (
    <TouchableOpacity key={key} disabled={disabled} style={styles.cardContainer}>
      <CheckBox checked={completed} onPress={() => {}} />
      <View style={styles.topView}>
        <Text style={styles.titleStyle}>{title}</Text>
        {showTime && (
          <View style={styles.timeContainer}>
            <Image source={images.clock} style={styles.clockStyle} />
            <Text style={styles.timeStyle}>{time}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
