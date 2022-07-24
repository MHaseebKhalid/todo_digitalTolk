import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
  FlatList
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import {styles} from './styles';
import images from '../../../assets/images';
import {Colors} from '../../../constants/colors';
import {Header, FloatBtn, LocationCard} from '../../../components';

import {useDispatch, useSelector} from 'react-redux';
import {fetchCheckIn,postCheckIn} from '../../../redux/checkInSlice/checkInSlice';

let locationData=[
    {   id:0,
        address: `Location ${37.785834}`,
        latitude: Number(37.785834),
        longitude: Number(37.785834),
      },
      {   id:1,
        address: `Location ${37.785834}`,
        latitude: Number(37.785834),
        longitude: Number(37.785834),
      },
      {   id:2,
        address: `Location ${37.785834}`,
        latitude: Number(37.785834),
        longitude: Number(37.785834),
      },
      {   id:3,
        address: `Location ${37.785834}`,
        latitude: Number(37.785834),
        longitude: Number(37.785834),
      },
]

export const Location = props => {
  let {navigation} = props;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {checkInReducer} = state;

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    address: `Location ${37.785834}`,
    latitude: Number(37.785834),
    longitude: Number(37.785834),
  });
  const [preLoc, setPreLoc] = useState([...locationData]);


  useEffect(() => {
    if (checkInReducer?.checkInData.length > 0) {
      
      setPreLoc(checkInReducer?.checkInData);
    }
    setLoading(checkInReducer?.loading);
  }, [checkInReducer?.checkInData]);


  const getCurrentLocation = async () => {
    setLoading(true);
    if (Platform.OS === 'ios') {
      await Geolocation.requestAuthorization('whenInUse').then(() => {
        startFetchingCurrentLocation();
      });
    } else {
      askLocationPermissionFromAndroid();
    }
  };

  const askLocationPermissionFromAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Address Picker Location Permission',
          message: 'Address Picker needs access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        startFetchingCurrentLocation();
      } else {
        Alert.alert('Location Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const startFetchingCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('CORRDS======>', position.coords);
        let body = {
          address: `Location ${position.coords.latitude}`,
          latitude: position?.coords?.latitude,
          longitude: position?.coords?.longitude,
        };
        setLocation(body);
        setLoading(false);
        // getAddress(position.coords);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  // const getAddress = async (cords) => {
  //     let key = 'API_KEY';
  //     fetch(
  //       'https://maps.googleapis.com/maps/api/geocode/json?address=' +
  //         cords.latitude +
  //         ',' +
  //         cords.longitude +
  //         '&key=' +
  //         key,
  //     )
  //       .then(response => response.json())
  //       .then(
  //         (responseJson) => {
  //           console.log("DATA=====>",responseJson)
  //         //   console.log("DATA=====>",responseJson.results[0].formatted_address)
  //         },
  //         () => {
  //           // let obj = {
  //           //   latitude: this.state.currentDimensions.lat,
  //           //   longitude: this.state.currentDimensions.lng,
  //           // }
  //           // this.setState({ initialPosition: obj})
  //         },
  //       )
  //       .catch(err => console.log(err));
  //   };

  const renderList = ({item, index}) => {
    return(
        <LocationCard
        key={index}
        title={item.address}
        lat={item.latitude}
        lng={item.longitude}
        />
    )
  };

  return (
    <View style={styles.container}>
      <Header
        title="Location"
        showMenu={true}
        leftIcon={images.menu}
        menuPress={() => navigation.openDrawer()}
        navigation={navigation}
      />
      <ScrollView style={{flex: 1, padding: 10}}>
        <Text style={styles.locationHeader}>Current Location</Text>
        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <LocationCard
            key={1}
            title={location.address}
            lat={location.latitude}
            lng={location.longitude}
          />
        )}
        <Text style={styles.locationHeader}>Previous Locations</Text>  
        <FlatList
        nestedScrollEnabled
        data={preLoc}
        keyExtractor={item => item.id}
        renderItem={renderList}
      />
      </ScrollView>
      <FloatBtn
        onPress={() => getCurrentLocation()}
        img={images.map}
        navigation={navigation}
      />
    </View>
  );
};
