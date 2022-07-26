// ======================================================== user login with phone =====================================================
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PhoneInput from 'react-native-phone-number-input';
import {Button, Title} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import 'react-native-gesture-handler';

export default function UserPhoneLogin({navigation}) {
  const phoneRef = useRef();
  const [confirm, setConfirm] = useState(null);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [otpArray, setOtpArray] = useState('');
  const ref = useBlurOnFulfill({otpArray, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    otpArray,
    setOtpArray,
  });
  const [, setUser] = useState(null);
  // phone validation
  useEffect(() => {
    if (phone != '') {
      if (phone.length < 13) {
        setPhoneError('number must be 10 digits');
      } else {
        setPhoneError('');
      }
    }
  }, [phone]);

  // handle phone authentication
  const handleGetOtpButton = async () => {
    const confirmation = await auth().signInWithPhoneNumber(phone);
    setConfirm(confirmation);
  };
  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user) {
    console.log(user, 'user');
  }

  // handle setOtp button
  const handleSetOtpButton = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        otpArray,
      );
      let userData = await auth().currentUser.linkWithCredential(credential);
      setUser(userData.user);
    } catch (error) {
      if (error.code === 'auth/invalid-verification-code') {
        console.log('Invalid code');
      } else {
        // console.log('you are login');
        navigation.replace('Home');
      }
    }
  };
  if (!confirm) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.containerView}>
            <Image
              source={require('../assets/mainLogo.jpeg')}
              style={styles.containerImage}
            />
            <View style={styles.phoneView}>
              <PhoneInput
                ref={phoneRef}
                {...props}
                defaultValue={phone}
                defaultCode="IN"
                layout="first"
                withShadow
                autoFocus
                maxLength={10}
                containerStyle={styles.phoneNumberView}
                textContainerStyle={{paddingVertical: 0}}
                onChangeFormattedText={setPhone}
              />
              {phoneError != '' && (
                <Text style={{color: 'red'}}>{phoneError}</Text>
              )}
              <Button
                mode="contained"
                disabled={!phone}
                style={styles.containerButton}
                onPress={handleGetOtpButton}>
                Get Otp!
              </Button>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Title style={styles.containerTitle}>admin@squadminds.com</Title>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Enter user 6 digit code
  return (
    <SafeAreaView style={styles.containerOtp}>
      <ScrollView>
        <Title style={styles.containerOtpTitle}>
          Verify the Authorization code
        </Title>
        <Title style={{color: '#000000', alignSelf: 'center'}}>phone</Title>
        <CodeField
          ref={ref}
          caretHidden={false}
          value={otpArray}
          onChangeText={otpArray => setOtpArray(otpArray)}
          cellCount={6}
          autoFocus
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          numberContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Button
          mode="contained"
          disabled={!otpArray}
          style={styles.containerButton}
          onPress={handleSetOtpButton}>
          Verify Otp!
        </Button>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 15, color: '#A9A9A9'}}>change Number</Text>
          <Text style={{marginLeft: 130, color: '#A9A9A9'}}>Resend Otp</Text>
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
    marginTop: 130,
  },
  containerImage: {
    height: 150,
    width: 230,
  },
  containerTitle: {
    alignSelf: 'center',
    marginTop: '83%',
    color: '#FFA500',
    position: 'relative',
  },
  phoneView: {
    marginTop: 10,
  },
  containerButton: {
    marginTop: 20,
    paddingTop: 7,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFA500',
  },
  containerOtpTitle: {
    alignSelf: 'center',
    marginTop: 50,
  },
  containerOtp: {
    marginRight: '10%',
    marginLeft: '10%',
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#FFA500',
    textAlign: 'center',
    color: '#000000',
  },
  focusCell: {
    borderColor: '#FFFFFF',
    color: '#000000',
  },
});
