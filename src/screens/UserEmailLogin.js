// ======================================================== user login with email =====================================================
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {Button, TextInput, Title} from 'react-native-paper';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';

export default function UserEmailLogin({navigation}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const userPasswordRef = createRef();

  // email and password validation
  useEffect(() => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (userEmail != '') {
      if (!regEx.test(userEmail)) {
        setEmailError('Provide a valid email');
      } else {
        setEmailError('');
      }
      return;
    }
    if (userPassword != '') {
      if (userPassword.length < 6) {
        setPasswordError('password must be 6 character long');
      } else if (userPassword.length > 10) {
        setPasswordError('max 10 character password allowed');
      } else {
        setPasswordError('');
      }
    }
  }, [userEmail, userPassword]);

  // handle user login button
  const handleLoginButton = async () => {
    await auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(userList => {
        console.log(userList);
        if (userList) {
          console.log('successfully login');
          navigation.replace('Home');
        }
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          setPasswordError('email is not valid');
        } else if (error.code === 'auth/user-not-found') {
          setPasswordError('user not found');
        } else {
          setPasswordError('wrong password');
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerView}>
          <Image
            source={require('../assets/mainLogo.jpeg')}
            style={styles.containerImage}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            mode="outlined"
            label="User Email"
            onSubmitEditing={() =>
              userPasswordRef.current && userPasswordRef.current.focus()
            }
            blurOnSubmit={false}
            returnKeyType="next"
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
          />
          {/* errorMessage */}
          {emailError != '' && <Text style={{color: 'red'}}>{emailError}</Text>}

          <TextInput
            mode="outlined"
            label="User Password"
            onSubmitEditing={dismissKeyboard}
            ref={userPasswordRef}
            blurOnSubmit={false}
            secureTextEntry
            returnKeyType="done"
            value={userPassword}
            onChangeText={text => setUserPassword(text)}
          />
          {/* errorMessage */}
          {passwordError != '' && (
            <Text style={{color: 'red'}}>{passwordError}</Text>
          )}

          <Button
            mode="contained"
            disabled={!userEmail || !userPassword}
            style={styles.containerButton}
            onPress={handleLoginButton}>
            Login With Email
          </Button>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Title style={styles.containerTitle}>admin@squadminds.com</Title>
        </TouchableOpacity>
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
    marginTop: 130,
  },
  containerImage: {
    height: 150,
    width: 230,
  },
  containerTitle: {
    alignSelf: 'center',
    color: '#FFA500',
    marginTop: '67%',
    position: 'relative',
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
