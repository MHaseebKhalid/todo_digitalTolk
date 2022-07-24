import { StyleSheet, Dimension, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  //Button Styling
  btnContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTextContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: width / 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  imgButtonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: width / 10,
    paddingHorizontal: width / 10,
  },
  imgContainer: {
    flex: 2,
  },
  imgBtnStyle: { height: width / 14, width: width / 14 },
});