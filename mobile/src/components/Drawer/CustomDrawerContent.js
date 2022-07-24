import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Colors} from '../../constants/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
export default class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenu: [
        {
          id: 1,
          name: 'Tasks',
          img: images.task,
          navigate: 'TaskScreen',
        },
        {
          id: 2,
          name: 'Location',
          img: images.map,
          navigate: 'Location',
        },
        {
          id: 3,
          name: 'Logout',
          img: images.logout,
          navigate: 'Login',
        },
      ],
    };
  }

  render() {
    let {navigation} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={this.state.sideMenu}
          keyExtractor={(item, index) => index.toString()}
          bounces={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  item?.name == 'Logout'
                    ? navigation.replace(item.navigate)
                    : navigation.navigate(item.navigate);
                }}
                style={[
                  styles.iconBTN,
                  item.name == 'Logout' && {marginTop: hp(70)},
                ]}>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={styles.avatarStyle}
                />
                <Text style={styles.NameText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  iconBTN: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
  },
  avatarStyle: {height: hp(3), width: hp(3), marginHorizontal: 10},

  NameText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.black,
  },
});
