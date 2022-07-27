import {StyleSheet, SafeAreaView, ScrollView, View, Alert} from 'react-native';
import React, {useState, createRef} from 'react';
import {Title, Button, TextInput} from 'react-native-paper';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function FormThree({navigation}) {
  const [aadharNo, setAadharNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');

  const panRef = createRef();
  const passportRef = createRef();
  const vehicleTypeRef = createRef();
  const vehicleRef = createRef();

  // update user information from firebase
  const handleSaveButton = async () => {
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      firestore()
        .collection('userProfileData')
        .doc(uid)
        .set({
          Aadhar_Number: aadharNo,
          PAN_Number: panNo,
          Passport_Number: passportNo,
          Vehicle_Type: vehicleType,
          Vehicle_Number: vehicleNo,
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
      <ScrollView>
        <Title style={styles.titleColor}> Id verification number</Title>
        <View>
          <TextInput
            mode="outlined"
            label="aadhar no"
            onSubmitEditing={() => panRef.current && panRef.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="number-pad"
            value={aadharNo}
            onChangeText={text => setAadharNo(text)}
          />
          <TextInput
            mode="outlined"
            label="PAN no"
            onSubmitEditing={() =>
              passportRef.current && passportRef.current.focus()
            }
            ref={panRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="ascii-capable"
            value={panNo}
            onChangeText={text => setPanNo(text)}
          />
          <TextInput
            mode="outlined"
            label="passport no"
            onSubmitEditing={() =>
              vehicleTypeRef.current && vehicleTypeRef.current.focus()
            }
            ref={passportRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="number-pad"
            value={passportNo}
            onChangeText={text => setPassportNo(text)}
          />
          <Title style={styles.titleColor}> vehicle information</Title>
          <TextInput
            mode="outlined"
            label="vehicle type"
            onSubmitEditing={() =>
              vehicleRef.current && vehicleRef.current.focus()
            }
            ref={vehicleTypeRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="ascii-capable"
            value={vehicleType}
            onChangeText={text => setVehicleType(text)}
          />
          <TextInput
            mode="outlined"
            label="vehicle no"
            onSubmitEditing={dismissKeyboard}
            ref={vehicleRef}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="ascii-capable"
            value={vehicleNo}
            onChangeText={text => setVehicleNo(text)}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('SecondInfo')}
            style={styles.backButton}>
            Back
          </Button>
          <Button mode="contained" style={styles.nextButton}>
            Save
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
    marginTop: 40,
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
