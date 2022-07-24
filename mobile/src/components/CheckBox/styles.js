import { StyleSheet ,Platform} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';

export default StyleSheet.create({
    container:{
        width:hp(2.7),
        height:hp(2.7),
        backgroundColor:'#e3e3e3',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:Platform.OS=="android"?hp(0.7): hp(1)
    },
    iconStyle:{
        width:hp(2.4),
        height:hp(2.4),
    }
});