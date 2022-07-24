import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
  import DeviceInfo from "react-native-device-info";
  var DeviceType = DeviceInfo.getDeviceType();
  import {Colors} from '../../constants/colors'
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor:Colors.white,
      alignItems:'center',
      justifyContent:'center',
      paddingBottom:hp(4)
    },
    loginText: {
      color: Colors.black,
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      textAlign:'center'
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: Colors.lightGrey,
      borderRadius: 6,
      borderWidth:0.5,
      borderColor:Colors.grey,
      marginTop: hp(2),
      // paddingHorizontal: 10,
      fontSize: 16,
      color: Colors.grey,
    },
    loginButton: {
      backgroundColor: Colors.black,
      marginTop: hp(4),
      paddingVertical: 12,
      borderRadius: 30,
      width: '100%'
    },
    loginButtonText: {
      fontSize: 20,
      fontWeight: '500',
      color: Colors.white,
      alignSelf: 'center',
    },
    loginWithBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
    },
   
  });
