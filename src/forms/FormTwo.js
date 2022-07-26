import {StyleSheet, SafeAreaView, ScrollView, View, Alert} from 'react-native';
import React, {useState, createRef} from 'react';
import {Title, TextInput, Button} from 'react-native-paper';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function FormTwo({navigation}) {
  const [phone, setPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [slack, setSlack] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [parentAddress, setParentAddress] = useState('');
  const [parentLandmark, setParentLandmark] = useState('');
  const [parentCity, setParentCity] = useState('');
  const [parentRegion, setParentRegion] = useState('');

  const userEmailRef = createRef();
  const slackRef = createRef();
  const fatherNameRef = createRef();
  const motherNameRef = createRef();
  const contactNoRef = createRef();
  const addressRef = createRef();
  const landmarkRef = createRef();
  const cityRef = createRef();
  const regionRef = createRef();

  // update user information from firebase
  const handleSaveButton = async () => {
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      firestore()
        .collection('userProfileData')
        .doc(uid)
        .set({
          Phone_Number: phone,
          Email: userEmail,
          Slack: slack,
          Father_Name: fatherName,
          Mother_Name: motherName,
          Parent_Contact: contactNo,
          Parent_Address: parentAddress,
          Parent_Landmark: parentLandmark,
          Parent_City: parentCity,
          Parent_RegionCountry: parentRegion,
        })
        .then(() => {
          Alert.alert(
            'Success',
            'Add User Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('UserHome'),
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
                onPress: () => navigation.navigate('UserHome'),
              },
            ],
            {cancelable: false},
          );
        });
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.titleColor}>Contact</Title>
        <View>
          <TextInput
            mode="outlined"
            label="Phone no"
            onSubmitEditing={() =>
              userEmailRef.current && userEmailRef.current.focus()
            }
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            mode="outlined"
            label="Email id"
            onSubmitEditing={() => slackRef.current && slackRef.current.focus()}
            ref={userEmailRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="email-address"
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
          />
          <TextInput
            mode="outlined"
            label="Slack id"
            onSubmitEditing={() =>
              fatherNameRef.current && fatherNameRef.current.focus()
            }
            ref={slackRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="email-address"
            value={slack}
            onChangeText={text => setSlack(text)}
          />

          <Title style={styles.titleColor}> Parent contact</Title>
          <TextInput
            mode="outlined"
            label="Father name"
            onSubmitEditing={() =>
              motherNameRef.current && motherNameRef.current.focus()
            }
            ref={fatherNameRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={fatherName}
            onChangeText={text => setFatherName(text)}
          />
          <TextInput
            mode="outlined"
            label="Mother name"
            onSubmitEditing={() =>
              contactNoRef.current && contactNoRef.current.focus()
            }
            ref={motherNameRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={motherName}
            onChangeText={text => setMotherName(text)}
          />
          <TextInput
            mode="outlined"
            label="contact no"
            onSubmitEditing={() =>
              addressRef.current && addressRef.current.focus()
            }
            ref={contactNoRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="number-pad"
            value={contactNo}
            onChangeText={text => setContactNo(text)}
          />

          <Title style={styles.titleColor}> Parent address</Title>
          <TextInput
            mode="outlined"
            label="Parent address"
            onSubmitEditing={() =>
              landmarkRef.current && landmarkRef.current.focus()
            }
            ref={addressRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={parentAddress}
            onChangeText={text => setParentAddress(text)}
          />
          <TextInput
            mode="outlined"
            label="Landmark"
            onSubmitEditing={() => cityRef.current && cityRef.current.focus()}
            ref={landmarkRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={parentLandmark}
            onChangeText={text => setParentLandmark(text)}
          />
          <TextInput
            mode="outlined"
            label="City"
            onSubmitEditing={() =>
              regionRef.current && regionRef.current.focus()
            }
            ref={cityRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={parentCity}
            onChangeText={text => setParentCity(text)}
          />
          <TextInput
            mode="outlined"
            label="Country/Region"
            onSubmitEditing={dismissKeyboard}
            ref={regionRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="default"
            value={parentRegion}
            onChangeText={text => setParentRegion(text)}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('FirstInfo')}
            style={styles.backButton}>
            Back
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('ThirdInfo')}
            style={styles.nextButton}>
            Next
          </Button>
        </View>
        <Button
          mode="contained"
          style={styles.updateButton}
          onPress={() => handleSaveButton()}>
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
    marginTop: 30,
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
    backgroundColor: '#FFA500',
  },
  nextButton: {
    marginLeft: 40,
    height: 45,
    paddingTop: 4,
    width: 130,
    backgroundColor: '#FFA500',
  },
  titleColor: {
    color: '#FFA500',
  },
  updateButton: {
    marginBottom: 20,
    backgroundColor: '#FFA500',
  },
});
