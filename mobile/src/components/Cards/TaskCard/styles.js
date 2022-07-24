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
  titleStyle: {fontSize:16,color:Colors.black,marginHorizontal:5},
  timeContainer: {flexDirection:'row',alignItems:"center",marginTop:hp(0.5)},
  clockStyle: {height:hp(1.7),width:hp(1.7),marginHorizontal:5},
  timeStyle: {fontSize:14,color:Colors.grey},
});
