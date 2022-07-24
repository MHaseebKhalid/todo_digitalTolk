import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export const FloatBtn = props => {
  let {navigation, img,onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: heightPercentageToDP(3),
        right: widthPercentageToDP(10),
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: 'black',
      }}>
      {!img && <Text style={{color: 'white', fontSize: 20}}>+</Text>}
      {img && (
        <Image
          source={img}
          style={{
            height: heightPercentageToDP(4),
            width: widthPercentageToDP(4),
            tintColor:'white'
          }}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};
