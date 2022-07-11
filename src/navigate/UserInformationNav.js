import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Title} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import {useEffect} from 'react';

export default function UserInformationNav() {
  const [, setUser] = useState('');

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
        <View style={styles.containerView}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            Pradeep
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            Yaduvanshi
          </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>React-Native Mobile Developer</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>SquadMinds Pvt ltd</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>Pradeep@squadmindsinc.com</Text>
        </View>

        <Title style={styles.titleHeading}>Current position</Title>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>associate mobile developer</Text>
        </View>

        <Title style={styles.titleHeading}>Education</Title>
        <View style={styles.containerView}>
          <Text style={styles.contentStyle}>MCA from Sharda university</Text>
        </View>

        <Title style={styles.titleHeading}>Current address</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Address:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>
            He 126, block 2, sector 61, phase 7
          </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Landmark's:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Flower market</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>City:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Mohali</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Country / Region:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Punjab India </Text>
        </View>

        <Title style={styles.titleHeading}>id Verification</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Aadhar card:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>12345678901246632</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Pan card:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>12345678901246632</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Passport no:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>12345678901246632</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Driving licence:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>123456782</Text>
        </View>

        <Title style={styles.titleHeading}>Vehicle information</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Vehicle Type:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Car</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Vehicle No:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Up80 EZ 4793 </Text>
        </View>

        <Title style={styles.titleHeading}>Parent Contact</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Father's Name:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>mr..... </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Mother's Name:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Mrs...... </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Contact No:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>8193931712 </Text>
        </View>

        <Title style={styles.titleHeading}>Parent address</Title>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Address:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Runkata </Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Landmark's:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>NH 2</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>City:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Agra</Text>
        </View>
        <View style={styles.containerView}>
          <Text style={styles.fontStyle}>Country / Region:</Text>
          <Text>{'  '}</Text>
          <Text style={styles.contentStyle}>Uttar Prddesh India </Text>
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
    color: '#71706E',
    fontWeight: 'bold',
    flexShrink: 1,
    fontSize: 16,
  },
  contentStyle: {
    color: 'black',
  },
});
