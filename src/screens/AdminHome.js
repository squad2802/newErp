import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Keyboard,
  Modal,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {Button, TextInput, Title} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AdminHome({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('+91');
  const userEmailRef = createRef();
  const phoneRef = createRef();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const renderItem = ({item}) => <TodoList title={item.title} />;
  // TodoList
  const TodoList = ({title}) => {
    // Delete User
    const DeleteUser = () => {
      alert('Delete User');
    };

    // Open userList
    const OpenList = () => {
      alert('OpenList');
    };
    return (
      <View style={styles.listTitle}>
        <TouchableOpacity onPress={OpenList} style={styles.touch}>
          <Icon name="people" size={30} color="blue" />
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={DeleteUser}>
          <Icon name="delete" size={25} color="red" />
        </TouchableOpacity>
      </View>
    );
  };
  // handle add user Button
  const handleAddUser = async () => {
    if (userName && userEmail && phone) {
      await firestore()
        .collection('userList')
        .add({
          name: userName,
          email: userEmail,
          phone: phone,
        })
        .then(() => {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('AHome'),
              },
            ],
            {cancelable: false},
          );
        })
        .catch(error => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('AHome'),
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      alert('Please fill all the details');
    }
  };
  useEffect(() => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    // console.log('----->2', adminEmail);
    if (userName != '') {
      if (!userName.trim()) {
        setNameError('Please Enter Name');
      } else {
        setPhoneError('');
      }
      return;
    }
    if (userEmail != '') {
      if (!userEmail.trim()) {
        setEmailError('Please Enter Email');
      } else if (!regEx.test(userEmail)) {
        setEmailError('Input valid email');
      } else {
        setEmailError('');
      }
      return;
    }
    if (phone != '') {
      if (!phone.trim()) {
        setPhoneError('Please Enter Phone');
      } else {
        setPhoneError('');
      }
      return;
    }
  }, [userName, userEmail, phone]);
  return (
    <SafeAreaView>
      <View style={styles.modalView}>
        {/*    */}
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            //     console.log('Modal has been closed.');
            BackHandler.addEventListener(
              'hardwareBackPress',
              setShowModal(!showModal),
            );
          }}>
          <View style={styles.modal}>
            {/* user Name */}
            <Title style={styles.mainTitle}>Add User</Title>
            <TextInput
              mode="outlined"
              placeholder="User Name"
              onSubmitEditing={() =>
                userEmailRef.current && userEmailRef.current.focus()
              }
              blurOnSubmit={false}
              returnKeyType="next"
              value={userName}
              onChangeText={text => setUserName(text)}
            />
            {nameError != '' && <Text style={{color: 'red'}}>{nameError}</Text>}
            {/* user Email */}
            <TextInput
              mode="outlined"
              placeholder="User Email"
              ref={userEmailRef}
              onSubmitEditing={() =>
                phoneRef.current && phoneRef.current.focus()
              }
              blurOnSubmit={false}
              returnKeyType="next"
              value={userEmail}
              onChangeText={text => setUserEmail(text)}
            />
            {emailError != '' && (
              <Text style={{color: 'red'}}>{emailError}</Text>
            )}
            {/* user Phone */}
            <TextInput
              mode="outlined"
              placeholder="User Phone"
              ref={phoneRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              returnKeyType="done"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            {phoneError != '' && (
              <Text style={{color: 'red'}}>{phoneError}</Text>
            )}
            <Button
              mode="contained"
              style={styles.modalButton}
              onPress={handleAddUser}>
              Register
            </Button>
          </View>
        </Modal>
      </View>
      <View style={styles.containerView}>
        <Button
          mode="contained"
          style={styles.containerButton}
          onPress={() => {
            setShowModal(!showModal);
          }}>
          Add User
        </Button>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    marginTop: 30,
  },
  containerButton: {
    width: '60%',
    height: 45,
    paddingTop: 5,
    borderRadius: 20,
    position: 'absolute',
  },
  modalButton: {
    width: '60%',
    height: 45,
    paddingTop: 5,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: 'center',
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    backgroundColor: 'white',
    width: '80%',
    height: '40%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '40%',
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'user One',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'user two',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'user three',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'user four',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'user five',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'user six',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'user seven',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'user eight',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'user nine',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'user ten',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'user eleven',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'user twelve',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'user thirteen',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'user fourteen',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'user fifteen',
//   },
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'user sixteen',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'user seventeen',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'user eighteen',
//   },
// ];
