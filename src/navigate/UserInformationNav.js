// import React from 'react';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import PageOne from '../forms/PageOne';
// import PageTwo from '../forms/PageTwo';
// import PageThree from '../forms/PageThree';

// const Tab = createMaterialTopTabNavigator();
// export default function UserInformationNav() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Basic" component={PageOne} />
//       <Tab.Screen name="Education" component={PageTwo} />
//       <Tab.Screen name="Personal" component={PageThree} />
//     </Tab.Navigator>
//   );
// }
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Title} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import {useEffect} from 'react';

export default function UserInformationNav() {
  const [user, setUser] = useState('');
  // fetch data from firestore
  const fetchData = async () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const user1 = [];
        user1.push(user);
        user1.map(item => {
          setUser(item);
        });
      }
      // console.log('proper testing ===', user);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* <Title style={styles.titleHeading}>personal information</Title> */}
        <View style={styles.containerView}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Pradeep</Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Yaduvanshi</Text>
        </View>
        <View style={styles.containerView}>
          <Text>React-Native Mobile Developer</Text>
        </View>
        <View style={styles.containerView}>
          <Text>SquadMinds Pvt ltd</Text>
        </View>
        <View style={styles.containerView}>
          <Text>Pradeep@squadmindsinc.com</Text>
        </View>

        <Title style={styles.titleHeading}>Current position</Title>
        <View style={styles.containerView}>
          <Text>associate mobile developer</Text>
        </View>

        <Title style={styles.titleHeading}>Education</Title>
        <View style={styles.containerView}>
          <Text>MCA from Sharda university</Text>
        </View>

        <Title style={styles.titleHeading}>Current address</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Address</Text>
          <Text>{'  '}</Text>
          <Text>He 126, block 2, sector 61, phase 7</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Landmark's</Text>
          <Text>{'  '}</Text>
          <Text>Flower market</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>City</Text>
          <Text>{'  '}</Text>
          <Text>Mohali</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Country / Region</Text>
          <Text>{'  '}</Text>
          <Text>uttar prddesh India </Text>
        </View>

        <Title style={styles.titleHeading}>id Verification</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Aadhar No</Text>
          <Text>{'  '}</Text>
          <Text>12345678901246632</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Pan No</Text>
          <Text>{'  '}</Text>
          <Text>12345678901246632</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Passport No</Text>
          <Text>{'  '}</Text>
          <Text>12345678901246632</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Drivering Licence No</Text>
          <Text>{'  '}</Text>
          <Text>123456782</Text>
        </View>

        <Title style={styles.titleHeading}>Vehicle information</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Vehicle Type</Text>
          <Text>{'  '}</Text>
          <Text>Car</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Vehicle No</Text>
          <Text>{'  '}</Text>
          <Text>Up80 EZ 4793 </Text>
        </View>

        <Title style={styles.titleHeading}>Parent Contact</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Father Name</Text>
          <Text>{'  '}</Text>
          <Text>mr..... </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Mother Name</Text>
          <Text>{'  '}</Text>
          <Text>Mrs...... </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Contact No</Text>
          <Text>{'  '}</Text>
          <Text>8193931712 </Text>
        </View>

        <Title style={styles.titleHeading}>Parent address</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Address</Text>
          <Text>{'  '}</Text>
          <Text>Runkata </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Landmark's</Text>
          <Text>{'  '}</Text>
          <Text>NH 2</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>City</Text>
          <Text>{'  '}</Text>
          <Text>Agra</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Country / Region</Text>
          <Text>{'  '}</Text>
          <Text>Uttar Prddesh India </Text>
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
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  containerView: {
    flexDirection: 'row',
    borderColor: 'black',
    alignSelf: 'center',
  },
  fontStyle: {
    color: 'black',
    fontWeight: 'bold',
    flexShrink: 1,
  },
});
