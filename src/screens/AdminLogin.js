// ======================================================== Admin Login =====================================================
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {Button, TextInput, Title} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';

export default function AdminLogin({navigation}) {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const adminPasswordRef = createRef();

  // email and password validations
  useEffect(() => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    // console.log('----->2', adminEmail);
    if (adminEmail !== '') {
      if (!regEx.test(adminEmail)) {
        setEmailError('Please Enter a valid email');
      } else if (adminEmail != 'Test@gmail.com') {
        setEmailError('you are not admin');
      } else {
        setEmailError('');
      }
    }
    if (adminPassword != '') {
      if (adminPassword.length <= 6) {
        setPasswordError('password must be 6 character long');
      } else if (adminPassword.length >= 13) {
        setPasswordError('max 13 character password allowed');
      } else {
        setPasswordError('');
      }
    }
  }, [adminEmail, adminPassword]);

  // login with admin
  const handleAdminLoginButton = async () => {
    try {
      await auth()
        .signInWithEmailAndPassword(adminEmail, adminPassword)
        .then(user => {
          // console.log(userList);
          // console.log('Register Successfully. Please Login to Precess');
          if (user) {
            console.log('successfully admin login ');
            navigation.replace('UserList'); //UserList
          }
        });
    } catch (e) {
      console.log(e);
      if (e.code === 'auth/invalid-email') {
        setPasswordError('email is not valid');
      } else if (e.code === 'auth/user not found') {
        setPasswordError('user not found');
      } else {
        setPasswordError('wrong password');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <Title>Admin Login</Title>
          <Image
            source={require('../assets/mainLogo.jpeg')}
            style={styles.containerImage}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            mode="outlined"
            placeholder="Admin Email"
            onSubmitEditing={() =>
              adminPasswordRef.current && adminPasswordRef.current.focus()
            }
            value={adminEmail}
            blurOnSubmit={false}
            returnKeyType="next"
            onChangeText={text => setAdminEmail(text)}
          />
          {emailError != '' && <Text style={{color: 'red'}}>{emailError}</Text>}

          <TextInput
            mode="outlined"
            placeholder="Admin Password"
            value={adminPassword}
            ref={adminPasswordRef}
            blurOnSubmit={false}
            secureTextEntry
            onSubmitEditing={Keyboard.dismiss}
            returnKeyType="done"
            onChangeText={text => setAdminPassword(text)}
          />
          {passwordError != '' && (
            <Text style={{color: 'red'}}>{passwordError}</Text>
          )}

          <Button
            mode="contained"
            disabled={!adminEmail || !adminPassword}
            style={styles.containerButton}
            onPress={handleAdminLoginButton}>
            Login With Admin
          </Button>
          <Text style={{color: '#FFA500', marginTop: 5}}>
            Please login here with Admin Add Delete and Update User
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerView: {
    alignItems: 'center',
    marginTop: 100,
  },
  containerImage: {
    height: 150,
    width: 230,
  },
  inputView: {
    marginRight: '10%',
    marginLeft: '10%',
  },
  containerButton: {
    height: 50,
    paddingTop: 7,
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: '#FFA500',
  },
});
