import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
  import DeviceInfo from "react-native-device-info";
  var DeviceType = DeviceInfo.getDeviceType();
  import {Colors} from '../../../constants/colors'
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Colors.white,
    },
    locationHeader:{
      fontSize:20,
      fontWeight:'bold',
      marginBottom:hp(2),
      marginTop:hp(1),
    }
   
  });
