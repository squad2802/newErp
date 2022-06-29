import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileView({route, navigation}) {
  // user send Email
  const userSendEmail = () => {
    Alert.alert('send email');
  };

  // user Cheating
  const userChatting = () => {
    Alert.alert('chatting');
  };

  // user Styling
  const userStyle = () => {
    Alert.alert('style');
  };

  // user Meeting
  const userMeetings = () => {
    Alert.alert('meeting');
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
              <Icon name="email" size={30} color="white" />
              <Text style={{color: 'white'}}>email</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => userChatting()}>
              <Icon name="forum" size={30} color="white" />
              <Text style={{color: 'white'}}>chat</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => userStyle()}>
              <Icon name="style" size={30} color="white" />
              <Text style={{color: 'white'}}>style</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchStyle}
              onPress={() => userMeetings()}>
              <Icon name="groups" size={30} color="white" />
              <Text style={{color: 'white'}}>meeting</Text>
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
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 15,
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
    color: 'silver',
  },
  phoneEmail: {
    fontWeight: '600',
    fontSize: 15,
    color: 'silver',
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
