import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {Button, TextInput, Title} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

export default function AdminHome({navigation}) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('+91');
  const userEmailRef = createRef();
  const phoneRef = createRef();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  //  handle add user Button
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
                onPress: () => navigation.navigate('TPass'),
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
                onPress: () => navigation.navigate('UserList'),
              },
            ],
            {cancelable: false},
          );
        });
    } else {
      Alert.alert('Please fill all the details');
    }
  };

  //  check validations
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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Title style={styles.title}>ADD USER</Title>

        {/* user name */}
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

        {/* user email */}
        <TextInput
          mode="outlined"
          placeholder="User Email"
          ref={userEmailRef}
          onSubmitEditing={() => phoneRef.current && phoneRef.current.focus()}
          blurOnSubmit={false}
          returnKeyType="next"
          value={userEmail}
          onChangeText={text => setUserEmail(text)}
        />
        {emailError != '' && <Text style={{color: 'red'}}>{emailError}</Text>}

        {/* user phone */}
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
        {phoneError != '' && <Text style={{color: 'red'}}>{phoneError}</Text>}
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => handleAddUser()}>
          Register
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 80,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontWeight: '900',
    alignSelf: 'center',
    color: 'black',
  },
  button: {
    height: 50,
    paddingTop: 7,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 15,
  },
});
