// ======================================================= User Profile Data ========================================================
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Title} from 'react-native-paper';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function UserInformationNav() {
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
  const [contactNo, setContactNo] = useState('');
  const [parentAddress, setParentAddress] = useState('');
  const [parentLandmark, setParentLandmark] = useState('');
  const [parentCity, setParentCity] = useState('');
  const [parentRegion, setParentRegion] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');

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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.containerView}>
          <Text style={styles.usernameStyle}>{firstName}</Text>
          <Text>{'  '}</Text>
          <Text style={styles.usernameStyle}>{lastName}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>{profileHeadline}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>{industry}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>{homeEmail}</Text>
        </View>
        {/* About me */}
        <Title style={styles.titleHeading}>About me</Title>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>{aboutMe}</Text>
        </View>
        {/* Current Position */}
        <Title style={styles.titleHeading}>Current position</Title>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>{currentPosition}</Text>
        </View>
        {/* Education*/}
        <Title style={styles.titleHeading}>Education</Title>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>{education}</Text>
        </View>
        {/* Current Address*/}
        <Title style={styles.titleHeading}>Current address</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Address:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{currentAddress}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Landmark's:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{currentLandmark}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>City:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{currentCity}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Country / Region:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{currentRegion}</Text>
        </View>
        {/* Id Verification */}
        <Title style={styles.titleHeading}>id Verification</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Aadhar card:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{aadharNo}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Pan card:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{panNo}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Passport no:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{passportNo}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Driving licence:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>123456782</Text>
        </View>
        {/* Vehicle Information */}
        <Title style={styles.titleHeading}>Vehicle information</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Vehicle Type:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{vehicleType}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Vehicle No:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{vehicleNo}</Text>
        </View>
        {/* Parent Contact */}
        <Title style={styles.titleHeading}>Parent Contact</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Father's Name:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{fatherName}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Mother's Name:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{motherName}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Contact No:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{contactNo}</Text>
        </View>
        {/* Parent Address*/}
        <Title style={styles.titleHeading}>Parent address</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Address:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{parentAddress} </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Landmark's:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{parentLandmark}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>City:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{parentCity}</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Country / Region:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{parentRegion}</Text>
        </View>
        {/* Personal Information*/}
        <Title style={styles.titleHeading}>Personal Information</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Date Of Birth:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{dob} </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Other Phone No:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{secondPhone} </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Slack Id:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>{slack} </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  titleHeading: {
    color: '#FFA500',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  containerView: {
    flexDirection: 'row',
    borderColor: '#000000',
    alignSelf: 'center',
  },
  fontStyle: {
    color: '#808080',
    fontWeight: 'bold',
    flexShrink: 1,
    fontSize: 14,
  },
  contentStyle: {
    color: '#000000',
  },
  usernameStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
});
