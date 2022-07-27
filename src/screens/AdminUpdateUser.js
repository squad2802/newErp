// ======================================================== Admin update user =====================================================
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

export default function AdminHome({route, navigation}) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('+91');
  const userEmailRef = createRef();
  const phoneRef = createRef();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const {itemId} = route.params;
  const {itemName} = route.params;
  const {itemEmail} = route.params;
  const {itemPhone} = route.params;

  useEffect(() => {
    setUserName(itemName);
    setUserEmail(itemEmail);
    setPhone(itemPhone);
  }, [itemEmail, itemName, itemPhone]);

  // update user name email or phone
  const handleUpDate = async () => {
    if (itemId) {
      await firestore()
        .collection('userList')
        .doc(itemId)
        .update({
          name: userName,
          email: userEmail,
          phone: phone,
        })
        .then(() => {
          Alert.alert(
            'Success',
            'Update Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('UserList'),
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
      alert('something wrong');
    }
  };

  //  check validations
  useEffect(() => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    // console.log('----->2', adminEmail);
    if (userName != '') {
      if (userName.length < 4) {
        setNameError('minimum 4 character name allowed');
      } else {
        setNameError('');
      }
      return;
    }
    if (userEmail != '') {
      if (!regEx.test(userEmail)) {
        setEmailError('Provide a valid email');
      } else {
        setEmailError('');
      }
      return;
    }
    if (phone != '') {
      if (phone.length < 10) {
        setPhoneError('number must be 10 digits');
      } else {
        setPhoneError('');
      }
      return;
    }
  }, [userName, userEmail, phone]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Title style={styles.title}>UPDATE USER</Title>
        {/* <Text> userId: {itemId}</Text> */}

        {/* user name */}
        <TextInput
          mode="outlined"
          label="User Name"
          style={styles.textInput}
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
          label="User Email"
          ref={userEmailRef}
          onSubmitEditing={() => phoneRef.current && phoneRef.current.focus()}
          blurOnSubmit={false}
          style={styles.textInput}
          returnKeyType="next"
          value={userEmail}
          onChangeText={text => setUserEmail(text)}
        />
        {emailError != '' && <Text style={{color: 'red'}}>{emailError}</Text>}

        {/* user phone */}
        <TextInput
          mode="outlined"
          label="User Phone"
          ref={phoneRef}
          onSubmitEditing={Keyboard.dismiss}
          blurOnSubmit={false}
          style={styles.textInput}
          returnKeyType="done"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        {phoneError != '' && <Text style={{color: 'red'}}>{phoneError}</Text>}
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => handleUpDate()}>
          update
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
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  title: {
    fontWeight: '900',
    alignSelf: 'center',
    color: '#808080',
    marginBottom: 15,
  },
  button: {
    height: 50,
    paddingTop: 7,
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#FFA500',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    marginTop: 7,
  },
});
