/* eslint-disable semi */
/* eslint-disable eol-last */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import images from '../../../assets/images';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import DatePicker from 'react-native-date-picker';
 
import {useDispatch, useSelector} from 'react-redux';
import {fetchTasks, postTasks} from '../../../redux/taskSlice/taskSlice';

import moment from 'moment';
import {
  Header,
  CheckBox,
  FloatBtn,
  TopTabs,
  TaskCard,
  AppInput,
  Button,
} from '../../../components';
import {Colors} from '../../../constants/colors';

export const Tasks = props => {
  let {navigation} = props;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {taskReducer} = state;

  const [todoListArr, settodoListArr] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [errMsgs, setErrMsgs] = useState({});

  useEffect(() => {
    if (taskReducer?.taskData.length > 0) {
      
      settodoListArr(taskReducer?.taskData);
    }
    setLoading(taskReducer?.loading);
  }, [taskReducer?.taskData]);

  const postTodo = () => {
    let valid = true;
    if (summary == '') {
      setErrMsgs({
        ...errMsgs,
        summaryError: 'summary can not be empty',
      });
      valid = false;
    }
    if (description == '') {
      setErrMsgs({
        ...errMsgs,
        descriptionError: 'summary can not be empty',
      });
      valid = false;
    }
    if (valid) {
      let myDate = moment(date).format(' YYYY-MM-DD hh:mm:ss');
      let body = {
        title: summary,
        description,
        due_at: myDate,
      };
      setPostLoading(true);

      dispatch(postTasks(body)).then(res => {
        dispatch(fetchTasks()).then(()=>{
        setPostLoading(false);
        setSummary('');
        setDescription('');
        setDate(new Date());
        setModalVisible(!modalVisible);
      })
      });
    }
  };

  const todoListItem = (item, index, status) => {
    return (
      <TaskCard
        key={index}
        title={item.title}
        completed={status}
        showTime={!status}
        time={item.due_at}
      />
    );
  };

  const renderList = ({item, index}) => {
    if (item.status == 'completed' && showCompleted) {
      return todoListItem(item, index, true);
    } else if (item.status == 'inprogress' && !showCompleted) {
      return todoListItem(item, index, false);
    }
  };

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={{marginBottom: heightPercentageToDP(2)}}>
            <AppInput
              width={'100%'}
              textInputStyle={styles.input}
              secureEntry={false}
              marginTop={heightPercentageToDP(2)}
              placeholder="Summary"
              value={summary}
              onChangeText={text => {
                setErrMsgs({...errMsgs, summaryError: ''});
                setSummary(text);
              }}
              leftIconPath={images.paper}
              tintColor={Colors.black}
              leftImageHeight={heightPercentageToDP(3)}
              leftImageWidth={heightPercentageToDP(3)}
              backgroundColor={Colors.white}
              style={{
                borderBottomWidth: 0.5,
              }}
              Error={errMsgs.summaryError ? true : false}
              errorMessage={errMsgs.summaryError}
            />
          </View>
          <View style={{marginVertical: heightPercentageToDP(2)}}>
            <AppInput
              width={'100%'}
              height={heightPercentageToDP(10)}
              textInputStyle={styles.input}
              secureEntry={false}
              placeholder="Description"
              value={description}
              onChangeText={text => {
                setErrMsgs({...errMsgs, descriptionError: ''});
                setDescription(text);
              }}
              leftIconPath={images.chat}
              tintColor={Colors.black}
              leftImageHeight={heightPercentageToDP(3)}
              leftImageWidth={heightPercentageToDP(3)}
              backgroundColor={Colors.white}
              style={{
                borderBottomWidth: 0.5,
              }}
              Error={errMsgs.descriptionError ? true : false}
              errorMessage={errMsgs.descriptionError}
            />
          </View>
          <View style={{marginTop: heightPercentageToDP(2)}}>
            <TouchableOpacity
              onPress={() => {
                setOpen(true);
              }}
              style={styles.dateBtn}>
              <Image source={images.history} style={styles.dateImg} />
              {/* <Text style={styles.input}>Date:</Text>÷ */}
              <Text style={styles.input}>
                {moment(date).format(' YYYY-MM-DD hh:mm:ss')}
              </Text>
            </TouchableOpacity>
          </View>

          {postLoading ? (
            <ActivityIndicator size="small" color={Colors.black} />
          ) : (
            <Button
              ButtonName="Save"
              onPress={postTodo}
              ButtonBackground={Colors.black}
              style={{
                height: heightPercentageToDP(7),
                width: widthPercentageToDP(70),
                marginVertical: heightPercentageToDP(4),
              }}
            />
          )}
          <Button
            onPress={() => {
              setSummary('');
              setDescription('');
              setModalVisible(!modalVisible);
            }}
            ButtonType="Outlined"
            ButtonName="Cancel"
            ButtonBackground={Colors.white}
            TextColor={Colors.black}
            style={{
              height: heightPercentageToDP(7),
              width: widthPercentageToDP(70),
              backgroundColor: 'white',
            }}
          />
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color={Colors.black} />}
      <Header
        title="To Do List"
        showMenu={true}
        leftIcon={images.menu}
        menuPress={() => navigation.openDrawer()}
        navigation={navigation}
      />
      <TopTabs
        leftTabText={'InComplete'}
        rightTabText={'Completed'}
        leftTabPress={() => setShowCompleted(false)}
        rightTabPress={() => setShowCompleted(true)}
        leftTabColor={!showCompleted}
        rightTabColor={showCompleted}
      />
      <FlatList
        data={todoListArr}
        keyExtractor={item => item.id}
        renderItem={renderList}
      />
      <FloatBtn
        onPress={() => setModalVisible(!modalVisible)}
        navigation={navigation}
      />
      {renderModal()}
      <DatePicker
        modal
        mode="datetime"
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
