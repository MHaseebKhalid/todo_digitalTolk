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
      backgroundColor:Colors.white
    },

    dateBtn: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      backgroundColor: Colors.white,
      height: hp(6),
      alignSelf: 'center',
      paddingHorizontal: 10,
      borderBottomWidth:0.5
      
    },

    input: {
      fontSize: 14,
      fontWeight: '300',
    },
    dateImg:{
      height: hp(3),
      width: hp(3),
      marginRight:wp(4)
    },
    modalContainer:{
      alignSelf: 'center',
      marginTop: hp(20),
      height: hp(60),
      width: '90%',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
      padding:10

    }
   
  });
