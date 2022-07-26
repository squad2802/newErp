import {StyleSheet, ScrollView, View, SafeAreaView, Alert} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import {Title, TextInput, Button} from 'react-native-paper';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function UpDateUserInformation({navigation}) {
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
  const [aboutMe, setAboutMe] = useState('');
  const [secondPhone, setSecondPhone] = useState('');
  const [homeEmail, setHomeEmail] = useState('');
  const [slack, setSlack] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [contactNo, setContactNo] = useState('+91 ');
  const [parentAddress, setParentAddress] = useState('');
  const [parentLandmark, setParentLandmark] = useState('');
  const [parentCity, setParentCity] = useState('');
  const [parentRegion, setParentRegion] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [drivLicense, setDrivLicense] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');

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
  const aboutMeRef = createRef();
  const PhoneRef = createRef();
  const otherEmailRef = createRef();
  const slackRef = createRef();
  const fatherNameRef = createRef();
  const motherNameRef = createRef();
  const contactNoRef = createRef();
  const addressRef = createRef();
  const landmarkRef = createRef();
  const cityRef = createRef();
  const regionRef = createRef();
  const AadharRef = createRef();
  const panRef = createRef();
  const passportRef = createRef();
  const drivingLicenseRef = createRef();
  const vehicleTypeRef = createRef();
  const vehicleRef = createRef();

  // handle Update button
  const handleUpdateButton = async () => {
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      firestore()
        .collection('userProfileData')
        .doc(uid)
        .set({
          First_Name: firstName,
          Last_Name: lastName,
          Date_of_Birth: dob,
          Profile_Headline: profileHeadline,
          Current_Position: currentPosition,
          Industry: industry,
          Education: education,
          Current_Address: currentAddress,
          Current_Landmark: currentLandmark,
          Current_City: currentCity,
          Current_RegionCountry: currentRegion,
          About_Me: aboutMe,
          Phone_Number: secondPhone,
          Home_Email: homeEmail,
          Slack: slack,
          Father_Name: fatherName,
          Mother_Name: motherName,
          Parent_Contact: contactNo,
          Parent_Address: parentAddress,
          Parent_Landmark: parentLandmark,
          Parent_City: parentCity,
          Parent_RegionCountry: parentRegion,
          Aadhar_Number: aadharNo,
          PAN_Number: panNo,
          Passport_Number: passportNo,
          Vehicle_Type: vehicleType,
          Vehicle_Number: vehicleNo,
        })
        .then(() => {
          Alert.alert(
            'Success',
            'Update Successfully',
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

  // get user data from firebase
  const handleGetData = async () => {
    await auth().onAuthStateChanged(user => {
      const uid = user.uid;
      if (uid) {
        firestore()
          .collection('userProfileData')
          .doc(uid)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              setFirstName(documentSnapshot.data().First_Name);
              setLastName(documentSnapshot.data().Last_Name);
              setDob(documentSnapshot.data().Date_of_Birth);
              setProfileHeadline(documentSnapshot.data().Profile_Headline);
              setCurrentPosition(documentSnapshot.data().Current_Position);
              setIndustry(documentSnapshot.data().Industry);
              setEducation(documentSnapshot.data().Education);
              setCurrentAddress(documentSnapshot.data().Current_Address);
              setCurrentLandmark(documentSnapshot.data().Current_Landmark);
              setCurrentCity(documentSnapshot.data().Current_City);
              setCurrentRegion(documentSnapshot.data().Current_RegionCountry);
              setAboutMe(documentSnapshot.data().About_Me);
              setSecondPhone(documentSnapshot.data().Phone_Number);
              setHomeEmail(documentSnapshot.data().Home_Email);
              setSlack(documentSnapshot.data().Slack);
              setFatherName(documentSnapshot.data().Father_Name);
              setMotherName(documentSnapshot.data().Mother_Name);
              setContactNo(documentSnapshot.data().Parent_Contact);
              setParentAddress(documentSnapshot.data().Parent_Address);
              setParentLandmark(documentSnapshot.data().Parent_Landmark);
              setParentCity(documentSnapshot.data().Parent_City);
              setParentRegion(documentSnapshot.data().Parent_RegionCountry);
              setAadharNo(documentSnapshot.data().Aadhar_Number);
              setPanNo(documentSnapshot.data().PAN_Number);
              setPassportNo(documentSnapshot.data().Passport_Number);
              setVehicleType(documentSnapshot.data().Vehicle_Type);
              setVehicleNo(documentSnapshot.data().Vehicle_Number);
            }
          });
      }
    });
  };

  useEffect(() => {
    handleGetData();
  }, []);

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
          {/* current position */}
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
          {/* Education */}
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
          {/* current address */}
          <Title style={styles.titleColor}>Current address</Title>
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
            onSubmitEditing={() =>
              aboutMeRef.current && aboutMeRef.current.focus()
            }
            ref={currentRegionRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={currentRegion}
            onChangeText={text => setCurrentRegion(text)}
          />
          {/* about me */}
          <Title style={styles.titleColor}>About me</Title>
          <TextInput
            mode="outlined"
            label="About me"
            onSubmitEditing={PhoneRef.current && PhoneRef.current.focus()}
            ref={aboutMeRef}
            blurOnSubmit={false}
            returnKeyType="default"
            multiline={true}
            value={aboutMe}
            onChangeText={text => setAboutMe(text)}
          />
          {/* Contact */}
          <Title style={styles.titleColor}>Contact</Title>
          <TextInput
            mode="outlined"
            label="Phone no"
            onSubmitEditing={() =>
              otherEmailRef.current && otherEmailRef.current.focus()
            }
            ref={PhoneRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={secondPhone}
            onChangeText={text => setSecondPhone(text)}
          />
          <TextInput
            mode="outlined"
            label="Email Id"
            onSubmitEditing={() => slackRef.current && slackRef.current.focus()}
            ref={otherEmailRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={homeEmail}
            onChangeText={text => setHomeEmail(text)}
          />
          <TextInput
            mode="outlined"
            label="Slack Id"
            onSubmitEditing={() =>
              fatherNameRef.current && fatherNameRef.current.focus()
            }
            ref={slackRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={slack}
            onChangeText={text => setSlack(text)}
          />
          {/* Parent Contact */}
          <Title style={styles.titleColor}>Parent Contact</Title>
          <TextInput
            mode="outlined"
            label="Father Name"
            onSubmitEditing={() =>
              motherNameRef.current && motherNameRef.current.focus()
            }
            ref={fatherNameRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={fatherName}
            onChangeText={text => setFatherName(text)}
          />
          <TextInput
            mode="outlined"
            label="Mother Name"
            onSubmitEditing={() =>
              contactNoRef.current && contactNoRef.current.focus()
            }
            ref={motherNameRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={motherName}
            onChangeText={text => setMotherName(text)}
          />
          <TextInput
            mode="outlined"
            label="Parent Contact"
            onSubmitEditing={() =>
              addressRef.current && addressRef.current.focus()
            }
            ref={contactNoRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={contactNo}
            onChangeText={text => setContactNo(text)}
          />
          {/* Parent Address */}
          <Title style={styles.titleColor}>Parent Address</Title>
          <TextInput
            mode="outlined"
            label="Parent Address"
            onSubmitEditing={() =>
              landmarkRef.current && landmarkRef.current.focus()
            }
            ref={addressRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={parentAddress}
            onChangeText={text => setParentAddress(text)}
          />
          <TextInput
            mode="outlined"
            label="Landmarks"
            onSubmitEditing={() => cityRef.current && cityRef.current.focus()}
            ref={landmarkRef}
            blurOnSubmit={false}
            returnKeyType="next"
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
            value={parentCity}
            onChangeText={text => setParentCity(text)}
          />
          <TextInput
            mode="outlined"
            label="Country/Region"
            onSubmitEditing={() =>
              AadharRef.current && AadharRef.current.focus()
            }
            ref={regionRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={parentRegion}
            onChangeText={text => setParentRegion(text)}
          />
          {/* id verification number */}
          <Title style={styles.titleColor}>Id Verification Number</Title>
          <TextInput
            mode="outlined"
            label="Aadhar No"
            onSubmitEditing={() => panRef.current && panRef.current.focus()}
            ref={AadharRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={aadharNo}
            onChangeText={text => setAadharNo(text)}
          />
          <TextInput
            mode="outlined"
            label="Pan No"
            onSubmitEditing={() =>
              passportRef.current && passportRef.current.focus()
            }
            ref={panRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={panNo}
            onChangeText={text => setPanNo(text)}
          />
          <TextInput
            mode="outlined"
            label="Passport No"
            onSubmitEditing={() =>
              drivingLicenseRef.current && drivingLicenseRef.current.focus()
            }
            ref={passportRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={passportNo}
            onChangeText={text => setPassportNo(text)}
          />
          <TextInput
            mode="outlined"
            label="Driving license No"
            onSubmitEditing={() =>
              vehicleTypeRef.current && vehicleTypeRef.current.focus()
            }
            ref={drivingLicenseRef}
            blurOnSubmit={false}
            returnKeyType="next"
            value={drivLicense}
            onChangeText={text => setDrivLicense(text)}
          />
          {/* vehicle information */}
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
            style={styles.backButton}
            onPress={() => navigation.navigate('UserHome')}>
            Cancel
          </Button>
          <Button
            mode="contained"
            onPress={() => handleUpdateButton()}
            style={styles.nextButton}>
            UPDATE
          </Button>
        </View>
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
});
