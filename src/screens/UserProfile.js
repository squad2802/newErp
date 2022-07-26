// ======================================================== user Profile =====================================================
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
import {Avatar} from 'react-native-paper';
import {firebase} from '@react-native-firebase/auth';
import UserProfileData from './UserProfileData';

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
    });
  };
  useEffect(() => {
    getProfileData();
  }, []);

  // edit user
  const editUser = () => {
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
        <Avatar.Image size={100} source={require('../assets/mainLogo.jpeg')} />
        <Text style={styles.userText}>SM1015</Text>
        <Text style={styles.phoneText}>{user.name}</Text>
        <Text style={styles.phoneEmail}>{user.email}</Text>
        <View style={styles.viewIcons}>
          <TouchableOpacity onPress={() => editUser()}>
            <Icon name="edit" size={30} color="#FFFFFF" />
            <Text style={{color: '#FFFFFF'}}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => userMessage()}>
            <Icon
              name="message"
              size={30}
              color="#FFFFFF"
              style={{marginLeft: 15}}
            />
            <Text style={{color: '#FFFFFF'}}>message</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => usercall()}>
            <Icon
              name="notifications"
              size={30}
              color="#FFFFFF"
              style={{paddingLeft: 22}}
            />
            <Text style={{color: '#FFFFFF'}}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchStyle}
            onPress={() => userEmail()}>
            <Icon name="email" size={30} color="#FFFFFF" />
            <Text style={{color: '#FFFFFF'}}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <UserProfileData />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: 300,
    width: '100%',
    backgroundColor: '#FFA500',
    alignItems: 'center',
    paddingTop: 30,
  },
  userText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    color: '#FFFFFF',
  },
  phoneText: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    color: '#FFFFFF',
  },
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    color: '#FFFFFF',
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
