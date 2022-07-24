/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {fetchUser} from '../../redux/userSlice/userSlice';
import {fetchTasks} from '../../redux/taskSlice/taskSlice';
import {fetchCheckIn} from '../../redux/checkInSlice/checkInSlice';
import {AppInput} from '../../components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../constants/colors';

export const Login = props => {
  let {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const logInUser = () => {
    dispatch(fetchUser()).then(res => {
      setIsLoading(false)
      if (res?.payload?.users) {
        dispatch(fetchTasks()).then(() => {
          dispatch(fetchCheckIn())
          navigation.replace('HomeStack');
        });
      }
    });
  };

  const onPressLogin = () => {
    setEmailErrorMsg('');
    setPasswordErrorMsg('');
   

    if (email == '') setEmailErrorMsg('Please enter email.');
    if (password == '') setPasswordErrorMsg('Please enter password.');

    if (email != '' && password != '') {
      setIsLoading(true);
      logInUser();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>

      <AppInput
        testID="Login.Email"
        textInputStyle={styles.input}
        backgroundColor={'white'}
        keyboardType={'email-address'}
        placeholder="E-mail"
        heigth
        value={email}
        onChangeText={text => {
          setEmailErrorMsg('');
          setEmail(text);
        }}
        width={'100%'}
        Error={emailErrorMsg == '' ? false : true}
        errorMessage={emailErrorMsg}
      />
      <AppInput
        testID="Login.Password"
        textInputStyle={styles.input}
        backgroundColor={'white'}
        secureEntry={true}
        marginTop={hp(3)}
        marginBottom={hp(1)}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        width={'100%'}
        Error={passwordErrorMsg == '' ? false : true}
        errorMessage={passwordErrorMsg}
        onSubmitEditing={() => {
          onPressLogin();
        }}
        returnKeyType="go"
      />

      <TouchableOpacity onPress={onPressLogin} style={styles.loginButton}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.white} />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
