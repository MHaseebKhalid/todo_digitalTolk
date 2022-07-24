import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: wp(10),
    marginVertical: hp(2),
  },
  textStyle: { fontSize: 16,fontWeight:'bold' },
  dotStyle: {
    height: hp(1.5),
    width: hp(1.5),
    position: 'absolute',
    right: '-30%',
  },
});