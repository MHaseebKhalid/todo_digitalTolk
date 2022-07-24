import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
var DeviceType = DeviceInfo.getDeviceType();
import {Colors} from '../../../constants/colors';
export const styles = StyleSheet.create({
  cardContainer: {
    width:'100%',
    padding:hp(1),
    flexDirection:'row',
    // alignItems:'center',
    borderBottomWidth:0.2,
    borderColor:Colors.grey
  },
  topView: {},
  titleStyle: {fontSize:18,color:Colors.black,marginHorizontal:5},
  cordsContainer: {flexDirection:'row',alignItems:"center",marginTop:hp(0.5)},
  pinStyle: {height:hp(2),width:hp(2),marginHorizontal:5},
  cordsTextStyle: {fontSize:14,color:Colors.grey,marginHorizontal:5},
});
