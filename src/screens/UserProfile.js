import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar, Button} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import UserInformationNav from '../navigate/UserInformationNav';
// import UserInformationNav from '../navigate/UserInformationNav';
export default function UserProfile({navigation}) {
  const [user, setUser] = useState([]);

  // getData from firebase
  const getProfileData = async () => {
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
    getProfileData();
  }, []);

  // edit user
  const editUser = () => {
    // Alert.alert(user.uid);
    navigation.navigate('Info');
  };

  // user message
  const userMessage = () => {
    Alert.alert(user.email);
  };

  // user call
  const usercall = () => {
    Alert.alert(user.phone);
  };

  // user email
  const userEmail = () => {
    Alert.alert(user.email);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.imageView}>
        <Icon
          name="notifications"
          size={30}
          color="#B5952F"
          style={{marginLeft: '90%'}}
        />
        <Avatar.Image size={100} source={require('../assets/mainLogo.jpeg')} />
        <Text style={styles.userText}>{user.email}</Text>
        <Text style={styles.phoneText}>SM0041</Text>
        <Text style={styles.phoneEmail}>{user.email}</Text>
        <View style={styles.viewIcons}>
          <TouchableOpacity onPress={() => editUser()}>
            <Icon name="edit" size={30} color="white" />
            <Text style={{color: 'white'}}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => userMessage()}>
            <Icon name="message" size={30} color="white" />
            <Text style={{color: 'white'}}>message</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => usercall()}>
            <Icon name="phone" size={30} color="white" />
            <Text style={{color: 'white'}}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => userEmail()}>
            <Icon name="email" size={30} color="white" />
            <Text style={{color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button
          mode="contained"
          onPress={() => navigation.navigate('Information')}>
          {' '}
          user Information
        </Button> */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <UserInformationNav />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: 300,
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  userText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: 'white',
  },
  phoneText: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    color: 'white',
  },
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    color: 'white',
  },
  viewIcons: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    marginLeft: 40,
  },
  touchStyle: {
    paddingHorizontal: 50,
  },
});
