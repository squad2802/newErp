import {StyleSheet, ScrollView, View, SafeAreaView, Alert} from 'react-native';
import React, {useState, createRef} from 'react';
import {Title, TextInput, Button} from 'react-native-paper';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/auth';

export default function FormOne({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [profileHeadline, setProfileHeadline] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [industry, setIndustry] = useState('');
  const [education, setEducation] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [currentLandmark, setCurrentLandmark] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentRegion, setCurrentRegion] = useState('');

  const lastNameRef = createRef();
  const dobRef = createRef();
  const profileHeadlineRef = createRef();
  const currentPositionRef = createRef();
  const industryRef = createRef();
  const educationRef = createRef();
  const currentAddressRef = createRef();
  const currentLandmarkRef = createRef();
  const currentCityRef = createRef();
  const currentRegionRef = createRef();

  // save user information
  const handleSave = async () => {
    const data = await firebase.auth().currentUser;
    // console.log('GET USER UID=====.', user.uid);
    const uid = data.user.uid;
    await firestore()
      .collection('userProfile')
      .doc(uid)
      .set({
        Dob: dob,
        Position: currentPosition,
        PostGraduation: education,
        CurrentAddress: currentAddress,
        CurrentCity: currentCity,
        CurrentCountry: currentRegion,
      })
      .then(() => {
        Alert.alert(
          'Success',
          'Add User Successfully',
          [
            {
              text: 'Ok',
              // onPress: () => navigation.navigate('UserList'),
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
              // onPress: () => navigation.navigate('UserList'),
            },
          ],
          {cancelable: false},
        );
      });
  };

  // saveData
  // const handleSave = () => {
  //   firestore.collection('userProfile').add({});
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.titleColor}>Personal information</Title>
        <View>
          <TextInput
            mode="outlined"
            label="First name"
            onSubmitEditing={() =>
              lastNameRef.current && lastNameRef.current.focus()
            }
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
          <TextInput
            mode="outlined"
            label="Last name"
            onSubmitEditing={() => dobRef.current && dobRef.current.focus()}
            ref={lastNameRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
          <TextInput
            mode="outlined"
            label="Date / of /birth"
            onSubmitEditing={() =>
              profileHeadlineRef.current && profileHeadlineRef.current.focus()
            }
            ref={dobRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="decimal-pad"
            value={dob}
            onChangeText={text => setDob(text)}
          />
          <TextInput
            mode="outlined"
            label="Profile headline"
            onSubmitEditing={() =>
              currentPositionRef.current && currentPositionRef.current.focus()
            }
            ref={profileHeadlineRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="ascii-capable"
            value={profileHeadline}
            onChangeText={text => setProfileHeadline(text)}
          />

          <Title style={styles.titleColor}>Current position</Title>
          <TextInput
            mode="outlined"
            label="Current positions"
            onSubmitEditing={() =>
              industryRef.current && industryRef.current.focus()
            }
            ref={currentPositionRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="ascii-capable"
            value={currentPosition}
            onChangeText={text => setCurrentPosition(text)}
          />
          <TextInput
            mode="outlined"
            label="Industry"
            onSubmitEditing={() =>
              educationRef.current && educationRef.current.focus()
            }
            ref={industryRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="ascii-capable"
            value={industry}
            onChangeText={text => setIndustry(text)}
          />

          <Title style={styles.titleColor}>Education</Title>
          <TextInput
            mode="outlined"
            label="Education"
            onSubmitEditing={() =>
              currentAddressRef.current && currentAddressRef.current.focus()
            }
            ref={educationRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={education}
            onChangeText={text => setEducation(text)}
          />

          <Title style={styles.titleColor}>current address</Title>
          <TextInput
            mode="outlined"
            label="Current address"
            onSubmitEditing={() =>
              currentLandmarkRef.current && currentLandmarkRef.current.focus()
            }
            ref={currentAddressRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={currentAddress}
            onChangeText={text => setCurrentAddress(text)}
          />
          <TextInput
            mode="outlined"
            label="Landmark"
            onSubmitEditing={() =>
              currentCityRef.current && currentCityRef.current.focus()
            }
            ref={currentLandmarkRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={currentLandmark}
            onChangeText={text => setCurrentLandmark(text)}
          />
          <TextInput
            mode="outlined"
            label="City"
            onSubmitEditing={() =>
              currentRegionRef.current && currentRegionRef.current.focus()
            }
            ref={currentCityRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={currentCity}
            onChangeText={text => setCurrentCity(text)}
          />
          <TextInput
            mode="outlined"
            label="Country/Region"
            onSubmitEditing={dismissKeyboard}
            ref={currentRegionRef}
            blurOnSubmit={false}
            returnKeyType="Done"
            value={currentRegion}
            onChangeText={text => setCurrentRegion(text)}
          />
        </View>
        <View style={styles.buttonView}>
          <Button mode="contained" style={styles.backButton}>
            Back
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('SecondInfo')}
            style={styles.nextButton}>
            Next
          </Button>
        </View>
        <Button
          mode="contained"
          style={styles.updateButton}
          onPress={() => handleSave()}>
          Update
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 40,
    alignSelf: 'center',
  },
  backButton: {
    marginRight: 40,
    height: 45,
    paddingTop: 4,
    width: 130,
    backgroundColor: 'orange',
  },
  nextButton: {
    marginLeft: 40,
    height: 45,
    paddingTop: 4,
    width: 130,
    backgroundColor: 'orange',
  },
  titleColor: {
    color: 'orange',
  },
  updateButton: {
    marginBottom: 20,
    backgroundColor: 'orange',
  },
});
