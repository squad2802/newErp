// ======================================================== User Profile =============================================
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  Linking,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileView({route}) {
  // user send Email
  const userSendEmail = () => {
    Alert.alert('user send email');
  };

  // user Cheating
  const userChatting = () => {
    Alert.alert('user chatting');
  };

  // user Dail Screen
  const openDialScreen = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${route.params.phone}`;
    } else {
      phoneNumber = `telprompt:${route.params.phone}`;
    }
    Linking.openURL(phoneNumber);
  };

  // user Meeting
  const userMeetings = () => {
    Alert.alert('user in meeting');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.imageView}>
          <Avatar.Image size={100} source={require('../assets/white.png')} />
          <Text style={styles.userText}>{route.params.name}</Text>
          <Text style={styles.phoneText}>{route.params.phone}</Text>
          <Text style={styles.phoneEmail}>{route.params.email}</Text>

          <View style={styles.viewIcons}>
            <TouchableOpacity onPress={() => userSendEmail()}>
              <Icon
                name="email"
                size={30}
                color="#FFFFFF"
                style={{marginLeft: 3}}
              />
              <Text style={{color: '#FFFFFF'}}>email</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => userChatting()}>
              <Icon name="forum" size={30} color="#FFFFFF" />
              <Text style={{color: '#FFFFFF'}}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openDialScreen()}>
              <Icon name="phone" size={30} color="#FFFFFF" />
              <Text style={{color: '#FFFFFF'}}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => userMeetings()}>
              <Icon
                name="groups"
                size={30}
                color="#FFFFFF"
                style={{marginLeft: 12}}
              />
              <Text style={{color: '#FFFFFF'}}>meeting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    height: 300,
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    padding: 15,
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
    color: '#A9A9A9',
  },
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    color: '#A9A9A9',
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
